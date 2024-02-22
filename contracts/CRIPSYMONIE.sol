// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CripsymonieNFT {
   
    event Mint(address indexed to, uint256 indexed tokenId);

 
    address private owner;

    mapping(uint256 => address) private tokenOwner;


    constructor() {
        owner = msg.sender;
    }

 
    function mint(address to, uint256 tokenId) external onlyOwner {
        require(tokenOwner[tokenId] == address(0), "Token already exists");
        
        tokenOwner[tokenId] = to;
        emit Mint(to, tokenId);
    }


    function ownerOf(uint256 tokenId) external view returns (address) {
        address ownerAddress = tokenOwner[tokenId];
        require(ownerAddress != address(0), "Token does not exist");
        return ownerAddress;
    }


    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can perform this action");
        _;
    }
}
