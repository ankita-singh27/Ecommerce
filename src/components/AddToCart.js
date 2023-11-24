import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";


const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(1);
 

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    // amount < rating ? setAmount(amount + 1) : setAmount(rating);
    setAmount(amount + 1) 
  };

  return (
    <Wrapper>
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={()=>setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={()=>setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
     
      <NavLink to="/cart" onClick={()=>addToCart(amount,product)}>
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;
