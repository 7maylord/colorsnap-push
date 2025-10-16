# ColorSnap Game - Universal App on Push Chain

ColorSnap is a decentralized color-matching puzzle game built as a **Universal App** on Push Chain. Players from **any blockchain** (Ethereum, Solana, Base, etc.) can play without switching networks or holding specific tokens. Match colored bottles to target configurations, earn points, and compete on a global leaderboard.

## 🌟 What Makes ColorSnap Universal?

Built on **Push Chain** - the first shared-state Layer 1 blockchain that eliminates fragmentation:

- ✅ **Play from Any Chain**: Users on Ethereum, Solana, or any EVM chain can play
- ✅ **No Network Switching**: Players don't need to juggle wallets or gas tokens
- ✅ **Unified Experience**: One app, accessible by all chains
- ✅ **Deploy Once, Reach Everyone**: 10X your user base instantly

## Technology Stack

- **Blockchain**: Push Chain Donut Testnet
- **Smart Contracts**: Solidity with Foundry
- **Frontend**: Next.js 15 with TypeScript
- **Wallet Connection**: Push Chain UI Kit (Universal Wallet)
- **Web3**: Wagmi + Viem for contract interactions
- **Styling**: Tailwind CSS v4

## Deployed Contract

**Network**: Push Chain Donut Testnet

- **Contract Address**: `0x72adE6a1780220074Fd19870210706AbCb7589BF`
- **Explorer**: [View on Push Explorer](https://donut.push.network/address/0x72adE6a1780220074Fd19870210706AbCb7589BF)
- **Chain ID**: 42101
- **RPC URL**: https://evm.rpc-testnet-donut-node1.push.org
- **Faucet**: https://faucet.push.org/

## Features

- **Universal Wallet Connection**: Connect with MetaMask, email, Google, or any wallet
- **Cross-Chain Support**: Play from Ethereum, Solana, or any supported chain
- **Player Registration**: Set your name on-chain
- **Color Matching Game**: Match bottle configurations to earn points
- **Global Leaderboard**: Compete with players worldwide
- **Real-time Updates**: Live game state monitoring
- **Responsive Design**: Works on all devices

## Quick Start

### Prerequisites

1. **Get PC Tokens**: Visit [Push Chain Faucet](https://faucet.push.org/)
2. **Add Push Chain to MetaMask**:
   - Network Name: Push Chain Donut Testnet
   - RPC URL: https://evm.rpc-testnet-donut-node1.push.org
   - Chain ID: 42101
   - Currency Symbol: PC
   - Block Explorer: https://donut.push.network

### 1. Deploy Smart Contract

```bash
cd smart-contracts

# Copy environment file
cp .env.sample .env
# Edit .env and add your private key (with 0x prefix)

# Deploy to Push Chain
forge script script/DeployPushChain.s.sol:DeployPushChain \
  --rpc-url push_donut \
  --broadcast \
  --legacy
```

### 2. Setup Frontend

```bash
cd frontend

# Install dependencies
yarn install

# Copy environment file
cp .env.local.sample .env.local

# Start development server
yarn dev
```

Visit http://localhost:3000 and start playing!

### 3. Build for Production

```bash
cd frontend
yarn build
yarn start
```


## 🎮 How to Play ColorSnap

### **Getting Started**

1. **Connect Your Wallet** 🦊
   - Click "Connect Wallet" to see Push Chain's universal wallet UI
   - Connect with MetaMask, email, Google, or WalletConnect
   - Wallet works across all chains automatically

2. **Register Your Champion Name** 🏆
   - Enter your display name (max 31 characters)
   - Click "🏆 Register Champion" to save it on-chain
   - This name will appear on the global leaderboard

3. **Start Your Challenge** 🚀
   - Click "🎮 Start New Challenge" to begin a new game
   - You'll receive 5 colored bottles in random positions
   - A hidden target configuration is generated for you to match

### **Gameplay Mechanics**

#### **🎯 The Objective**
Match your bottle arrangement to the target configuration exactly. Each bottle must be in the correct position and have the correct color.

#### **🧪 Available Colors**
- 🔴 **Red** - The fiery starter
- 🔵 **Blue** - The cool challenger
- 🟢 **Green** - The nature warrior
- 🟡 **Yellow** - The bright contender
- 🟣 **Purple** - The royal challenger

#### **🔄 How to Swap Bottles**
1. **Select First Bottle**: Click on the first bottle you want to move
2. **Select Second Bottle**: Click on the second bottle to swap positions
3. **Confirm Swap**: The bottles will automatically swap positions
4. **Track Your Moves**: Each swap counts as one move

#### **👁️ Peek at the Solution**
- **Locked Until 5 Moves**: You must make at least 5 swaps before you can peek
- **3-Second Peek**: When unlocked, you can view the target for 3 seconds
- **3-Minute Cooldown**: After peeking, you must wait 3 minutes before peeking again
- **Strategic Use**: Use peeks wisely to guide your strategy

### **🎯 Game Rules**

#### **Scoring System**
- **10 Points**: Earned for each successfully completed puzzle
- **Move Efficiency**: Fewer moves = better strategy (though not required)
- **Global Ranking**: Compete on the worldwide leaderboard

#### **Game States**
- **Active Game**: You have bottles to arrange and a target to match
- **Completed Game**: Successfully matched the target configuration
- **Forfeited Game**: Gave up without completing the puzzle

### **🏆 Winning Strategies**

#### **Beginner Tips**
1. **Start with the Ends**: Look for bottles that are already in correct end positions
2. **Work from Outside In**: Match the outer bottles first, then work inward
3. **Count Colors**: Make sure you have the right number of each color
4. **Use Peek Strategically**: Don't peek too early - try to solve it yourself first

#### **Advanced Strategies**
1. **Pattern Recognition**: Look for patterns in the target arrangement
2. **Move Planning**: Plan your swaps in advance to minimize moves
3. **Color Grouping**: Group similar colors together when possible
4. **Efficiency Focus**: Try to solve with fewer moves for bragging rights

### **🎉 Game Completion**

#### **Successful Submission**
- **Exact Match Required**: All bottles must be in the correct positions
- **Points Awarded**: Receive 10 points for completion
- **Congrats Message**: See a celebration animation
- **Leaderboard Update**: Your score is updated immediately

## Push Chain Integration

### What is Push Chain?

Push Chain is a shared-state L1 blockchain that eliminates fragmentation:

- **Universal Apps**: Deploy once, reach users on all chains
- **Cross-Chain Native**: EVM + non-EVM support (Ethereum, Solana, etc.)
- **Unified State**: Shared state across all chains
- **No Bridges**: Direct cross-chain transactions without bridges

### Architecture

```
┌─────────────────────────────────────────┐
│   Push Chain UI Kit (Wallet)           │
│   - Universal wallet connection         │
│   - Email / Google / MetaMask login     │
│   - Works across all chains             │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│   Wagmi + Viem (Contract Interactions)  │
│   - Read/Write smart contracts          │
│   - Event listening                     │
│   - Transaction management              │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│   Push Chain Donut Testnet              │
│   - ColorSnap Smart Contract            │
│   - EVM-compatible                      │
│   - Chain ID: 42101                     │
└─────────────────────────────────────────┘
```

### Key Components

1. **PushChainProvider**: Wraps app with Push Chain wallet + Wagmi for contracts
2. **WalletButton**: Uses `PushUniversalAccountButton` for wallet connection
3. **Wagmi Hooks**: Standard wagmi hooks for contract interactions
4. **Viem**: For direct contract reads and transaction handling

## Development

### Smart Contract Development

```bash
cd smart-contracts

# Run tests
forge test

# Deploy to Push Chain
forge script script/DeployPushChain.s.sol:DeployPushChain \
  --rpc-url push_donut \
  --broadcast \
  --legacy

# Verify contract (optional)
forge verify-contract \
  --rpc-url https://evm.rpc-testnet-donut-node1.push.org \
  --verifier blockscout \
  --verifier-url 'https://donut.push.network/api/' \
  <CONTRACT_ADDRESS> \
  src/Colorsnap.sol:ColorSnap
```

### Frontend Development

```bash
cd frontend

# Development mode
yarn dev

# Type checking
yarn lint

# Build for production
yarn build

# Run production build
yarn start
```

## Resources

- **Push Chain Docs**: https://push.org/docs
- **Push Chain SDK**: https://www.npmjs.com/package/@pushchain/core
- **UI Kit**: https://www.npmjs.com/package/@pushchain/ui-kit
- **Faucet**: https://faucet.push.org/
- **Explorer**: https://donut.push.network/

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on Push Chain Donut Testnet
5. Submit a pull request

## License

This project is open source and available under the MIT License.

----
