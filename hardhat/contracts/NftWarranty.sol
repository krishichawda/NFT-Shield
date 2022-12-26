// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract NftWarranty is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private currentTokenId;
    using SafeMath for uint256;

    string public baseTokenURI;

    struct NftInfo {
        string name;
        string description;
        uint256 startTime;
        uint256 EndTime;
        uint256 duration;
        bool soldOnce;
    }

    // 2 conditions : 1 sell ----> resell

    mapping(uint256 => NftInfo) public tokenIdToNftInfo;

    modifier checkForReSell(uint256 tokenId) {
        require(
            tokenIdToNftInfo[tokenId].soldOnce,
            "Product hasn't been sold yet"
        );
        _;
    }

    modifier checkForWarranty(uint256 tokenId) {
        require(
            block.timestamp <= tokenIdToNftInfo[tokenId].EndTime,
            "Warranty Expired"
        );
        _;
    }

    address payable private creator;

    constructor(string memory nftName, string memory nftShort)
        ERC721(nftName, nftShort)
    {
        creator = payable(msg.sender);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function safeMint(address payable to, string memory uri) public onlyOwner {
        uint256 tokenId = currentTokenId.current();
        currentTokenId.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        transferOwnership(to);
        tokenIdToNftInfo[tokenId].soldOnce = true;
    }

    function reSell(uint256 tokenId, address payable buyer)
        public
        checkForReSell(tokenId)
    {
        safeTransferFrom(ownerOf(tokenId), buyer, tokenId);
    }

    function burn(uint256 tokenId) public {
        super._burn(tokenId);
    }

    function getWarrantyduration(uint256 tokenId)
        public
        view
        checkForWarranty(tokenId)
        returns (uint256)
    {
        return tokenIdToNftInfo[tokenId].EndTime - block.timestamp;
    }
}
