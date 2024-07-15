use starknet::ContractAddress;

#[derive(Drop, Serde)]
#[dojo::model]
struct Slot {
    #[key]
    game_id: u32,
    #[key]
    player: ContractAddress,
    #[key]
    index: u8,
    number: u16,
}
