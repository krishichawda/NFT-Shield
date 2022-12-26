import React, { useState } from 'react'
import { Alchemy, Network } from "alchemy-sdk";

export default function Verify() {



const [address, setAddress] = useState<string>("");
const [data, setData] = useState<any>([])
const [showNft, setShowNft] = useState<boolean>(false)

const config = {
  apiKey: "167legR0GoM_CxCz8GFnjf7t0H7OmEe-",
  network: Network.MATIC_MAINNET,
};
const alchemy = new Alchemy(config);

const handleClick = async () => {
  console.log(address)
  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner(address);

  setShowNft(true);

  // Print NFTs
  for (let i=0; i < nfts.totalCount; i++ ){
 // console.log(nfts.ownedNfts[i].rawMetadata);
  data.push(nfts.ownedNfts[i].rawMetadata);
  }
  console.log(data);
};

const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
  setAddress(e.currentTarget.value);
  //console.log(address)

}

  return (
    <div className='my-12 border-2 pt-8 w-2/6 rounded-3xl mx-auto' >
    <div className='flex flex-row justify-center mx-auto font-bold text-xl'>Verify Your NFT</div>
    <input className='flex flex-row justify-center w-4/6 px-2 mt-10 mx-auto border-2 rounded-lg' placeholder='Wallet Address' type="text" onChange={handleChange}/>
    <div className="flex w-full justify-center py-10">
          <input className='w-28 h-10 text-white bg-black rounded-full items-center text-center py-2' type="submit" onClick={handleClick}/>
        </div>
        {showNft && 
          <p>Nft's are visible</p>

          }
    </div>

  )
}



