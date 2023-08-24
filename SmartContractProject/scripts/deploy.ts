import { ethers } from "hardhat";

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
//   const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
//
//   const lockedAmount = ethers.utils.parseEther("1");
//
//   const Lock = await ethers.getContractFactory("Lock");
//   const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
//
//   await lock.deployed();
//
//   console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);
// }

async function main() {
  const BestPracticeAccess = await ethers.getContractFactory("BestPracticeAccess");
  const bestPracticeAccess = await BestPracticeAccess.deploy();
  await bestPracticeAccess.deployed();
  const BestPractice = await ethers.getContractFactory("BestPractice");
  const bestPractice = await BestPractice.deploy(bestPracticeAccess.address);

  await bestPractice.deployed();

  console.log(`Best Practice Access Deployed to: ${bestPracticeAccess.address}`);
  console.log(`Best Practice Deployed to: ${bestPractice.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
