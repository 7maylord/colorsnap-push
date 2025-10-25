'use client';

import { usePushWalletContext } from '@pushchain/ui-kit';

export function useAccount() {
  const { universalAccount } = usePushWalletContext();

  const sourceChain = (universalAccount as Record<string, unknown>)?.sourceChain || 
                     (universalAccount as Record<string, unknown>)?.chain || 
                     (universalAccount as Record<string, unknown>)?.network || 
                     'unknown';
  const sourceChainStr = typeof sourceChain === 'string' ? sourceChain : 'unknown';
  const isSolanaAccount = sourceChainStr === 'solana' || sourceChainStr.startsWith('solana');
  const isEVMAccount = sourceChainStr.startsWith('eip155') || sourceChainStr === 'ethereum';

  return {
    address: universalAccount?.address as `0x${string}` | undefined,
    isConnected: !!universalAccount?.address,
    isDisconnected: !universalAccount?.address,
    // Universal signer enhancements
    sourceChain: sourceChainStr,
    isSolanaAccount,
    isEVMAccount,
    universalAccount, // Expose full universal account for advanced usage
  };
}

export function useChainId() {
  return 42101;
}

export function useDisconnect() {
  return {
    disconnect: () => {
      
    },
  };
}
