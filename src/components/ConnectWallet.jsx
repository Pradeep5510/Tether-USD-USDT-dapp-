import React from "react";
import "./../styles/ConnectWallet.css";

const ConnectWallet = ({ account, onConnect }) => {
  return (
    <div className="wallet-card">
      <h2>Connect to your Wallet</h2>
      <p>Use MetaMask to connect and interact with the USDT smart contract.</p>
      {account ? (
        <div className="connected">
          ✅ Connected: {account.slice(0, 6)}...{account.slice(-4)}
        </div>
      ) : (
        <button onClick={onConnect}>Connect Wallet</button>
      )}
    </div>
  );
};

export default ConnectWallet;
