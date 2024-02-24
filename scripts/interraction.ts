import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-toolbox/network-helpers");

const main = async () =>{
    const OnchainNFT = "0x3906bE39bCa843f7351C875c1c855d30aB56726a";

    const impersonatedSigners = await ethers.getSigners();

    const Onchain = await ethers.getContractAt("OnchainNFT", OnchainNFT);

    const mintTx = await Onchain.mint();

    await mintTx.wait();

    console.log(mintTx)


}

main();