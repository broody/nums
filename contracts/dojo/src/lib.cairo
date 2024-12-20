pub mod systems {
    pub mod game_actions;
    pub mod challenge_actions;
}

pub mod models {
    pub mod config;
    pub mod game;
    pub mod challenge {
        pub mod challenge;
        pub mod fee;
        pub mod mode;
        pub mod token;
        pub mod metadata;
    }
    pub mod name;
    pub mod slot;
}

pub mod interfaces {
    pub mod token;
}

pub mod utils {
    pub mod random;
}

pub mod tests {
    pub mod test_challenge;
    pub mod test_reward;
    pub mod test_game;
}

