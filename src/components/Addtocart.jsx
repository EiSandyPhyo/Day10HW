import React, { useEffect, useState } from "react";
import { StateContextCustom } from "../context/StateContext";
import Cart from "./Cart";
import EmptyCart from "../assets/emptycart.svg";
import { Link } from "react-router-dom";

const Addtocart = () => {
  const {
    state: { cart }, dispatch
  } = StateContextCustom();
  console.log(cart);

const total = () => cart.reduce((pv,cv)=>pv+cv.price,0);

const [mainTotal, setMainTotal] = useState(0);

useEffect(()=>{
  setMainTotal(total);
},[])

const increaseTotalAmount = (price) => {
  setMainTotal(mainTotal + price)
}
const decreaseTotalAmount = (price) => {
  setMainTotal(mainTotal - price)
}

const clearCart = () => {
  dispatch({type:"CLEAR_CART"})
}

  return (
    <>
      {cart?.length === 0 ? (
        <div className="flex flex-wrap justify-center h-[90vh] items-center">
          <div className="flex flex-col gap-3">
            <img src={EmptyCart} alt="emptycart" className="w-[50%] mx-auto" />
            <h2 className="text-2xl text-center text-gray-600 font-bold">
              NO ITEMS IN CART
            </h2>
            <p className="text-xl text-center text-gray-500">Looks like you haven't added anything to your cart yet</p>
            <Link to={'/'} className="mx-auto">
            <button className="px-6 py-2 bg-teal-500 text-white rounded shadow hover:bg-teal-600">
              Continue Shopping
            </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-[#EEEEEE]  min-h-[100vh] py-10">
          <div className="">
            {cart?.map((item) => {
              return <Cart key={item.id} item={item} increaseTotalAmount={increaseTotalAmount} decreaseTotalAmount={decreaseTotalAmount} mainTotal={mainTotal} setMainTotal={setMainTotal}/>;
            })}
          </div>
          <hr className=" border-gray-500 border-2 my-5 w-[80%] mx-auto max-[600px]:w-[93%]" />
          <div className="w-[60%] max-[600px]:w-[80%] flex flex-wrap justify-between items-center mx-auto">
            <p className="text-2xl text-gray-500 max-[600px]:text-xl">Total Amount</p>
            <p className="text-2xl text-gray-600 font-semibold max-[600px]:text-xl">${mainTotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-center items-center mt-10">
            <button onClick={clearCart} className="px-6 py-2 bg-teal-500 text-white rounded shadow hover:bg-teal-600">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Addtocart;
