import React from 'react'
import { StateContextCustom } from '../context/StateContext'

const One = () => {
    const {state:{count}} = StateContextCustom(state => state); 
    console.log(count);
    // const count = StateContextCustom(state => state); 
    // console.log(count);
  return (
    <div>
        <h1 className='text-3xl mx-5'>{count}</h1>
    </div>
  )
}

export default One