import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StateContextCustom } from '../context/StateContext'

const Navbar = () => {
  const {search, setSearch} = StateContextCustom()
  const {state:{cart}} = StateContextCustom()
  console.log(cart);
  
  // console.log(search)
  return (
    <div className='flex flex-wrap justify-around items-center p-5 rounded shadow-lg'>
      <Link to={'/'}>
      <h1 className='text-3xl font-semibold'>Shop</h1>
      </Link>
      <div className="">
        <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" className='outline-none border-b-2 border-b-black mr-1' />
        <Link to={'/addtocart'}>
        <button className='px-4 py-1 bg-teal-500 text-white rounded hover:bg-teal-600'>
          {cart.length}
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar