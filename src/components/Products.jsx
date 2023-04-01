import React from 'react'
import { StateContextCustom } from '../context/StateContext'
import Product from './Product';

const Products = () => {
  const {state:{products}} = StateContextCustom(state => state);
  // console.log(products);
  return (
    <div className='flex flex-wrap gap-10 justify-center mt-20 '>
      {products?.map(pd=>{
        return(
          <Product key={pd.id} {...pd}/>
        )
      })}
    </div>
  )
}

export default Products