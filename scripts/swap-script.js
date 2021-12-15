const hre = require("hardhat");



async function main() {

  const Swap = await hre.ethers.getContractFactory("Swap");
  const swapContract = await Swap.deploy();

  await swapContract.deployed();

  console.log("Swap deployed to:", swapContract.address);

  
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
