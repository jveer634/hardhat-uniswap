const { expect, assert } = require("chai");
const { ethers, artifacts } = require("hardhat");
const bn = require("bn.js");



describe("Swap", function () {
  
  before(async () => {
    const Abi = [
      "function name() view returns (string)",
      "function symbol() view returns (string)",
      "function balanceOf(address) view returns (uint)",
      "function transfer(address to, uint amount)",
      "event Transfer(address indexed from, address indexed to, uint amount)"
    ];
    
    const [owner, addr1, addr2] = await ethers.getSigners();
    const Swap = await ethers.getContractFactory("Swap");
    const swp = await Swap.deploy();
    const IERC20 = new  ethers.Contract(USDT, daiAbi, )

    const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

  })


  it("..should run swapExactTokensForETH for USDT TO WETH", async () => {
    const amountIn = new bn(10).pow(new bn(6)).mul(200);
    const ammountOut = 1;

    const WHALE = "0x69166e49d2fd23E4cbEA767d7191bE423a7733A5";

    await IERC20(USDT).approve(swp.address, amountIn, {
      from: WHALE
    });

    swp.swapExactTokensForETH(
      USDT,
      amountIn,
      ammountOut,
      addr1,
      {
        from: WHALE
      }
    )
  })
});
