import React, { useState, useEffect, useContext } from "react";
import { CContainer } from "@coreui/react";
import { Card } from "react-bootstrap";
// import Spinner from "react-bootstrap/Spinner";
import NumberFormat from "react-number-format";
import "../components/Productos.scss";
import { API_URL } from "../environment";
// import ProductContext from "../context/products/productContext";

const TheContentGroup = () => {
  const [data, setData] = useState([]);
  const [idioma, setIdioma] = useState('ENG');
  const [tipoProducto, setTipoProducto] = useState('ALL');
  // const productContext = useContext(ProductContext);
  const getProducts = () => {
    fetch(API_URL + "/group")
      .then((response) => response.json())
      .then((products) => setData(products));
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="c-main">
      <CContainer fluid>
        <label>Idioma</label>
        <input  label="ENG" type="radio" checked={idioma === 'ENG'} value="ENG" onClick={() => setIdioma('ENG')} />ENG
        <input label="ESP" type="radio" checked={idioma === 'ESP'} value="ESP" onClick={() => setIdioma('ESP')} />ESP
        <input label="UNK" type="radio" checked={idioma === 'UNK'} value="UNK" onClick={() => setIdioma('UNK')} />UNK
        <input label="ALL" type="radio" checked={idioma === 'ALL'} value="ALL" onClick={() => setIdioma('ALL')} />ALL
        <br/>
        <label>Tipo Producto</label>
        <input label="ALL" type="radio" checked={tipoProducto === 'ALL'} value="ALL" onClick={() => setTipoProducto('ALL')} />ALL
        <input  label="Booster" type="radio" checked={tipoProducto === 'Booster'} value="Booster" onClick={() => setTipoProducto('Booster')} />Booster
        <input label="Booster Box" type="radio" checked={tipoProducto === 'Booster Box'} value="Booster Box" onClick={() => setTipoProducto('Booster Box')} />Booster Box
        <input label="Ball Tin" type="radio" checked={tipoProducto === 'Ball Tin'} value="Ball Tin" onClick={() => setTipoProducto('Ball Tin')} />Ball Tin
        <input label="Carpeta" type="radio" checked={tipoProducto === 'Carpeta'} value="Carpeta" onClick={() => setTipoProducto('Carpeta')} />Carpeta
        <input label="Premium Collection" type="radio" checked={tipoProducto === 'Premium Collection'} value="Premium Collection" onClick={() => setTipoProducto('Premium Collection')} />Premium Collection
        <input label="Box Tin" type="radio" checked={tipoProducto === 'Box Tin'} value="Box Tin" onClick={() => setTipoProducto('Box Tin')} />Box Tin
        <input label="Mini Tin" type="radio" checked={tipoProducto === 'Mini Tin'} value="Mini Tin" onClick={() => setTipoProducto('Mini Tin')} />Mini Tin
        <input label="Blister" type="radio" checked={tipoProducto === 'Blister'} value="Blister" onClick={() => setTipoProducto('Blister')} />Blister
        <input label="First Partner" type="radio" checked={tipoProducto === 'First Partner'} value="First Partner" onClick={() => setTipoProducto('First Partner')} />First Partner
        <input label="Chest" type="radio" checked={tipoProducto === 'Chest'} value="Chest" onClick={() => setTipoProducto('Chest')} />Chest
        <input label="Battle Deck" type="radio" checked={tipoProducto === 'Battle Deck'} value="Battle Deck" onClick={() => setTipoProducto('Battle Deck')} />Battle Deck
        <input label="ETB" type="radio" checked={tipoProducto === 'ETB'} value="ETB" onClick={() => setTipoProducto('ETB')} />ETB
        <input label="Box Collection" type="radio" checked={tipoProducto === 'Box Collection'} value="Box Collection" onClick={() => setTipoProducto('Box Collection')} />Box Collection
        <input label="Mini Portfolio" type="radio" checked={tipoProducto === 'Mini Portfolio'} value="Mini Portfolio" onClick={() => setTipoProducto('Mini Portfolio')} />Mini Portfolio
        <input label="Packs" type="radio" checked={tipoProducto === 'Packs'} value="Packs" onClick={() => setTipoProducto('Packs')} />Packs
        <input label="NO CLASIFICADO" type="radio" checked={tipoProducto === 'NO CLASIFICADO'} value="NO CLASIFICADO" onClick={() => setTipoProducto('NO CLASIFICADO')} />NO CLASIFICADO

        {data.group &&
          Object.keys(data.group).filter((product) => {
            if(idioma==="UNK"){
              return data.group[product].idioma==="NO ESPECIFICADO"
            }else if(idioma==="ESP"){
              return data.group[product].idioma==="ESP"
            }else if(idioma==="ENG"){
              return data.group[product].idioma==="ENG"
            }else if(idioma==="ALL"){
              return true
            }
          }).filter((product)=>{
            if(tipoProducto==="NO CLASIFICADO"){
              return data.group[product].tipo_producto==="NO CLASIFICADO"
            }else if(tipoProducto==="Booster"){
              return data.group[product].tipo_producto==="Booster"
            }else if(tipoProducto==="Ball Tin"){
              return data.group[product].tipo_producto==="Ball Tin"
            }else if(tipoProducto==="Carpeta"){
              return data.group[product].tipo_producto==="Carpeta"
            }else if(tipoProducto==="Premium Collection"){
              return data.group[product].tipo_producto==="Premium Collection"
            }else if(tipoProducto==="Box Tin"){
              return data.group[product].tipo_producto==="Box Tin"
            }else if(tipoProducto==="Mini Tin"){
              return data.group[product].tipo_producto==="Mini Tin"
            }else if(tipoProducto==="Blister"){
              return data.group[product].tipo_producto==="Blister"
            }else if(tipoProducto==="First Partner"){
              return data.group[product].tipo_producto==="First Partner"
            }else if(tipoProducto==="Chest"){
              return data.group[product].tipo_producto==="Chest"
            }else if(tipoProducto==="Battle Deck"){
              return data.group[product].tipo_producto==="Battle Deck"
            }else if(tipoProducto==="ETB"){
              return data.group[product].tipo_producto==="ETB"
            }else if(tipoProducto==="Booster Box"){
              return data.group[product].tipo_producto==="Booster Box"
            }else if(tipoProducto==="Box Collection"){
              return data.group[product].tipo_producto==="Box Collection"
            }else if(tipoProducto==="Packs"){
              return data.group[product].tipo_producto==="Packs"
            }else if(tipoProducto==="Mini Portfolio"){
              return data.group[product].tipo_producto==="Mini Portfolio"
            }else if(tipoProducto==="ALL"){
              return true
            }
          }).map((product) => (
            <Card className="Card-principal" Style="width: 444px; float:left;margin-right:10px">
              <Card.Header className="text-light" Style="font-size:10px">{product} - {data.group[product].tipo_producto}</Card.Header>
              <Card.Body className="body-group">
                <div className="containerGroupProduct">
                  {" "}
                  <Card.Img
                    variant="top"
                    src={data.group[product].img}
                    width="100px"
                  />
                  <div className="storesContainer">
                    <ul>
                      {data.group[product].stores.map((store) => (
                        <li Style="display: flex;
                        justify-content: space-between;">
                          <a href={store.link} target="_blank" rel="noreferrer">{store.storename}</a> 
                          <NumberFormat
                            value={store.precio}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                          />
                         <span>({store.stock})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
      </CContainer>
      <CContainer fluid>
        {data.faltantes &&
          Object.keys(data.faltantes).map((store) => (
            <Card className="Card-principal">
              <Card.Header className="text-light">
                {store} - {data.faltantes[store].length}
              </Card.Header>
              <Card.Body>
                {data.faltantes[store].map((item) => (
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



export default React.memo(TheContentGroup);
