import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from './navbar'
import Card from './card'


const user = () => {

  return (
    <div className="flex min-h-screen flex-col items-end justify-end py-2 pr-8 pl-8">

      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
        <Navbar/>
      </nav>

      <Head>
        <title>NFT project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <h1 className="font-bold text-slate-900 leading-snug text-6xl text-left font-mono pb-8">Browse</h1>
      <div className="grid lg:grid-cols-4">
          <Card
            title="My Card"
            imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            price="$10"
            // onAddToCart={handleAddToCart}
          />
            <Card
            title="My Card"
            imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            price="$10"
          />
            <Card
            title="My Card"
            imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            price="$10"
          />
            <Card
            title="My Card"
            imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            price="$10"
          />
            <Card
            title="My Card"
            imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            price="$10"
          />
            <Card
            title="My Card"
            imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            price="$10"
          />
            <Card
            title="My Card"
            imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            price="$10"
          />
            <Card
            title="My Card"
            imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            price="$10"
          />
            <Card
            title="My Card"
            imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            price="$10"
          />
            <Card
            title="My Card"
            imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            price="$10"
          />

      </div>

      </main>
    </div>
  )
}

export default user
