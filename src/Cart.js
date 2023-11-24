import styled from "styled-components";
import { useCartContext } from "./context/cart_context";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";



const Cart = () => {
  const { cart,clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <Wrapper>
      <div className="empty-cart">
        <img src="./images/trolley.png" alt="trolley"className="bounce trolley-cart" />
        <h3>Your Cart Is Empty </h3>
        <NavLink to="/products">
        <Button>Shop Now</Button>
        </NavLink>
      </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
          </div>
          <hr />
         
        
        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr/>

        {/* clear button and continue button */}
        <div className="cart-two-button">
          <NavLink to="/products">
            <Button> continue Shopping </Button>
          </NavLink>
          <Button className="btn btn-clear" onClick={clearCart}>
            clear cart
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  padding: 9rem 0;

  .empty-cart{
  display: grid;
  place-items: center;
  height: 50vh;
  }

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }

.trolley-cart{
  height: 25rem;
  width: 30rem;
}
  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  
    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  
  .cart-image--name {
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    } 
  }
  
  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  ${'' /* clear and continue button.cart-two-button { */}
  .cart-two-button{
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }
  .bounce{
    animation: bounceIn 2s infinite 2s;
      }
      @keyframes bounceIn {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
          opacity: 1;
        }
        40% {
          transform: translateY(-30px);
        }
        60% {
          transform: translateY(-15px);
        }
      }

    `;
export default Cart;