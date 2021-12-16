const hre = require("hardhat");
const BN = require('bn.js');



async function main() {
  const Swap = await hre.ethers.getContractFactory("Swap");
  const swapContract = await Swap.deploy();

  await swapContract.deployed();
  console.log("Deployed at: ", swapContract.address);

  const amountIn = new BN(10).pow(new BN(6)).mul(new BN(100000));
  console.log(amountIn.toString());
  const amountOut = 1;

  console.log("Swap deployed to:", swapContract.address);
  await swapContract.swapExactTokensForETH(amountIn, amountOut);
  console.log("Done");
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
