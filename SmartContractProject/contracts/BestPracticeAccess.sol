// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IBestPracticeAccess {
    function publicGas(uint[20] memory a) external view returns (uint);
    function externalGas(uint[20] calldata a) external returns (uint);
}

contract BestPracticeAccess is IBestPracticeAccess {
    constructor(){

    }

    // Can be called by this contract and outside sources.
    function publicGas(uint[20] memory a) virtual override public view returns (uint) {
        return a[10]*2;
    }

//    Can only be called externally
    function externalGas(uint[20] calldata a) virtual override external returns (uint) {
        return a[10]*2;
    }
}
