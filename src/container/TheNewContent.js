import React, { useState, useEffect, useContext } from "react";
import { CContainer } from "@coreui/react";
import { Card } from "react-bootstrap";
// import Spinner from "react-bootstrap/Spinner";
import NumberFormat from "react-number-format";
import "../components/Productos.scss";
import { API_URL } from "../environment";
// import ProductContext from "../context/products/productContext";

const TheNewContent = () => {
  const [data, setData] = useState([]);
  // const productContext = useContext(ProductContext);
  const getProducts = () => {
    fetch(API_URL + "/pull")
      .then((response) => response.json())
      .then((products) => setData(products));
  };

  // const searchProduct = (str) => {
  //   var valid = true;
  //   if (
  //     productContext.searchingby !== "" &&
  //     productContext.searchingby !== null
  //   ) {
  //     var regex = new RegExp(productContext.searchingby.toUpperCase(), "g");
  //     valid = str.toUpperCase().match(regex);
  //   }
  //   return valid;
  // };
  // Run effect on componentDidMount
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="c-main">
      <CContainer fluid>
        {Object.keys(data).map((store) => (
          <Card className="Card-principal">
            <Card.Header className="text-light">{store}  -  {data[store].length}</Card.Header>
            <Card.Body>
              {data[store].map((item)=>(
                <div className="containerProduct">
                <a href={item.productlink} target="_blank" rel="noreferrer">
                  <div className="cardProduct">
                    <Card.Img variant="top" src={item.img} width="100px" />
                    <div className="ProductName">
                      <span>{item.product}</span>
                    </div>
                    {item.cantidad && (
                      <div
                        className={`container-stock  ${
                          item.cantidad <= 2 ? "poco-stock" : "stock-ok"
                        }`}
                      >
                        <span className="stock">
                          <strong>{item.cantidad}</strong> en stock
                        </span>
                      </div>
                    )}
                    <span className="Precio">
                      <NumberFormat
                        value={item.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        className={`price ${
                          item.stock === "En stock" ? "stockok" : "sinstock"
                        }`}
                      />
                    </span>
                  </div>
                </a>
              </div>
              ))}
              </Card.Body>
          </Card>
        ))}
      </CContainer>
    </main>
  );
};

export default React.memo(TheNewContent);
