import React, { useContext } from "react";
import ProductContext from "../context/products/productContext";
import './Productos.scss'
const Search = () => {
  const productContext = useContext(ProductContext);

  return (
    <>
      <input
        type="text"
        placeholder="Buscar"
        className="prompt buscador"
        onChange={(event) => productContext.setSearch(event.target.value)}
      />
    </>
  );
};

export default Search;
