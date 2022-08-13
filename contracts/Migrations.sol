// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Migrations {
  address public owner = msg.sender;
  uint public last_completed_migration;

  modifier restricted() {
    require(
      msg.sender == owner,
      "This function is restricted to the contract's owner"
    );
    _;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }
}

/*
   > contract address:    0x71B313FCb5Eb647eA563a1Bf85b333c0F82c429f
   > block number:        1
   > block timestamp:     1660423189
   > account:             0x700bdd0BF8DDA2995D702c50180b38063A46FC4A
   */