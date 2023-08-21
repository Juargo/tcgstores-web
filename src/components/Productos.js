import React, { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import NumberFormat from "react-number-format";
import "./Productos.scss";
import { API_URL } from "../environment";
import ProductContext from "../context/products/productContext";

const ProductsList = ({ store, title }) => {
  const [data, setData] = useState([]);
  const productContext = useContext(ProductContext);
  const getProducts = () => {
    fetch(API_URL + "/api/get/scrape-it-store?store=" + store)
      .then((response) => response.json())
      .then((products) => setData(products));
  };

  const searchProduct = (str) => {
    var valid = true;
    if (
      productContext.searchingby !== "" &&
      productContext.searchingby !== null
    ) {
      var regex = new RegExp(productContext.searchingby.toUpperCase(), "g");
      valid = str.toUpperCase().match(regex);
    }
    return valid;
  };
  // Run effect on componentDidMount
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    {
      data.filter((x) => searchProduct(x.nombre)).length>0 &&
      <Card className="Card-principal">
      <Card.Header className="text-light">
        {title} - {data.length}
      </Card.Header>
      <Card.Body>
            {data.length === 0 && (
              <Spinner animation="border" role="status"></Spinner>
            )}
            {data
              .filter((x) => searchProduct(x.nombre))
              .map((item) => (
                  <div className="containerProduct">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <div className="cardProduct">
                        <Card.Img variant="top" src={item.img} width="100px" />
                        <div className="ProductName">
                          <span>{item.nombre}</span>
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
                            value={item.precio}
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
    }
    </>
  );
};

export default ProductsList;
