import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { PortisConnector } from '@web3-react/portis-connector'
// import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { Web3Provider } from '@ethersproject/providers'
import { setWeb3LibraryCallback } from '@instadapp/vue-web3'

import Book from '~/assets/img/book-open.svg?inline'

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

setWeb3LibraryCallback(getLibrary)

const POLLING_INTERVAL = 12000

const RPC_URLS: { [chainId: number]: string } = {
  1: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
  4: `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`,
  421611: 'https://rinkeby.arbitrum.io/rpc',
  42161: 'https://arb1.arbitrum.io/rpc',
  1337: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
}

export const injected = new InjectedConnector({
  supportedChainIds: [1, 4, 421611, 42161, 1337],
})
/*
export const walletlink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
  appName: 'Bibliotheca x Realms',
  appLogoUrl: Book,
}) */

export const walletconnect = new WalletConnectConnector({
  infuraId: process.env.INFURA_ID,
})
export const portis = new PortisConnector({
  dAppId: process.env.PORTIS_ID as string,
  networks: [1],
})

/* export const ledger = new LedgerConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
}) */
