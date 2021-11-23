// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title PoE
 * PoE - Proof of Existence
 * Version 0.0.0
 */
contract PoE is Ownable {

    mapping(string => uint256) private notarized;
    mapping(string => address) private owners;
    
    function notarize(string memory _hash) public {
        require(notarized[_hash] == 0, "PoE: Hash notarized yet.");
        notarized[_hash] = block.timestamp;
        owners[_hash] = msg.sender;
    }

    function get(string memory _hash) public view returns (uint256) {
        return notarized[_hash];
    }
}
