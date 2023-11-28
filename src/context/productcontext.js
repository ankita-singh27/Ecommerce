import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://productdecisiveduck.onrender.com/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  singleProduct: {},
  filter_products:[],
  all_products:[],
  grid_view :true,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
      dispatch({ type: "SET_LOADING" });
      dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
      console.log(products)
    } catch (error) {
      console.error(error.message)
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      console.log(error);
      dispatch({ type: "API_ERROR"});
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  //to set the grid view
   const setGridView = () => {
    //dispatch({ type: "SET_LOADING" });
     return dispatch({ type: "SET_GRID_VIEW" });
   };

   //to set the list view
   const setListView = () => {
     return dispatch({ type: "SET_LIST_VIEW" });
  };

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct,setGridView,setListView  }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
