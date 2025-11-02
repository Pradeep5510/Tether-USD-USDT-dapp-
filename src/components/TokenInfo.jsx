import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAddress, contractABI } from "./abi";
import "./../styles/TokenInfo.css";

const TokenInfo = () => {
  const [totalSupply, setTotalSupply] = useState(0);
  const [decimals, setDecimals] = useState(6);

  const fetchTokenInfo = async () => {
    if (!window.ethereum) return;
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    const supply = await contract.totalSupply();
    const dec = await contract.decimals();

    setDecimals(dec);
    setTotalSupply(ethers.formatUnits(supply, dec));
  };

  useEffect(() => {
    fetchTokenInfo();
  }, []);

  return (
    <div className="token-card" id="token-info">
      <h2>Token Information</h2>
      <p><b>Total Supply:</b> {totalSupply} USDT</p>
      <p><b>Decimals:</b> {decimals}</p>
    </div>
  );
};

export default TokenInfo;
