# BonerToken Frontend (React + Vite)

This is the frontend dApp for the BonerToken ERC20 project. It allows users to connect their wallet, transfer tokens, burn tokens, and (if owner) mint, pause, or unpause the contract—all via a modern React interface.

## Features

- Connect wallet (MetaMask)
- View connected account
- Transfer BONER tokens to others
- Burn your BONER tokens
- Owner-only actions: mint, pause, unpause
- Clean, responsive UI

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Contract

- Ensure the deployed contract address and ABI are set in `src/utils/ethereum.js`.
- Copy the ABI from your backend's `artifacts/contracts/BonerToken.sol/BonerToken.json` if needed.

### 3. Run the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Project Structure

```
src/
  components/      # React components (TokenActions, OwnerActions, etc.)
  context/         # Wallet context for global state
  utils/           # Ethereum/web3 helpers
  App.jsx          # Main app component
  App.css          # Styles
public/            # Static assets
```

## Usage

1. Connect your MetaMask wallet.
2. Use the interface to transfer, burn, or (if owner) mint/pause/unpause tokens.

## Backend / Smart Contract

The smart contract code and deployment instructions are available at: [ERC20-token-server](https://github.com/brainDensed/ERC20-Token)

## Notes

- Make sure you are connected to the same network as the deployed contract (e.g., Sepolia).
- The contract address is public and safe to include in the frontend.

## License

This project is licensed under the MIT