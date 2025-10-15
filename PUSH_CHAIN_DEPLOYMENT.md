# Push Chain Deployment Guide

Complete guide for deploying ColorSnap to Push Chain Donut Testnet.

## Overview

Push Chain is a Universal L1 blockchain that enables apps to be accessible from any chain (Ethereum, Solana, EVM L2s) without requiring users to switch networks or hold specific tokens.

**Network Details:**
- **Name:** Push Chain Donut Testnet
- **Chain ID:** 42101
- **RPC URL:** https://evm.rpc-testnet-donut-node1.push.org
- **Currency:** PC (Push Coin)
- **Explorer:** https://donut.push.network
- **Faucet:** https://faucet.push.org/

## Prerequisites

1. **Get PC Tokens**
   - Visit the faucet: https://faucet.push.org/
   - Connect your wallet
   - Request testnet PC tokens

2. **Reown Project ID**
   - Go to https://cloud.reown.com
   - Create a new project
   - Copy your Project ID

## Smart Contract Deployment

### Step 1: Configure Environment

Create `.env` file in `smart-contracts/` directory:

```bash
cd smart-contracts
cp .env.sample .env
```

Edit `.env` file:
```env
PRIVATE_KEY=your_private_key_here
CHAIN_ID=42101
RPC_URL=https://evm.rpc-testnet-donut-node1.push.org
PUSH_CHAIN_API_KEY=
```

### Step 2: Deploy Contract

Deploy using Foundry:

```bash
forge script script/DeployPushChain.s.sol:DeployPushChain \
  --rpc-url push_donut \
  --broadcast \
  --legacy
```

Or use the full RPC URL:

```bash
forge script script/DeployPushChain.s.sol:DeployPushChain \
  --rpc-url https://evm.rpc-testnet-donut-node1.push.org \
  --broadcast \
  --legacy
```

### Step 3: Save Contract Address

After deployment, copy the contract address from the output and update your frontend environment file.

## Frontend Configuration

### Step 1: Configure Environment

Create `.env.local` file in `frontend/` directory:

```bash
cd frontend
cp .env.local.sample .env.local
```

Edit `.env.local` file:
```env
NEXT_PUBLIC_PUSH_CHAIN_CONTRACT_ADDRESS=0x...  # Your deployed contract address
NEXT_PUBLIC_PROJECT_ID=your_reown_project_id   # From cloud.reown.com
```

### Step 2: Install Dependencies

```bash
yarn install
```

### Step 3: Run Development Server

```bash
yarn dev
```

Visit http://localhost:3000

## Connecting to Push Chain

### Using MetaMask

1. Open MetaMask
2. Click on network selector
3. Click "Add Network"
4. Enter network details:
   - **Network Name:** Push Chain Donut Testnet
   - **RPC URL:** https://evm.rpc-testnet-donut-node1.push.org
   - **Chain ID:** 42101
   - **Currency Symbol:** PC
   - **Block Explorer:** https://donut.push.network

5. Switch to Push Chain network
6. Connect wallet to your app

## Universal App Features (Coming Soon)

Once fully integrated with Push Chain SDK, your app will support:

- ✅ **Cross-chain transactions** - Users from Ethereum, Solana, Base can interact
- ✅ **Unified wallet experience** - No network switching required
- ✅ **Email login** - Web2-style onboarding
- ✅ **Shared state** - Data accessible across all chains

## Verification

Verify your deployment:

1. **Check Explorer:** https://donut.push.network/address/YOUR_CONTRACT_ADDRESS
2. **Test Contract:** Interact through frontend or explorer
3. **View Transactions:** All transactions visible on Push Chain explorer

## Troubleshooting

### Deployment Fails

- Ensure you have PC tokens in your wallet
- Check private key is correct in `.env`
- Try adding `--legacy` flag for legacy transaction format
- Verify RPC URL is accessible

### Wallet Connection Issues

- Ensure Push Chain network is added to MetaMask
- Check chain ID is 42101
- Verify RPC URL in wallet matches config

### Frontend Errors

- Check contract address is correct in `.env.local`
- Ensure Reown Project ID is valid
- Verify contract is deployed and accessible

## Resources

- **Push Chain Docs:** https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/
- **SDK (npm):** https://www.npmjs.com/package/@pushchain/core
- **UI Kit:** https://www.npmjs.com/package/@pushchain/ui-kit
- **Faucet:** https://faucet.push.org/
- **Explorer:** https://donut.push.network/
- **Website:** https://push.org

## Next Steps

1. **Deploy Contract** - Follow steps above
2. **Test Application** - Ensure all features work
3. **Integrate Push SDK** - Add universal app features
4. **Enable Cross-chain** - Allow users from any chain to interact
5. **Production Deploy** - Move to Push Chain mainnet when ready
