const ProductReducer = (state, action) => {

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((curElem) => {
        return curElem.numVotes >150;
      });

      return {
        ...state,
         isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_PRODUCT":
      
      return {
        ...state,
        isLoading: false,
        singleProduct: action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducer;
