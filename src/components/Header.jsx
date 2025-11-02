import React from "react";
import "./../styles/Header.css";

const Header = ({ account, onConnect }) => {
  return (
    <header className="header">
      <div className="logo">Tether USD (USDT)</div>

      <nav className="nav">
        <a href="#token-info">Token Info</a>
        <a href="#user-panel">User Panel</a>
        <a href="#owner-panel">Owner Panel</a>
      </nav>

      <div className="wallet-section">
        {account ? (
          <span className="wallet-address">
            {account.slice(0, 6)}...{account.slice(-4)}
          </span>
        ) : (
          <button className="connect-btn" onClick={onConnect}>
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
