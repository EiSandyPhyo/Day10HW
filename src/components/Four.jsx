import React from 'react'
import { StateContextCustom } from '../context/StateContext'

const Four = () => {
    const {dispatch} = StateContextCustom(state => state);
    console.log(dispatch)
  return (
    <div>
        <button className=' px-5 py-1 m-5 bg-teal-500 text-white' onClick={()=>dispatch({type: "increase2", payload: 10})}>Increase By Value</button>
    </div>
  )
}

export default Four