import { ethers } from "hardhat";

async function main() {
 
  const CripsymonieNFT = await ethers.deployContract("CripsymonieNFT");

  await CripsymonieNFT.waitForDeployment();

  console.log(
    ` deployed to ${CripsymonieNFT.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
