import { SET_SEARCH } from "../types";

const ProductReducer = (state, action) => {
    const { payload, type } = action;
  
    switch (type) {
      case SET_SEARCH:
        return {
          ...state,
          searchingby: payload,
        };
      default:
        return {
          state,
        };
    }
  };
export default ProductReducer
