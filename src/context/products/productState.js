import React, { useReducer } from "react";
import ProductReducer from "./productReducer";
import ProductContext from "./productContext";

const ProductState = (props) => {
  const initialState = {
    searchingby: null,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const setSearch = (searchText) => {
    // console.log(searchText);
    dispatch({
      type: "SET_SEARCH",
      payload: searchText,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        searchingby: state.searchingby,
        setSearch,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
