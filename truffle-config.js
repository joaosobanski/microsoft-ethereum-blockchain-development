const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "3f6e2b3b9a134a6497b0db975d71c810";
const t = 'https://ropsten.infura.io/v3/3f6e2b3b9a134a6497b0db975d71c810';

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const ethereum_api_key = fs.readFileSync(".ethereum_api_key").toString().trim();

module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    development: {
      network_id: "5777",
      port: 8544,
      host: "127.0.0.1"
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.16"
    }
  },

  //this to verify smart contract in etherscan
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: ethereum_api_key
  }

};

