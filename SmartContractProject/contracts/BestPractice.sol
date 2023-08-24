// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IOnlyExternal {
    function externalGas(uint[20] calldata a) external returns (uint);
}

contract BestPractice is ERC20 {

    uint8 small = 0;
    uint8 big = 1;
    uint256 callsMade = 0;

    IOnlyExternal bestPracticeAccessContract;

    event TrackEvent(address caller, uint256 callsMade);

    constructor(address access) ERC20("HOLBERTON", "HLB"){
        bestPracticeAccessContract = IOnlyExternal(access);
    }

//    Pure is self contained.
    function throwRequireWithMessage() public pure {
//        Throws Error that is detectable by UI.
        require(0>1, "Zero is not Bigger than One.");
    }

//    View Reads State
    function throwRequire() public view {
//        Only meant for internal use ase it does not provide error message.
        require(small >big);
    }

    function callExternalGas(uint[20] calldata a) external returns (uint) {
       uint result = bestPracticeAccessContract.externalGas(a);
        return result;
    }

    function emitEventTracker() payable public returns (uint) {
        callsMade = callsMade + 1;
    emit TrackEvent(msg.sender, callsMade);
        return 0;
    }


}
