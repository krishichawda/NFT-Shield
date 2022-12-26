import React, { useEffect, useState } from 'react';
import Cart from './cart'
import { useRouter } from 'next/router'

type Item = {
    title: string
    imageUrl: string
    price: string
  }
const Card: React.FC<Item> = ({ title, imageUrl, price }) => {
    const [items, setItems] = useState<Item[]>([])
    const addItem = (item: Item) => setItems([...items, item])

    const router = useRouter()
    const handleAddToCart = () => {

        addItem({ title, imageUrl, price})
        router.push('/cart')
    }
  return (
    <>
    <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg cursor-pointer hover:scale-105">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{price}</p>
      </div>
      <div className="px-6 py-4">
        <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
          Add to Cart
        </button>
      </div>
    </div>
    </>
  )
}

export default Card

// import React from "react";

// const Card = () => {
//     return(
//         <>
//         <h1 className="font-bold text-slate-900 leading-snug text-6xl text-left font-mono pb-8">Browse</h1>
//             <div className="grid lg:grid-cols-4">
//     <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg cursor-pointer hover:scale-105">
//         <img className="w-full h-48"
//             src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
//             alt="product" />
//         <div className="px-6 py-4">
//             <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
//             <p className="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
//                 elit.
//                 Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
//         </div>
//     </div>
//     <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg cursor-pointer hover:scale-105">
//         <img className="w-full h-48"
//             src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
//             alt="product" />
//         <div className="px-6 py-4">
//             <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
//             <p className="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
//                 elit.
//                 Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
//         </div>
//     </div>
//     <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg cursor-pointer hover:scale-105">
//         <img className="w-full h-48"
//             src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
//             alt="product" />
//         <div className="px-6 py-4">
//             <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
//             <p className="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
//                 elit.
//                 Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
//         </div>
//     </div>
//     <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg cursor-pointer hover:scale-105">
//         <img className="w-full h-48"
//             src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
//             alt="product" />
//         <div className="px-6 py-4">
//             <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
//             <p className="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
//                 elit.
//                 Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
//         </div>
//     </div>
//     <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg cursor-pointer hover:scale-105">
//         <img className="w-full h-48"
//             src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
//             alt="product" />
//         <div className="px-6 py-4">
//             <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
//             <p className="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
//                 elit.
//                 Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
//         </div>
//     </div>
//     <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg cursor-pointer hover:scale-105">
//         <img className="w-full h-48"
//             src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
//             alt="product" />
//         <div className="px-6 py-4">
//             <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
//             <p className="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
//                 elit.
//                 Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
//         </div>
//     </div>
//     <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg cursor-pointer hover:scale-105">
//         <img className="w-full h-48"
//             src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
//             alt="product" />
//         <div className="px-6 py-4">
//             <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
//             <p className="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
//                 elit.
//                 Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
//         </div>
//     </div>
//     <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg cursor-pointer hover:scale-105">
//         <img className="w-full h-48"
//             src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
//             alt="product" />
//         <div className="px-6 py-4">
//             <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
//             <p className="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
//                 elit.
//                 Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
//         </div>
//     </div>
//     <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg cursor-pointer hover:scale-105">
//         <img className="w-full h-48"
//             src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
//             alt="product" />
//         <div className="px-6 py-4">
//             <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
//             <p className="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
//                 elit.
//                 Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
//         </div>
//     </div>
// </div>

//         </>
//     )
// }

// export default Card;