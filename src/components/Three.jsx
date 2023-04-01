import React from 'react'
import { StateContextCustom } from '../context/StateContext'

const Three = () => {
    const {state:{value}} = StateContextCustom(state => state);
    console.log(value)
  return (
    <div>
         <h1 className='text-3xl mx-5'>{value}</h1>
    </div>
  )
}

export default Three