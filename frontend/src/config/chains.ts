import { defineChain } from "viem"
import type { AppKitNetwork } from "@reown/appkit/networks"

export const CHAIN_IDS = {
  PUSH_CHAIN: 42101
} as const

// Push Chain Donut Testnet
export const pushChainDonut = defineChain({
  id: CHAIN_IDS.PUSH_CHAIN,
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
    public: {
      http: ["https://evm.rpc-testnet-donut-node1.push.org"],
    },
  },
  blockExplorers: {
    default: { name: "Push Explorer", url: "https://donut.push.network" },
  },
  testnet: true,
})

// AppKit network config for Push Chain
export const customPushChainDonut: AppKitNetwork = {
  ...pushChainDonut,
  id: CHAIN_IDS.PUSH_CHAIN,
  rpcUrls: {
    default: {
      http: ["https://evm.rpc-testnet-donut-node1.push.org"],
    },
    public: {
      http: ["https://evm.rpc-testnet-donut-node1.push.org"],
    },
  },
}
