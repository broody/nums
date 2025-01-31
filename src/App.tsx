import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./Game";
import Home from "./Home";
import {
  StarknetConfig,
  voyager,
  jsonRpcProvider,
  Connector,
} from "@starknet-react/core";
import { Chain, sepolia, mainnet } from "@starknet-react/chains";
import { ControllerOptions } from "@cartridge/controller";
import { SessionPolicies } from "@cartridge/presets";
import ControllerConnector from "@cartridge/connector/controller";
import { num } from "starknet";
import { UrqlProvider } from "./UrqlContext";
import "./fonts.css";
import { APPCHAIN_CHAIN_ID, STARKNET_CHAIN_ID } from "./hooks/chain";

const provider = jsonRpcProvider({
  rpc: (chain: Chain) => {
    switch (chain) {
      case mainnet:
        return { nodeUrl: import.meta.env.VITE_MAINNET_RPC_URL };
      case sepolia:
        return { nodeUrl: import.meta.env.VITE_SEPOLIA_RPC_URL };
      case appchain:
        return { nodeUrl: import.meta.env.VITE_APPCHAIN_RPC_URL };
      case mockStarknet:
        return { nodeUrl: import.meta.env.VITE_MOCK_STARKNET_RPC_URL };
      default:
        throw new Error(`Unsupported chain: ${chain.network}`);
    }
  },
});

const policies: SessionPolicies = {
  contracts: {
    [import.meta.env.VITE_GAME_CONTRACT]: {
      methods: [
        {
          name: "Create Game",
          entrypoint: "create_game",
          description: "Creates a new game",
        },
        {
          name: "Set Slot",
          entrypoint: "set_slot",
          description: "Sets one slot for the game",
        },
        {
          name: "Request Random",
          entrypoint: "request_random",
          description: "Requests a random number from the VRF contract",
        },
      ],
    },
    [import.meta.env.VITE_CLAIM_CONTRACT]: {
      methods: [
        {
          name: "Claim Appchain Reward",
          entrypoint: "claim_reward",
          description: "Claims token rewards on Appchain",
        },
      ],
    },
    [import.meta.env.VITE_CONSUMER_CONTRACT]: {
      methods: [
        {
          name: "Consume Reward on Starknet",
          entrypoint: "consume_claim_reward",
          description: "Consumes a claim reward message on Starknet",
        },
      ],
    },
  },
};

const options: ControllerOptions = {
  policies,
  defaultChainId: APPCHAIN_CHAIN_ID,
  chains: [
    { rpcUrl: import.meta.env.VITE_APPCHAIN_RPC_URL },
    { rpcUrl: import.meta.env.VITE_MOCK_STARKNET_RPC_URL },
  ],
  tokens: {
    erc20: [import.meta.env.VITE_NUMS_ERC20],
  },
};

const connectors = [new ControllerConnector(options) as never as Connector];

const appchain: Chain = {
  id: num.toBigInt(APPCHAIN_CHAIN_ID),
  network: "appchain",
  name: "Nums Chain",
  rpcUrls: {
    default: import.meta.env.VITE_APPCHAIN_RPC_URL,
    public: import.meta.env.VITE_APPCHAIN_RPC_URL,
  },
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
    address: import.meta.env.VITE_ETH_ADDRESS,
  },
};

const mockStarknet: Chain = {
  id: num.toBigInt(STARKNET_CHAIN_ID),
  network: "mockStarknet",
  name: "Mock Starknet",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
    address: import.meta.env.VITE_ETH_ADDRESS,
  },
  rpcUrls: {
    default: import.meta.env.VITE_MOCK_STARKNET_RPC_URL,
    public: import.meta.env.VITE_MOCK_STARKNET_RPC_URL,
  },
};

function App() {
  return (
    <StarknetConfig
      autoConnect
      chains={[appchain, mockStarknet]}
      connectors={connectors}
      explorer={voyager}
      provider={provider}
    >
      <UrqlProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:gameId" element={<Game />} />
          </Routes>
        </Router>
      </UrqlProvider>
    </StarknetConfig>
  );
}

export default App;
