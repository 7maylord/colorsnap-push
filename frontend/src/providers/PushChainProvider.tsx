'use client'

import {
  PushUI,
  PushUniversalWalletProvider,
  type AppMetadata,
  type ProviderConfigProps,
} from "@pushchain/ui-kit";
import { WagmiProvider, createConfig, http } from 'wagmi';
import { pushChainDonut } from '../config/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/**
 * PushChainProvider Component
 *
 * Wraps the ColorSnap application with Push Chain's Universal Wallet Provider + Wagmi.
 * Enables universal wallet connection across multiple chains + contract interactions.
 */

// Create Wagmi config for Push Chain
const config = createConfig({
  chains: [pushChainDonut],
  transports: {
    [pushChainDonut.id]: http('https://evm.rpc-testnet-donut-node1.push.org'),
  },
});

// Create Query Client
const queryClient = new QueryClient();

const PushChainProvider = ({ children }: { children: React.ReactNode }) => {
  // Wallet configuration for ColorSnap
  const walletConfig: ProviderConfigProps = {
    // Network: TESTNET for Push Chain Donut Testnet
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,

    // Login options
    login: {
      email: true,        // Allow email authentication
      google: true,       // Allow Google OAuth
      wallet: {
        enabled: true,    // Allow wallet connection (MetaMask, etc.)
      },
      appPreview: false,   // Disable app preview for compact mode
    },

    // Modal UI customization - Compact popup mode
    modal: {
      loginLayout: PushUI.CONSTANTS.LOGIN.LAYOUT.SIMPLE,  // Simple layout for compact popup
      connectedLayout: PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER,
      appPreview: false,  // Disable preview for compact mode
      connectedInteraction: PushUI.CONSTANTS.CONNECTED.INTERACTION.INTERACTIVE,
    },

    // Chain configuration - Push Chain Donut Testnet
    chainConfig: {
      rpcUrls: {
        // Push Chain Donut Testnet
        "eip155:42101": ["https://evm.rpc-testnet-donut-node1.push.org"],
      },
    },
  };

  // App metadata
  const appMetadata: AppMetadata = {
    logoUrl: "https://res.cloudinary.com/di2zpd8z7/image/upload/v1754051086/20250731_2328_Enhanced_Logo_Design_remix_01k1h9gxxwfb582phn4cc0635f_1_eisbdt.png",
    title: "ColorSnap Game",
    description: "Decentralized color matching game on Push Chain - Play from any chain!",
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <PushUniversalWalletProvider config={walletConfig} app={appMetadata}>
          {children}
        </PushUniversalWalletProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export { PushChainProvider };
