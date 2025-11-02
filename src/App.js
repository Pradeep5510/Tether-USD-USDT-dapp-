import React, { useState } from "react";
import Header from "./components/Header";
import ConnectWallet from "./components/ConnectWallet";
import TokenInfo from "./components/TokenInfo";
import UserPanel from "./components/UserPanel";
import OwnerPanel from "./components/OwnerPanel";
import "./App.css";

const App = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    setAccount(accounts[0]);
  };

  return (
    <div className="app">
      <Header account={account} onConnect={connectWallet} />
      {!account ? (
        <ConnectWallet account={account} onConnect={connectWallet} />
      ) : (
        <>
          <TokenInfo />
          <UserPanel account={account} />
          <OwnerPanel account={account} />
        </>
      )}
    </div>
  );
};

export default App;
