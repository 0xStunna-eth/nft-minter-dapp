Hello Darking here 
# 🖼️ NFT Minter & Viewer dApp

This is a full-stack Web3 dApp that allows users to **mint their own NFTs** and **view them** via a simple React interface. Built using **Solidity**, **Hardhat**, and **React**, this project is deployed to the **Polygon Mumbai Testnet**.

---

## 🚀 Features

- 🔐 Connect MetaMask wallet
- 🧠 Mint custom NFTs (ERC-721)
- 🔗 Input metadata URI (e.g., IPFS-hosted images)
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

## 🧪 Optional: Uploading NFTs to IPFS

Use services like [Pinata](https://pinata.cloud/) or [NFT.storage](https://nft.storage/) to upload your image and metadata.

Example metadata format:

```json
{
  "name": "My NFT",
  "description": "A cool NFT",
  "image": "ipfs://<your-image-cid>"
}
```

Paste the metadata URI into the input field in the app to mint.

---

## 📸 Screenshots

> _(Add your own screenshots here once the app is running!)_

---

## 🧠 License

MIT License © 2025 [0xStunna-eth](https://github.com/0xStunna-eth)

---

## 🙌 Acknowledgements

- [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [Hardhat](https://hardhat.org/)
- [Ethers.js](https://docs.ethers.io/)
- [Pinata](https://pinata.cloud/)
