const cartReducer = (state, action) => {
  switch (action.type) {
    
    case "ADD_TO_CART":
      let { amount, product } = action.payload;

    //   // tackle the existing product
    // let existingProduct = state.cart.find(
    //   (curItem) => curItem.id == product.id);

    // if (existingProduct) {
    //   let updatedProduct = state.cart.map((curElem) => {
    //     if (curElem.id == product.id) {
    //       let newAmount = curElem.amount + amount;

    //       if (newAmount >= curElem.max) {
    //         newAmount = curElem.max;
    //       }
    //       return {
    //         ...curElem,
    //         amount: newAmount,
    //       };
    //     }
    //      else {
    //       return curElem;
    //     }
    //   });
    //   return {
    //     ...state,
    //     cart: updatedProduct,
    //   };
    // }
    // else{
      let cartProduct;
      cartProduct = {
        id: product.id,
        title: product.title,
        amount,
        image: product.image,
        price: product.price,
      };
    // }
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    
  

    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    // to set the increment and decrement
    case "SET_DECREMENT":
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          console.log(curElem);
          let decAmount = curElem.amount - 1;

          if (decAmount <= 1) {
            decAmount = 1;
          }

          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };

    case "SET_INCREMENT":
      let updateProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let incAmount = curElem.amount + 1;

          if (incAmount >= curElem.max) {
            incAmount = curElem.max;
          }

          return {
            ...curElem,
            amount: incAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updateProduct };

    case "CART_TOTAL_ITEM":
      let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
        let { amount } = curElem;

        initialVal = initialVal + amount;
        return initialVal;
      }, 0);

      return {
        ...state,
        total_item: updatedItemVal,
      };

    case "CART_TOTAL_PRICE":
      let total_price = state.cart.reduce((initialVal, curElem) => {
        let { price, amount } = curElem;

        initialVal = initialVal + price * amount;
        return initialVal;
      }, 0);

      return {
        ...state,
        total_price,
      };

    default:
      return state;
  }
};

export default cartReducer;
