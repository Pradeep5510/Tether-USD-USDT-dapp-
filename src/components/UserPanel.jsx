import React, { useState } from "react";
import { ethers, parseUnits } from "ethers";
import { contractABI, contractAddress } from "./abi";
import "./../styles/UserPanel.css";

const UserPanel = ({ account }) => {
  const [transferTo, setTransferTo] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = async () => {
    try {
      if (!window.ethereum) return alert("Please connect wallet first");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const decimals = await contract.decimals();
      const scaledAmount = parseUnits(amount, decimals);

      const tx = await contract.transfer(transferTo, scaledAmount);
      await tx.wait();

      alert("Transfer successful!");
      setTransferTo("");
      setAmount("");
    } catch (error) {
      console.error("Transfer error:", error);
      alert("Transfer failed! Check console for details.");
    }
  };

  return (
    <div className="panel" id="user-panel">
      <h2>User Panel</h2>
      <input
        type="text"
        placeholder="Recipient Address"
        value={transferTo}
        onChange={(e) => setTransferTo(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

export default UserPanel;
