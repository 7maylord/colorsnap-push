/**
 * Push Chain Wallet Hooks
 *
 * Provides wagmi-compatible hooks using Push Chain's wallet context
 */

'use client';

import { usePushWalletContext } from '@pushchain/ui-kit';

/**
 * Hook to get connected account information
 * Compatible with wagmi's useAccount
 */
export function useAccount() {
  const { universalAccount } = usePushWalletContext();

  return {
    address: universalAccount?.address as `0x${string}` | undefined,
    isConnected: !!universalAccount?.address,
    isDisconnected: !universalAccount?.address,
  };
}

/**
 * Hook to get current chain ID
 * Compatible with wagmi's useChainId
 */
export function useChainId() {
  // Push Chain Donut Testnet
  return 42101;
}

/**
 * Hook to disconnect wallet
 * Compatible with wagmi's useDisconnect
 */
export function useDisconnect() {
  // Push Chain handles disconnection through the wallet button
  // This is a no-op for compatibility
  return {
    disconnect: () => {
      console.log('Disconnect handled by Push Chain wallet button');
    },
  };
}
