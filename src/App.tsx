import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import {
  StarknetConfig,
  Connector,
  starkscan,
  jsonRpcProvider,
} from "@starknet-react/core";
import { Chain, sepolia } from "@starknet-react/chains";
import CartridgeConnector from "@cartridge/connector";

function rpc(_chain: Chain) {
  return {
    nodeUrl: import.meta.env.VITE_RPC_URL,
  };
}

const connectors = [new CartridgeConnector([
  { 
    target: import.meta.env.VITE_ACTIONS_CONTRACT,
    method: "create",
  },
  { 
    target: import.meta.env.VITE_ACTIONS_CONTRACT,
    method: "set_slot",
  }
], {
  url: "https://keychain-git-fix-est-fee.preview.cartridge.gg/"
}) as never as Connector];

function App() {
  return (
    <StarknetConfig
      autoConnect
      chains={[sepolia]}
      connectors={connectors}
      explorer={starkscan}
      provider={jsonRpcProvider({ rpc })}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Leaderboard />} />
          <Route path="/:gameId" element={<Game />} />
        </Routes>
      </Router>
    </StarknetConfig>
  );
}

export default App;
