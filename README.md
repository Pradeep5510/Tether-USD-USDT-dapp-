# Tether USD USDT-DApp

An educational decentralized application built to simulate the functionalities of a **USDT-like stable token**, including **minting, burning, transferring**, and **liquidity pool creation** to maintain a $1 price peg.

---

##  Overview

Tether USD USDT-DApp is a blockchain-based decentralized application created for **educational and research purposes**.  
This project demonstrates how stablecoins function on a blockchain through smart contracts, tokenomics, and Web3 integration.

The project covers every step — from **developing and deploying the token smart contract** to **creating a liquidity pool** on a DEX (PancakeSwap) to peg the token’s value at **$1 per token**.

---
<img width="1440" height="461" alt="Image" src="https://github.com/user-attachments/assets/ca0778f0-608f-44a6-8884-35114c5c78de" />
<img width="1440" height="734" alt="Image" src="https://github.com/user-attachments/assets/b12407b1-666f-4a07-a366-a2975539e87d" />
<img width="1440" height="394" alt="Image" src="https://github.com/user-attachments/assets/58d90cb4-a8ef-466a-baf7-565acfa91930" />
<img width="1437" height="610" alt="Image" src="https://github.com/user-attachments/assets/c1f11250-5b2e-4a28-a278-879239001c66" />

## ⚙️ Features

### 🧩 Smart Contract (Solidity)
- ERC20/BEP20-compliant smart contract.
- Custom minting and burning functions.
- Owner-controlled `forceBurn` mechanism.
- Integrated token decimals and supply scaling.
- Deployed on **BNB Smart Chain (Testnet)**.

### 🌐 Frontend (React + Ethers.js)
- Modern React-based user interface.
- Wallet connection via **MetaMask**.
- Live wallet address display on navbar.
- Token **mint**, **burn**, and **transfer** functionalities.
- Role-based access (Owner Panel & User Panel).
- Fully responsive with professional UI/UX design.

### 💱 Liquidity Pool Integration
- Created a **liquidity pool on PancakeSwap (Testnet)**.
- Pegged EduUSDT price to **$1 (1 USDT)**.
- Verified token contract & visible symbol on wallets.
- Price fetched dynamically from DEX liquidity.

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Smart Contract** | Solidity (ERC20/BEP20 Standard) |
| **Blockchain** | BNB Smart Chain Testnet |
| **Frontend** | React.js, Ethers.js |
| **Wallet Integration** | MetaMask |
| **DEX Interaction** | PancakeSwap (Liquidity Pool) |

---

## 🧩 Project Structure

Tether USD USDT-DApp/
│
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── OwnerPanel.jsx
│ │ ├── UserPanel.jsx
│ │ └── abi.jsx (excluded from repo for privacy)
│ ├── styles/
│ │ ├── Header.css
│ │ ├── OwnerPanel.css
│ │ └── UserPanel.css
│ ├── App.jsx
│ ├── index.js
│ └── ...
│
├── public/
│ └── index.html
│
├── package.json
├── .gitignore
└── README.md



---

## 🚀 How It Works

1. **Connect Wallet** — User connects via MetaMask (BNB Testnet).  
2. **Owner Panel** — Allows minting and forced burning of tokens.  
3. **User Panel** — Enables transferring tokens between wallets.  
4. **Liquidity Pool** — Token price pegged to 1 USDT via PancakeSwap.  
5. **UI/UX** — Fully responsive, mobile-ready layout for modern DApp feel.

---

## 🧑‍💻 Developer Notes

This project was created entirely by **Pradeep Pathak** as part of a **self-learning initiative** to understand:
- Smart contract development & deployment.
- Wallet integration with Web3.
- Liquidity pool creation and price pegging.
- React-based decentralized application architecture.

> 🧾 **Disclaimer:**  
> This project is built **for educational purposes only**.  
> The token, liquidity pool, and contracts are **not intended for commercial use** or financial transactions.

---

## 🔗 Useful Links

- [BNB Smart Chain Testnet](https://testnet.bscscan.com/)
- [PancakeSwap Testnet](https://pancakeswap.finance/swap)
- [MetaMask Wallet](https://metamask.io/)
- [Ethers.js Documentation](https://docs.ethers.org/)

---

## 📜 License

This project is open-sourced under the **MIT License**.  
You are free to fork, modify, and learn from it.

---

## 🙌 Acknowledgments

- **OpenZeppelin** for secure smart contract standards.
- **BNB Smart Chain Testnet** for providing free test environments.
- **PancakeSwap** for DEX and liquidity infrastructure.
- **MetaMask** for wallet connection support.

---

⭐ **If you find this helpful for learning blockchain or DApp development, consider giving this repo a star!**
