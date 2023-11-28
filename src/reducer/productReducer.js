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
    //logic for products page:

      case "LOAD_FILTER_PRODUCTS":
        
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
          
        };

        case "SET_GRID_VIEW":
           return {
            ...state,
            grid_view: true,
           };

           case "SET_LIST_VIEW":
           return {
            ...state,
            grid_view: false,
           };

    default:
      return state;
  }
};

export default ProductReducer;
