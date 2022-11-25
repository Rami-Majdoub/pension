// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("deploy", "deploys a contract")
.addParam("contract", "contract path", undefined, types.inputFile, false)
//  .addParam("contract", "contract name") // v0
  .setAction(async ({ contract }, { ethers, artifacts }) => {
    // v1
    // get contract fully qualified name
    const allContracts = await artifacts.getAllFullyQualifiedNames()
    const contractName = allContracts.find((e) => e.startsWith(contract)) || ""
    
    // read contract
    const contractArtifact = await artifacts.readArtifact(contractName)
    const contractFactory = await ethers.getContractFactoryFromArtifact(contractArtifact)

    // v0
    //const contractFactory = await ethers.getContractFactory(contract) as any

    // deploy
    const contractDeployed = await contractFactory.deploy()
    
    console.log(`Contract ${contract} deployed at address: `, contractDeployed.address)
});

