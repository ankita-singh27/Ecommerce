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
  total_amount: "",
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

  // to add the data in localStorage by using  getitem and setitem
  
  useEffect(() => {
    
    localStorage.setItem("CartItem", JSON.stringify(state.cart));
    
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
