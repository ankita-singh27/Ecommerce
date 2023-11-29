
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import CartAmountToggle from "./CartAmountToggle";
import FormatPrice from "../Helpers/FormatPrice";

const CartItem = ({ id, title, image, price, amount }) => {
  const { removeItem,setDecrease,setIncrease } = useCartContext();


  return (
    <div className="cart_heading grid grid-five-column">
    {/* image and name */}
      <div className="cart-image--name">
          <figure>
            <img src={image} alt={id} />
          </figure>
        <div><p>{title}</p></div>
      </div>

      {/* price   */}
      <div className="cart-hide">
        <p><FormatPrice price= {price} /> </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={()=>setDecrease(id)}
        setIncrease={()=>setIncrease(id)}
        />
     

      {/* //Subtotal */}
      <div className="cart-hide">
         <p><FormatPrice price={price*amount} /></p> 
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
