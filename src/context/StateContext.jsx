import { useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";


export const StateContext = createContext();

export const StateContextProvider = ({children} ) => {
    // const name = "susu";

    /* const initialState = {
        count: 0,
        value: 10
      } */
    
      /* const reducer = (state, action) => {
        switch(action.type){
          case "increase":
            return {...state,count:state.count + action.payload};
          case "increase2":
            return {...state,value:state.value + action.payload}
          default:
            return state;
        }
      } */

      const [productList, setProductList] = useState([]);
      const [search, setSearch] = useState("");

      const fetchData = async() => {
        const api = await fetch (`https://fakestoreapi.com/products`);
        const data = await api.json();
        setProductList(data);
        console.log(data);
      }
      useEffect(()=>{
        fetchData()
      },[])


      const initialState = {
        products: [],
        cart: []
      }

      useEffect(()=>{
        dispatch({type: "GET_PRODUCT", payload: productList})
        const filter = productList.filter(pd=> pd.title.toLowerCase().includes(search))
        dispatch({type: "GET_PRODUCT", payload: filter})
      },[productList, search])
    
      const [state, dispatch] = useReducer(reducer, initialState);

      const data = { state, dispatch, search, setSearch}
    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const StateContextCustom = () => useContext(StateContext);