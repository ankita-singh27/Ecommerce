
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, title, image, price, amount }) => {
  const { removeItem } = useCartContext();

//   const setDecrease = () => {
//     // amount > 1 ? setAmount(amount - 1) : setAmount(1);
//   };

//   const setIncrease = () => {
//     // amount < stock ? setAmount(amount + 1) : setAmount(stock);
//   };

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
        <p> {price} </p>
      </div>

      {/* Quantity  */}
      {amount}
     

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>{Math.round(price * amount)}</p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
