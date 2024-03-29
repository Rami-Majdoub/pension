require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
require('./tasks');

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.PROVIDER_ENDPOINT_GOERLI,
      accounts: [ process.env.DEPLOYER_PRIVATE_KEY || "" ]
    },
    polygonMumbai: {
      url: process.env.PROVIDER_ENDPOINT_MUMBAI,
      accounts: [ process.env.DEPLOYER_PRIVATE_KEY || "" ]
    },
    mainnet: {
      url: process.env.PROVIDER_ENDPOINT_MAINNET,
      accounts: [ process.env.DEPLOYER_PRIVATE_KEY || "" ]
    },
    // used by hardhat test & node
    // when using hardhat node deploy with option --network localhost
    hardhat: {
      chainId: 1337, // fixes metamask (default 31337)
      accounts: { // don't use public accounts
        mnemonic: process.env.MNEMONIC_FOR_LOCAL_DEV,
        count: 10,
       },
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
    	goerli: process.env.ETHERSCAN_APIKEY,
    	mainnet: process.env.ETHERSCAN_APIKEY,
    	
    	polygonMumbai: process.env.POLYGONSCAN_APIKEY,
    	polygon: process.env.POLYGONSCAN_APIKEY,
    }
  }
};
