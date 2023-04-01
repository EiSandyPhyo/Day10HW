import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Addtocart from './components/Addtocart';
import Detail from './components/Detail';
import Four from './components/Four';
import Navbar from './components/Navbar';
import One from './components/One';
import Products from './components/Products';
import Three from './components/Three';
import Two from './components/Two';
import { StateContextCustom } from './context/StateContext'

const App = () => {
  /* const {name} = StateContextCustom();
  console.log(name) */

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/addtocart" element={<Addtocart/>} />
      {/* <Route path="/detail/:id" element={<Detail/>}/> */}
    </Routes>

    {/* <One/>
    <Two/>
    <Three/>
    <Four/> */}
   {/*  <div>
      <h2 className=' text-3xl mx-5'>{state.count}</h2>
      <button className=' px-5 py-1 m-5 bg-teal-500 text-white' onClick={()=>dispatch({type: "increase", payload:2})}>Increase</button>
    </div>
    <div>
      <h2 className=' text-3xl mx-5'>{state.value}</h2>
      <button className=' px-5 py-1 m-5 bg-teal-500 text-white' onClick={()=>dispatch({type: "increase2", payload:10})}>Increase By value</button>
    </div> */}
    </>
  )
}

export default App