import styled from "styled-components";
import { useCartContext } from "./context/cart_context";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";



const Cart = () => {
  const { cart,clearCart,shipping_fee, total_price,total_item } = useCartContext();

  if (cart.length === 0) {
    return (
      <Wrapper>
      <div className="empty-cart ">
      <div className="bounce"> 
      <img src="./images/trolley.png" alt="trolley"className=" trolley-cart" />
      </div>
       
        <h3>Your Cart is Empty </h3>
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

        {/* order total_amount */}
        <div className="order-total--amount">
        <div><p className="summary"> Order Summary</p></div>
          <div className="order-total--subdata">
         
            <div>
              <p>Total Amount:</p>
              <p> {(total_price).toFixed(2)} </p>
            </div>

            <div>
              <p>Quantity:</p>
              <p> {total_item} </p>
            </div>
            
            
            <div>
              <p>shipping fee:</p>
              <p> {shipping_fee} </p>
            </div>
            <hr />

            <div>
              <p>order total:</p>
              <p> {(shipping_fee + total_price).toFixed(2)} </p>
            </div>
          </div>
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
    font-weight: 300;
  }
  .bounce {
        animation: bounceIn 2s infinite 2s;
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

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
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

  {/* order total_amount */}
  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    .summary{
  margin-right:5rem;
  font-size:2rem;
  }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }
  
  
    `;
export default Cart;