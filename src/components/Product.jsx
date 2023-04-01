import React from 'react'
import { Link } from 'react-router-dom';
import { StateContextCustom } from '../context/StateContext';
import {BsCart4} from 'react-icons/bs'

const Product = (props) => {
    const {id,image,title,price} = props;
    const {dispatch} = StateContextCustom();
  return (
    <div>
        <div className="flex flex-col w-72 rounded shadow-lg p-3">
            <img src={image} className="w-[150px] h-[150px] object-contain mx-auto" alt="" />
            <div className="mt-2 ">
                <p className="p-1 text-gray-500">{title.substring(0,25)}...</p>
                <div className="flex flex-wrap justify-between items-center">
                <p className="p-1 pb-0 mb-1 text-gray-600 font-semibold">${price}</p>
                <button onClick={()=>dispatch({type:"ADD_TO_CART", payload:props})} className='px-5 py-1 bg-teal-500 text-white rounded shadow mr-2 hover:bg-teal-600'> <BsCart4 size={20}/> </button>
                </div>
                {/* <Link to={`/detail/${id}`}> */}
                {/* <button className='px-5 py-1 bg-teal-500 text-white rounded shadow hover:bg-teal-600'>Detail</button> */}
                {/* </Link> */}
            </div>
            
        </div>
    </div>
  )
}

export default Product