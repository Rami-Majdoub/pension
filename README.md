# Pension

Lock your ETH in a safe (the contract) and withdraw them after a period of time (1 minute).
⚠️ Contract deployed on Goerli and on polygonMumbai.


Shell #1
```shell
npm run setup
npx hardhat node # use ganache instead of hardhat see: https://hardhat.org/metamask-issue
```
copy a private key and replace the field networks.local.accounts[0] in hardhat.config.js.

Shell #2
```shell
npx hardhat run scripts/deploy.js --network local # deploy contract
npm run watch # start web interface
```
