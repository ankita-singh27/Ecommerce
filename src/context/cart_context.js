import { createContext, useContext, useReducer ,useEffect} from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("CartItem");
  if (localCartData==[]) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  //cart: [],
  cart:getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 100,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = ( amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //increment and decrement of products
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // to add the data in localStorage by using  getitem and setitem
  
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("CartItem", JSON.stringify(state.cart));
    
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,clearCart,setIncrease,setDecrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
