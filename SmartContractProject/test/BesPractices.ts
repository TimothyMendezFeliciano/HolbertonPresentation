import {ethers} from "hardhat";
import {expect} from 'chai'
import {loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import {BestPracticeAccess, BestPractice} from '../typechain-types/index'
import {BigNumber} from "ethers";

describe('BestPratice', function () {

    async function deployTokenFixture() {
        const BestPracticeAccess = await ethers.getContractFactory("BestPracticeAccess");
        const bestPracticeAccess: BestPracticeAccess = await BestPracticeAccess.deploy();
        await bestPracticeAccess.deployed();
        const BestPractice = await ethers.getContractFactory("BestPractice");
        const address: string = bestPracticeAccess.address;
        const bestPractice: BestPractice = await BestPractice.deploy(address);

        await bestPractice.deployed();


        return {bestPracticeAccess, bestPractice};
    }

    describe('BestPracticeAccess', function () {
        it("Should call a public method from the contract", async function () {
            const a = [
                2, 2, 2, 2, 2,
                2, 2, 2, 2, 2,
                2, 2, 2, 2, 2,
                2, 2, 2, 2, 2,
            ]
            const {bestPracticeAccess} = await loadFixture(deployTokenFixture)
            const publicCall = await bestPracticeAccess.publicGas(a)
            console.log('Public Call', publicCall)
            await expect(publicCall).to.equal(4)
        })

        it("Should call a external method from another contract", async function () {
            const a = [
                2, 2, 2, 2, 2,
                2, 2, 2, 2, 2,
                2, 2, 2, 2, 2,
                2, 2, 2, 2, 2,
            ]
            const {bestPractice} = await loadFixture(deployTokenFixture)
            const externalCall = await bestPractice.callExternalGas(a)
            console.log('External Call', externalCall.gasPrice)
            await expect(BigNumber.from(externalCall.value).toNumber()).to.equal(0)
        })
    })
});
