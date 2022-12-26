import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { initFirebase } from '../firebase/firebase'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // const app = initFirebase()
  // console.log(app)

  return (
    <>
    <div>
      <ul className='flex flex-row space-x-20 p-4 font-medium justify-end mr-32'>
      <li className='text-black text-lg'><Link href="/">Home</Link></li>
      <li className='text-black text-lg'><Link href="/verify">Verify NFT</Link></li>
      <li className='text-black text-lg'><Link href="/login">Login</Link></li>
      </ul>
    </div>

    <div className='flex p-10 justify-between bg-black rounded-3xl mt-16 mx-10'>
      <div className='flex flex-col w-52 py-20 px-48 space-y-32'>
        <h1 className='text-5xl text-white'>
          Decentralized Marketplace
        </h1>
        <div className='w-28 h-10 bg-white ml-16 rounded-full items-center text-center py-2'>
          <Link href='/signup'><p className='font-bold'>Sign Up</p></Link>
        </div>
      </div>
      <img  className='p-8 w-3/6 h-3/6 rounded-lg'
      src="https://www.highsnobiety.com/static-assets/thumbor/2p-BdZ2oaH2PldVt2aVyrfET9OQ=/1260x840/www.highsnobiety.com/static-assets/wp-content/uploads/2022/06/17175231/bill-gates-nft-crypto-bored-ape-yacht-club-1.jpg"
      />
    </div>
    </>
  )
}
