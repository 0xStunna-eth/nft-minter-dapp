
import React, { useState } from 'react';
import { ethers } from 'ethers';
import MyNFT from './MyNFT.json';

const contractAddress = "PASTE_YOUR_CONTRACT_ADDRESS_HERE";

function App() {
  const [account, setAccount] = useState('');
  const [image, setImage] = useState(null);
  const [tokenURI, setTokenURI] = useState('');
  const [status, setStatus] = useState('');

  async function connectWallet() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } else {
      alert('Please install MetaMask');
    }
  }

  async function mintNFT() {
    if (!tokenURI || !account) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, MyNFT.abi, signer);

    try {
      const tx = await contract.mintNFT(account, tokenURI);
      await tx.wait();
      setStatus('NFT Minted!');
    } catch (err) {
      console.error(err);
      setStatus('Minting failed');
    }
  }

  return (
    <div>
      <h2>NFT Minter</h2>
      <button onClick={connectWallet}>
        {account ? `Connected: ${account}` : 'Connect Wallet'}
      </button>
      <br /><br />
      <input type="text" placeholder="Token URI" onChange={(e) => setTokenURI(e.target.value)} />
      <button onClick={mintNFT}>Mint NFT</button>
      <p>{status}</p>
    </div>
  );
}

export default App;
