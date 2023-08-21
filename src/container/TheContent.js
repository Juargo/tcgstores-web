import React from "react";
import { CContainer } from "@coreui/react";
import ProductsList from "../components/Productos";
// import ProductState from "./context/products/productState";

const TheContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        {/* <ProductState> */}
        <ProductsList store="llanowar" title="llanowar" />
        <ProductsList store="playcenter" title="playcenter" />
        <ProductsList store="tiendakaleido" title="tiendakaleido" />
        <ProductsList store="lafortalezapuq" title="lafortalezapuq" />
        <ProductsList store="geekers" title="geekers" />
        <ProductsList store="storedevastation" title="Storedevastation" />
        <ProductsList store="araucaniagaming" title="Araucania Gamming" />
        <ProductsList store="weplay" title="Weplay" />
        {/* <ProductsList store="magicsur" title="Magic sur" /> BAD */}
        <ProductsList store="magic4ever" title="Magic4erver" />
        <ProductsList store="boostoretcg" title="Boo Store" />
        <ProductsList store="guildDream" title="guildDream" />
        <ProductsList store="entrejuegos" title="EntreJuegos" />
        <ProductsList store="carduniverse" title="Card Universe" />
        <ProductsList store="elreinodelosduelos" title="elreinodelosduelos" />
        
        {/* </ProductState> */}
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
