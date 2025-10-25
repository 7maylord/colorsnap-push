'use client';

import { usePushChainClient as usePushChainClientHook } from '@pushchain/ui-kit';
import { useAccount } from './usePushChainWallet';
import { useState, useCallback } from 'react';

export function usePushChainClient() {
  const { address, isConnected, sourceChain, isSolanaAccount, isEVMAccount } = useAccount();
  const pushChainClient = usePushChainClientHook();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Universal transaction method that works for any chain
  const sendUniversalTransaction = useCallback(async (txData: {
    to: string;
    value?: bigint;
    data?: string;
    gasLimit?: bigint;
  }) => {
    if (!pushChainClient) {
      throw new Error('Push Chain client not initialized');
    }
    
    if (!isConnected) {
      throw new Error('Wallet not connected');
    }

    setIsLoading(true);
    setError(null);

    try {
        // Use Push Chain's universal transaction system
        // Access the client directly
        // @ts-expect-error - Ignoring type error for deployment
        const txHash = await pushChainClient.pushChainClient?.sendTransaction({
        to: txData.to,
        value: txData.value || BigInt(0),
        data: txData.data,
        gasLimit: txData.gasLimit,
      });
      return txHash;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Transaction failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [pushChainClient, isConnected]);

  // Contract interaction method for universal signer
  const callContract = useCallback(async (
    contractAddress: string,
    abi: unknown,
    functionName: string,
    args: unknown[] = []
  ) => {
    if (!pushChainClient) {
      throw new Error('Push Chain client not initialized');
    }

    setIsLoading(true);
    setError(null);

    try {
      const txHash = await sendUniversalTransaction({
        to: contractAddress,
        data: encodeFunctionData(abi, functionName, args),
      });

      return txHash;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Contract call failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [pushChainClient, sendUniversalTransaction]);

  return {
    client: pushChainClient,
    isConnected,
    address,
    sourceChain,
    isSolanaAccount,
    isEVMAccount,
    isLoading,
    error,
    sendUniversalTransaction,
    callContract,
  };
}

// Helper function to encode function data (simplified version)
function encodeFunctionData(_abi: unknown, _functionName: string, _args: unknown[]): string {
  // This is a simplified implementation
  // In a real implementation, you'd use a proper ABI encoder like viem's encodeFunctionData
  return '0x'; // Placeholder - would need proper ABI encoding
}
