# ColorSnap Frontend - Universal App

The ColorSnap frontend is built as a **Universal App** on Push Chain, enabling players from any blockchain to connect and play.

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Wallet**: Push Chain UI Kit (`@pushchain/ui-kit`)
- **Web3**: Wagmi + Viem for contract interactions
- **Styling**: Tailwind CSS v4
- **State**: React Query + React hooks

## Architecture

```
Push Chain UI Kit (Wallet)
    ↓
Wagmi Provider (Contract Interactions)
    ↓
Push Chain Donut Testnet (Smart Contract)
```

## Features

- **Universal Wallet Connection**: Email, Google, MetaMask, WalletConnect
- **Cross-Chain Support**: Works from any blockchain
- **Real-time Updates**: Live game state and transaction monitoring
- **Responsive Design**: Mobile, tablet, desktop optimized
- **Type-safe**: Full TypeScript support
- **Modern UI**: Tailwind CSS v4 with animations

## Setup

### 1. Install Dependencies

```bash
yarn install
```

### 2. Environment Variables

Create a `.env.local` file:

```bash
# Push Chain Contract Address
NEXT_PUBLIC_PUSH_CHAIN_CONTRACT_ADDRESS=0x72adE6a1780220074Fd19870210706AbCb7589BF

```

### 3. Run Development Server

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
yarn build
yarn start
```

## Project Structure

```
frontend/
├── src/
│   ├── app/                        # Next.js app router
│   │   ├── layout.tsx              # Root layout with Push Chain provider
│   │   ├── page.tsx                # Home page
│   │   ├── game/                   # Game page
│   │   └── leaderboard/            # Leaderboard page
│   ├── components/                 # React components
│   │   ├── WalletButton.tsx        # Push Chain wallet button
│   │   ├── ColorSnapGame.tsx       # Main game component
│   │   ├── GameIntro.tsx           # Game introduction
│   │   ├── Leaderboard.tsx         # Leaderboard display
│   │   └── ...
│   ├── hooks/                      # Custom React hooks
│   │   ├── usePushChainWallet.ts   # Wallet compatibility layer
│   │   ├── useContractInteractions.ts
│   │   └── useGameCompletedListener.ts
│   ├── providers/                  # Context providers
│   │   └── PushChainProvider.tsx   # Push Chain + Wagmi setup
│   ├── config/                     # Configuration
│   │   ├── chains.ts               # Push Chain network config
│   │   └── index.ts                # Contract addresses & constants
│   ├── abi/                        # Contract ABIs
│   │   └── color_snap.json
│   └── styles/
│       └── globals.css             # Global styles
├── public/                         # Static assets
├── .env.local                      # Environment variables (create this)
├── .env.local.sample               # Environment template
├── package.json
├── tsconfig.json
└── README.md
```

## Development

### Available Scripts

```bash
# Development server
yarn dev

# Type checking
yarn lint

# Production build
yarn build

# Run production build
yarn start
```


### Testing

```bash
# Type check
yarn lint

# Build check
yarn build
```

## Resources

- **Push Chain Docs**: https://push.org/docs
- **Push UI Kit**: https://www.npmjs.com/package/@pushchain/ui-kit
- **Wagmi Docs**: https://wagmi.sh
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com

**Built with Push Chain - The Universal Blockchain** 🚀
