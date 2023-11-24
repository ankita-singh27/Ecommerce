const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { amount, product } = action.payload;

    let cartProduct;

    cartProduct = {
      id: product.id,
      title: product.title,
      amount,
      image: product.image,
      price: product.price,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};

export default cartReducer;
