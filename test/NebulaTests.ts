import { expect } from "chai";
import { ethers } from "hardhat";

describe("Nebula", function () {

  it("Deployment should assign owner", async function () {
    const Nebula = await ethers.getContractFactory("Nebula");
    const nebula = await Nebula.deploy();
    await nebula.deployed();

    const [owner] = await ethers.getSigners();

    expect(await nebula.getOwner()).to.equal(owner.address);
  });

  it("Should register a partner", async function () {
    const Nebula = await ethers.getContractFactory("Nebula");
    const nebula = await Nebula.deploy();
    await nebula.deployed();



    //expect(await greeter.greet()).to.equal("Hello, world!");

    //const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    //await setGreetingTx.wait();

    //expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
