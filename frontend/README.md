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

# Reown Cloud Project ID (get from https://cloud.reown.com)
# Push Chain UI Kit handles wallet connection - no project ID needed!
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

## Key Components

### PushChainProvider

Wraps the entire app with:
1. **Wagmi Provider** - For contract interactions
2. **React Query Provider** - For async state management
3. **Push Universal Wallet Provider** - For universal wallet connection

```typescript
// src/providers/PushChainProvider.tsx
<WagmiProvider config={config}>
  <QueryClientProvider client={queryClient}>
    <PushUniversalWalletProvider config={walletConfig} app={appMetadata}>
      {children}
    </PushUniversalWalletProvider>
  </QueryClientProvider>
</WagmiProvider>
```

### Wallet Integration

**Connection**:
- Uses `PushUniversalAccountButton` from `@pushchain/ui-kit`
- Supports MetaMask, WalletConnect, email, Google login
- Cross-chain compatible

**Account State**:
```typescript
import { useAccount } from '@/hooks/usePushChainWallet';

const { address, isConnected } = useAccount();
```

### Contract Interactions

**Read Contract**:
```typescript
import { useReadContract } from 'wagmi';

const { data } = useReadContract({
  address: contractAddress,
  abi: colorSnapAbi,
  functionName: 'getPlayerPoints',
  args: [playerAddress],
});
```

**Write Contract**:
```typescript
import { useWriteContract } from 'wagmi';

const { writeContract } = useWriteContract();

writeContract({
  address: contractAddress,
  abi: colorSnapAbi,
  functionName: 'startGame',
  args: [],
});
```

## Configuration

### Push Chain Network

```typescript
// src/config/chains.ts
export const pushChainDonut = defineChain({
  id: 42101,
  name: "Push Chain Donut Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "PC",
    symbol: "PC",
  },
  rpcUrls: {
    default: {
      http: ["https://evm.rpc-testnet-donut-node1.push.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Push Explorer",
      url: "https://donut.push.network"
    },
  },
  testnet: true,
});
```

### Contract Addresses

```typescript
// src/config/index.ts
export const CONTRACT_ADDRESSES = {
  PUSH_CHAIN: process.env.NEXT_PUBLIC_PUSH_CHAIN_CONTRACT_ADDRESS
};
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

### Adding New Features

1. **New Component**: Add to `src/components/`
2. **New Hook**: Add to `src/hooks/`
3. **New Page**: Add to `src/app/`
4. **Contract Function**: Use wagmi hooks

### Testing

```bash
# Type check
yarn lint

# Build check
yarn build
```

## Deployment

### Environment Variables

Set these in your hosting provider:

```
NEXT_PUBLIC_PUSH_CHAIN_CONTRACT_ADDRESS=0x72adE6a1780220074Fd19870210706AbCb7589BF
NEXT_PUBLIC_PROJECT_ID=<your_reown_project_id>
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build
yarn build

# Deploy dist folder
netlify deploy --prod
```

## Troubleshooting

### Wallet Not Connecting

1. Check you have the Push Chain Donut Testnet added to MetaMask
2. Verify RPC URL: https://evm.rpc-testnet-donut-node1.push.org
3. Check chain ID: 42101

### Contract Interactions Failing

1. Ensure you have PC tokens from https://faucet.push.org/
2. Verify contract address in `.env.local`
3. Check you're on the correct network (Chain ID 42101)

### Build Errors

1. Delete `node_modules` and `.next`:
   ```bash
   rm -rf node_modules .next
   yarn install
   yarn build
   ```

2. Check TypeScript errors:
   ```bash
   yarn lint
   ```

## Resources

- **Push Chain Docs**: https://push.org/docs
- **Push UI Kit**: https://www.npmjs.com/package/@pushchain/ui-kit
- **Wagmi Docs**: https://wagmi.sh
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com

## Support

For issues:
- Check the main [README.md](../README.md)
- Review [PUSH_CHAIN_DEPLOYMENT.md](../PUSH_CHAIN_DEPLOYMENT.md)
- Open an issue on GitHub

---

**Built with Push Chain - The Universal Blockchain** 🚀
