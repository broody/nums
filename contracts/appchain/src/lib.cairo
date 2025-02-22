pub mod systems {
    pub mod game_actions;
    pub mod claim_actions;
    pub mod message_handlers;
}

pub mod models {
    pub mod game;
    pub mod slot;
    pub mod totals;
}

pub mod elements {
    pub mod achievements {
        pub mod interface;
        pub mod index;
        pub mod king;
        pub mod grinder;
        pub mod reference;
        pub mod filler;
        pub mod streak;
        pub mod claimer;
    }
    pub mod tasks {
        pub mod interface;
        pub mod index;
        pub mod king;
        pub mod grinder;
        pub mod reference;
        pub mod filler;
        pub mod streaker;
        pub mod claimer;
    }
}

pub mod tests {
    pub mod test_reward;
    pub mod test_game;
}

