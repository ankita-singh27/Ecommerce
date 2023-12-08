import { useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cart_context";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";

const AddToCart = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
   //amount <numOfVotes ? setAmount(amount + 1) : setAmount(amount);
   setAmount(amount + 1);
  };

  return (
    <Wrapper>
    <div>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      </div>
      <div className="cart--button">
        <Button className="btn" onClick={() => addToCart(amount, product)}>
          Add To Cart
        </Button>
        <NavLink to="/cart">
          <Button>Go To Cart</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* we can use it as a global one too  */
  .cart-button{
    width:18rem;
  }
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
  .cart--button{
    display:flex;
    ${'' /* background-color:red; */}
    justify-content: space-between;
    ${'' /* align-items:space-around; */}
    ${'' /* height:10rem; */}
    width:40rem;
  }
`;
export default AddToCart;
