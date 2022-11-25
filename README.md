# Pension

Lock your ETH in a safe (the contract) and withdraw them after a period of time (1 minute).

⚠️ Contract deployed on Goerli and on polygonMumbai.


Shell #1
```shell
npm run setup
# TODO: set the .env variables

npx hardhat node
# when interacting with the app, hardhat node will throw an error
# (Error: Transaction reverted: function selector was not recognized and there's no fallback function)
# but it is not reverted!
# if there is a problem, you can use ganache instead
```

Shell #2
```shell
# deploys the contract to hardhat node
npx hardhat deploy --contract contracts/Pension.sol --network localhost
# TODO: change file contracts/ui.json: set the field constants.contractAddress.default to the contract address

# start web interface
npm run watch
```

