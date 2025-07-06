 
# 🖼️ NFT Minter & Viewer dApp

a full-stack web3 dApp that let the user to mint their own NFT and view it via React interface. Built using **Solidity**, **Hardhat**, and **React**, deployed on **Polygon Mumbai Testnet**.

---

## 🚀 Features

- 🔐 Connect with MetaMask wallet
- 🧠 Mint custom NFTs (ERC-721)
- 🔗 Input metadata URI 
- 📤 Deploy smart contract to testnet
- 💻 View wallet-owned NFTs in-app

---

## 🛠️ Tech Stack

| Layer        | Tech                             |
|--------------|----------------------------------|
| Smart Contract | Solidity, OpenZeppelin (ERC-721) |
| Blockchain    | Polygon Mumbai Testnet            |
| Backend       | Hardhat, Ethers.js, dotenv        |
| Frontend      | React, JavaScript, MetaMask       |
| File Hosting  | IPFS via Pinata (optional setup)  |

---

## 📂 Project Structure

```
nft-minter-dapp/
├── contracts/           # Solidity smart contracts
│   └── MyNFT.sol
├── scripts/             # Deployment script
│   └── deploy.js
├── frontend/            # React frontend
│   └── src/
│       ├── App.js
│       └── index.js
├── hardhat.config.js
├── package.json
├── .env.example
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/nft-minter-dapp.git
cd nft-minter-dapp
```

---

### 2. Install Hardhat & Dependencies

```bash
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PRIVATE_KEY=your_wallet_private_key
RPC_URL=https://rpc-mumbai.maticvigil.com
```

---

### 4. Compile Contracts

```bash
npx hardhat compile
```

---

### 5. Deploy to Polygon Mumbai Testnet

```bash
npx hardhat run scripts/deploy.js --network mumbai
```

> Copy the deployed contract address and paste it in `frontend/src/App.js`:
```js
const contractAddress = "PASTE_YOUR_CONTRACT_ADDRESS_HERE";
```

---

## 🌐 Frontend Setup

### 1. Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

### 2. Start the React App

```bash
npm start
```

---


## 🙌 Acknowledgements

- [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [Hardhat](https://hardhat.org/)
- [Ethers.js](https://docs.ethers.io/)
- [Pinata](https://pinata.cloud/)
