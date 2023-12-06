import { useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cart_context";
import CartAmountToggle from "./CartAmountToggle";


const AddToCart = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const { addToCart} = useCartContext();

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    // amount < rating ? setAmount(amount + 1) : setAmount(rating);
    setAmount(amount + 1) 
  };

  return (
    <Wrapper>

       <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
        />
    
        <Button className="btn" onClick={()=>addToCart(amount,product)}>Add To Cart</Button>
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
