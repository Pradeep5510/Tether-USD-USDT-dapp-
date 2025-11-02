/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-undef */
import React, { useState } from "react";
import { ethers, parseUnits } from "ethers";
import { contractABI, contractAddress } from "./abi";
import "./../styles/OwnerPanel.css";

const OwnerPanel = ({ account }) => {
  const [mintTo, setMintTo] = useState("");
  const [mintAmount, setMintAmount] = useState("");
  const [burnFrom, setBurnFrom] = useState("");
  const [burnAmount, setBurnAmount] = useState("");

  const handleMint = async () => {
    try {
      if (!window.ethereum) return alert("Please connect wallet first");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const rawAmount = BigInt(mintAmount);

      // ✅ Do not divide BigInts — parseUnits already handles correct scaling
      const tx = await contract.mint(mintTo, rawAmount);
      await tx.wait();

      alert(`Minted ${mintAmount} tokens successfully!`);
      setMintTo("");
      setMintAmount("");
    } catch (error) {
      console.error("Mint error:", error);
      alert("Mint failed! Check console for details.");
    }
  };

  const handleForceBurn = async () => {
    try {
      if (!window.ethereum) return alert("Please connect wallet first");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      
    const rawAmount = BigInt(burnAmount);

      // ✅ No division — BigInt safe
      const tx = await contract.forceBurnFrom(burnFrom, rawAmount);
      await tx.wait();

    alert(`Force burned ${burnAmount} tokens successfully!`);
      setBurnFrom("");
      setBurnAmount("");
    } catch (error) {
      console.error("Force burn error:", error);
      alert("Force burn failed! Check console for details.");
    }
  };

  return (
    <div className="panel" id="owner-panel">
      <h2>Owner Panel</h2>

      <div className="sub-panel">
        <h3>Mint Tokens</h3>
        <input
          type="text"
          placeholder="Recipient Address"
          value={mintTo}
          onChange={(e) => setMintTo(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={mintAmount}
          onChange={(e) => setMintAmount(e.target.value)}
        />
        <button onClick={handleMint}>Mint</button>
      </div>

      <div className="sub-panel">
        <h3>Force Burn</h3>
        <input
          type="text"
          placeholder="Address to Burn From"
          value={burnFrom}
          onChange={(e) => setBurnFrom(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={burnAmount}
          onChange={(e) => setBurnAmount(e.target.value)}
        />
        <button onClick={handleForceBurn}>Force Burn</button>
      </div>
    </div>
  );
};

export default OwnerPanel;
