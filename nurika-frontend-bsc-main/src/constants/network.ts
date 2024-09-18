import { ChainId } from "../types";

const RPC_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "https://bsc-dataseed1.defibit.io",
  [ChainId.TESTNET]: "https://bsc-testnet-rpc.publicnode.com",
};

export const CHAIN_ID = process.env.REACT_APP_PUBLIC_CHAIN_ID || '56';
export const RPC_URL: string = RPC_URLS[CHAIN_ID];

export const BASE_CHAIN_CONFIG = {
  [ChainId.MAINNET]: {
    chainId: 56,
    name: "BSC Mainnet",
    currency: "BNB",
    explorerUrl: "https://bscscan.com",
    rpcUrl: "https://bsc-dataseed.binance.org/",
  },
  [ChainId.TESTNET]: {
    chainId: 97,
    name: "BSC Testnet",
    currency: "tBNB",
    explorerUrl: "https://testnet.bscscan.com",
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
};

export const BASE_CHAIN_CURRENCIES = {
  [ChainId.MAINNET]: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  [ChainId.TESTNET]: {
    name: 'Testnet BNB',
    symbol: 'tBNB',
    decimals: 18,
  },
};

export const BASE_CHAINS_LIST = Object.values(BASE_CHAIN_CONFIG);

export default RPC_URLS;
