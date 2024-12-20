use nums::models::config::Config;

#[starknet::interface]
pub trait IGameActions<T> {
    fn create_game(ref self: T, challenge_id: Option<u32>) -> (u32, u16);
    fn set_config(ref self: T, config: Config);
    fn set_slot(ref self: T, game_id: u32, target_idx: u8) -> u16;
    fn set_name(ref self: T, game_id: u32, name: felt252);
    fn end_game(ref self: T, game_id: u32);
}

#[dojo::contract]
pub mod game_actions {
    use core::array::ArrayTrait;
    use nums::interfaces::token::{INumsTokenDispatcher, INumsTokenDispatcherTrait};
    use nums::models::config::{Config, SlotRewardTrait};
    use nums::models::game::{Game, Reward, GameTrait};
    use nums::models::challenge::challenge::Challenge;
    use nums::models::name::Name;
    use nums::models::slot::Slot;
    use nums::utils::random::{Random, RandomImpl};

    use dojo::model::ModelStorage;
    use dojo::event::EventStorage;
    use dojo::world::IWorldDispatcherTrait;

    use starknet::{ContractAddress, get_caller_address};
    use super::IGameActions;

    const WORLD: felt252 = 0;

    #[derive(Drop, Serde)]
    #[dojo::event]
    pub struct Inserted {
        #[key]
        game_id: u32,
        #[key]
        player: ContractAddress,
        index: u8,
        number: u16,
        next_number: u16,
        remaining_slots: u8
    }

    #[derive(Drop, Serde)]
    #[dojo::event]
    pub struct GameCreated {
        #[key]
        game_id: u32,
        #[key]
        player: ContractAddress,
        max_slots: u8,
        max_number: u16,
        min_number: u16,
        challenge_id: Option<u32>,
    }

    #[abi(embed_v0)]
    impl GameActionsImpl of IGameActions<ContractState> {
        fn set_config(ref self: ContractState, config: Config) {
            let owner = get_caller_address();
            let mut world = self.world(@"nums");

            assert!(world.dispatcher.is_owner(WORLD, owner), "Unauthorized owner");
            assert!(config.world_resource == WORLD, "Invalid config state");

            world.write_model(@config);
        }

        /// Creates a new game instance, initializes its state, and emits a creation event.
        ///
        /// # Returns
        /// A tuple containing the game ID and the first random number for the game.
        fn create_game(ref self: ContractState, challenge_id: Option<u32>) -> (u32, u16) {
            let mut world = self.world(@"nums");
            let config: Config = world.read_model(WORLD);
            let game_config = config.game.expect('Game config not set');

            let game_id = world.dispatcher.uuid();
            let player = get_caller_address();
            let mut rand = RandomImpl::new();
            let next_number = rand.between::<u16>(game_config.min_number, game_config.max_number);

            if let Option::Some(reward_config) = config.reward {
                assert!(reward_config.levels.len() > 0, "Reward levels not set");
                world
                    .write_model(
                        @Reward {
                            game_id,
                            player,
                            total: 0,
                        }
                    );
            }

            world
                .write_model(
                    @Game {
                        game_id,
                        player,
                        max_slots: game_config.max_slots,
                        remaining_slots: game_config.max_slots,
                        max_number: game_config.max_number,
                        min_number: game_config.min_number,
                        next_number,
                        finished: false,
                        challenge_id,
                    }
                );

            world
                .emit_event(
                    @GameCreated {
                        game_id,
                        player,
                        max_slots: game_config.max_slots,
                        max_number: game_config.max_number,
                        min_number: game_config.min_number,
                        challenge_id,
                    }
                );

            if let Option::Some(challenge_id) = challenge_id {
                let challenge: Challenge = world.read_model(challenge_id);
                assert!(challenge.winner.is_none(), "Challenge already won");
                // TODO: Transfer fee token
            }

            (game_id, next_number)
        }

        fn end_game(ref self: ContractState, game_id: u32) {
            let mut world = self.world(@"nums");
            let player = get_caller_address();
            let mut game: Game = world.read_model((game_id, player));

            assert!(game.player == player, "Unauthorized player");
            assert!(!game.finished, "Game already finished");

            game.finished = true;
            world.write_model(@game);

            let config: Config = world.read_model(WORLD);

            // Slot reward
            if let Option::Some(reward_config) = config.reward {
                let (address, amount) = reward_config.compute(game.level());
                INumsTokenDispatcher { contract_address: address }.reward(player, amount);

                let mut game_reward: Reward = world.read_model((game_id, player));
                game_reward.total = amount.into();
                world.write_model(@game_reward);
            }
        }

        /// Sets a number in the specified slot for a game. It ensures the slot is valid and not
        /// already filled, updates the game state, and emits an event indicating the slot has been
        /// filled.
        ///
        /// # Arguments
        /// * `game_id` - The identifier of the game.
        /// * `target_idx` - The index of the slot to be set.
        ///
        /// # Returns
        /// The next random number to be used in the game.
        fn set_slot(ref self: ContractState, game_id: u32, target_idx: u8) -> u16 {
            let player = get_caller_address();
            let mut world = self.world(@"nums");
            let mut game: Game = world.read_model((game_id, player));

            assert!(game.player == player, "Unauthorized player");
            assert!(!game.finished, "Game already finished");
            assert!(target_idx < game.max_slots, "Invalid slot");

            // Build up nums array and insert target
            let mut nums = ArrayTrait::<u16>::new();
            let mut idx = 0_u8;
            loop {
                let slot: Slot = world.read_model((game_id, player, idx));
                if slot.number != 0 {
                    // Check if we're trying to insert into a filled slot
                    assert!(target_idx != idx, "Slot already filled");
                    nums.append(slot.number);
                }

                if target_idx == idx {
                    nums.append(game.next_number);
                }

                idx += 1_u8;
                if idx == game.max_slots {
                    break;
                }
            };

            // Check ordering of new nums array
            assert!(game.is_valid(@nums), "Invalid game state");

            // Update game state
            let target_number = game.next_number;
            let mut rand = RandomImpl::new();
            let next_number = next_random(rand, @nums, game.min_number, game.max_number);

            game.next_number = next_number;
            game.remaining_slots -= 1;

            world.write_model(@game);
            world.write_model(@Slot { game_id, player, index: target_idx, number: target_number });

            world
                .emit_event(
                    @Inserted {
                        game_id,
                        player,
                        index: target_idx,
                        number: target_number,
                        next_number,
                        remaining_slots: game.remaining_slots
                    }
                );

            next_number
        }

        /// Sets the player's name for a specific game. Ensures that the player is authorized and
        /// that the name has not been set before.
        ///
        /// # Arguments
        /// * `game_id` - The identifier of the game.
        /// * `name` - The new name to be set for the player.
        fn set_name(ref self: ContractState, game_id: u32, name: felt252) {
            let mut world = self.world(@"nums");
            let player = get_caller_address();
            let mut name_model: Name = world.read_model((game_id, player));
            assert!(name_model.player == player, "Unauthorized player");
            assert!(name_model.name == 0, "Name already set");

            name_model.name = name;
            world.write_model(@name_model);
        }
    }

    /// Generates a random `u16` number between `min` and `max` that is not already present in the
    /// given array `nums`.
    /// If the generated number is found in the array, it recursively generates a new random number
    /// until a unique one is found.
    ///
    /// # Arguments
    /// * `rand` - A `Random` object used to generate random numbers.
    /// * `nums` - An array of `u16` numbers to check for duplicates.
    /// * `min` - The minimum value for the random number range.
    /// * `max` - The maximum value for the random number range.
    ///
    /// # Returns
    /// A unique random `u16` number between `min` and `max`.
    fn next_random(mut rand: Random, mut nums: @Array<u16>, min: u16, max: u16) -> u16 {
        let random = rand.between::<u16>(min, max);
        let mut reroll = false;
        let mut idx = 0_u32;
        loop {
            if idx == nums.len() {
                break;
            }

            if *nums.at(idx) == random {
                reroll = true;
                break;
            }

            idx += 1;
        };

        match reroll {
            true => next_random(rand, nums, min, max),
            false => random
        }
    }
}

