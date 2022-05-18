import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'DeepTestC',
  tokenName: 'DeepToken',
  tokenSymbol: 'DT',
  hiddenMetadataUri: 'ipfs://QmYrvMTHv57Rv1AuRyR7xHjyB8GMf6ogAYeDuVDZxfQBEh/hidden.json',
  maxSupply: 20,
  whitelistSale: {
    price: 0.005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.007,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.009,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0xe833ECEF524941B044e83a8e7d98E3E469473aAe',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
