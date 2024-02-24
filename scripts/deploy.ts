import { ethers } from "hardhat";

async function main() {
 
  const OnchainNFT = await ethers.deployContract("OnchainNFT");

  await OnchainNFT.waitForDeployment();

  console.log(
    ` deployed to ${OnchainNFT.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
