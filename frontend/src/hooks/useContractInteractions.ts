import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { useState } from 'react';
import { usePushChainClient } from './usePushChainClient';
import { useAccount } from './usePushChainWallet';
import colorSnapAbi from '../abi/color_snap.json';

export function useContractInteractions(contractAddress: string) {
  const [txHash, setTxHash] = useState<string | null>(null);
  
  // Universal signer support
  const { 
    client, 
    isConnected, 
    sourceChain, 
    isSolanaAccount, 
    isEVMAccount,
    callContract,
    isLoading: universalLoading,
    error: universalError
  } = usePushChainClient();
  
  // Declare unused variable separately
  const _sendUniversalTransaction = () => {};
  
  const { address: _address } = useAccount();
  
  // Fallback to standard Wagmi for EVM-only interactions
  const { writeContract, isPending, error } = useWriteContract();
  
  const { isLoading: isConfirming, isSuccess, isError } = useWaitForTransactionReceipt({
    hash: txHash as `0x${string}`,
  });

  const setPlayerName = async (name: string) => {
    try {
      if (isSolanaAccount && client) {
        // Use universal signer for Solana accounts
        const txHash = await callContract(
          contractAddress,
          colorSnapAbi,
          'setPlayerName',
          [name]
        );
        setTxHash(txHash);
        return txHash;
      } else {
        // Use standard Wagmi for EVM accounts
        writeContract({
          address: contractAddress as `0x${string}`,
          abi: colorSnapAbi,
          functionName: 'setPlayerName',
          args: [name],
        });
      }
    } catch (err) {
      console.error('Error setting player name:', err);
      throw err;
    }
  };

  const startGame = async () => {
    try {
      if (isSolanaAccount && client) {
        // Use universal signer for Solana accounts
        const txHash = await callContract(
          contractAddress,
          colorSnapAbi,
          'startGame',
          []
        );
        setTxHash(txHash);
        return txHash;
      } else {
        // Use standard Wagmi for EVM accounts
        const result = await writeContract({
          address: contractAddress as `0x${string}`,
          abi: colorSnapAbi,
          functionName: 'startGame',
          args: [],
        });
        if (typeof result === 'string') {
          setTxHash(result);
          return result;
        }
        return null;
      }
    } catch (err) {
      console.error('Error starting game:', err);
      throw err;
    }
  };

  const submitResult = async (gameId: string, finalBottles: number[], moves: number) => {
    try {
      if (isSolanaAccount && client) {
        // Use universal signer for Solana accounts
        const txHash = await callContract(
          contractAddress,
          colorSnapAbi,
          'submitResult',
          [BigInt(gameId), finalBottles, moves]
        );
        setTxHash(txHash);
        return txHash;
      } else {
        // Use standard Wagmi for EVM accounts
        writeContract({
          address: contractAddress as `0x${string}`,
          abi: colorSnapAbi,
          functionName: 'submitResult',
          args: [BigInt(gameId), finalBottles, moves],
        });
      }
    } catch (err) {
      console.error('Error submitting result:', err);
      throw err;
    }
  };

  const endGame = async (gameId: string) => {
    try {
      if (isSolanaAccount && client) {
        // Use universal signer for Solana accounts
        const txHash = await callContract(
          contractAddress,
          colorSnapAbi,
          'endGame',
          [BigInt(gameId)]
        );
        setTxHash(txHash);
        return txHash;
      } else {
        // Use standard Wagmi for EVM accounts
        writeContract({
          address: contractAddress as `0x${string}`,
          abi: colorSnapAbi,
          functionName: 'endGame',
          args: [BigInt(gameId)],
        });
      }
    } catch (err) {
      console.error('Error ending game:', err);
      throw err;
    }
  };

  return {
    setPlayerName,
    startGame,
    submitResult,
    endGame,
    isPending: isPending || universalLoading,
    isConfirming,
    isSuccess,
    isError: isError || !!universalError,
    error: error || universalError,
    txHash,
    contractAbi: colorSnapAbi,
    // Universal signer properties
    isConnected,
    sourceChain,
    isSolanaAccount,
    isEVMAccount,
    universalClient: client,
  };
}