import React, { useState } from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi2";
import {FaTrashAlt} from 'react-icons/fa';
import { StateContextCustom } from "../context/StateContext";

const Cart = ({ item, increaseTotalAmount, decreaseTotalAmount, mainTotal, setMainTotal }) => {
    const [quality, setQuality] = useState(1);
    const {dispatch} = StateContextCustom()

    const increaseQty = () => {
        setQuality(quality+1);
        increaseTotalAmount(item.price)
    }

    const decreaseQty = () => {
        if(quality > 1){
            setQuality(quality-1);
            decreaseTotalAmount(item.price)
        }
    }

    const oneItemPrice = quality * item.price

    const removeCart = () => {
        dispatch({type:"REMOVE_FROM_CART", payload: item});
        setMainTotal(mainTotal - oneItemPrice);
        // decreaseTotalAmount(oneItemPrice);
    }


  return (
    <div className=" w-[70%] mx-auto py-7">
      <div className="flex flex-wrap justify-around items-center rounded-2xl shadow-lg bg-white h-[220px]">
        <div className="flex gap-10 items-center w-[60%]">
          <img src={item.image} className="w-[120px]" alt="" />
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-gray-500">{item.title}</h1>
            <p className="text-lg text-gray-600 font-semibold">${oneItemPrice.toFixed(2)}</p>
            <p onClick={removeCart} className="text-xl text-red-500 cursor-pointer hover:text-red-700">remove</p>
            {/* <button className="hover:opacity-80">
                <FaTrashAlt size={25}/>
            </button> */}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={decreaseQty} className="hover:opacity-70">
            <HiMinusCircle size={35} />
          </button>

          <button className="p-2 border border-teal-500 rounded pointer-events-none select-none">
            <span className="text-black text-lg">{quality}</span>
          </button>

          <button onClick={increaseQty} className="hover:opacity-70">
            <HiPlusCircle size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

/* image.png */
