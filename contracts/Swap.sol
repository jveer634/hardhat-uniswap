//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import "./interfaces/IERC20.sol";
import "./interfaces/IUniswapV2Router01.sol";


contract Swap {
    address private constant USDT = 0xdAC17F958D2ee523a2206206994597C13D831ec7;
    address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    address private constant ROUTER = 0xf164fC0Ec4E93095b804a4795bBe1e041497b92a;


    function swapExactETHForTokens(
        uint amountOutMin
    ) external payable
    returns (uint[] memory amounts) {
        address[] memory path = new address[](2);

        return IUniswapV2Router01(ROUTER).swapExactETHForTokens(
            amountOutMin, path, msg.sender, block.timestamp);

    }

    function swapExactTokensForETH(
        uint amountIn, 
        uint amountOutMin
        ) external
    returns (uint[] memory amounts) {
        address[] memory path = new address[](2);
        path[0] = USDT;
        path[1] = WETH;

        return IUniswapV2Router01(ROUTER).swapExactTokensForETH(
            amountIn, amountOutMin, path, msg.sender, block.timestamp);
    }

}