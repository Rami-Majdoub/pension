const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Pension", function(){


	let contract;
	beforeEach(async function(){
		const contractFactory = await ethers.getContractFactory("Pension")
		contract = await contractFactory.deploy()
		await contract.deployed()
	})
	
	it("should register", async function(){
		const val = await contract.valPerWithdraw()
		await contract.register()
	})
	
	it("should deposit", async function(){
		const val = await contract.valPerWithdraw()
		await contract.register()
		await contract.deposit({value: val})
		expect(await contract.getFunds()).to.equal(val)
	})
})
