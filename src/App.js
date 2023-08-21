import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "./App.css";
import Old from './components/Old'
import New from './components/New'
import Group from './components/Group'

// import TheSidebar  "./container/sideBar";
import ProductState from "./context/products/productState";

function App() {
  return (
    <ProductState>
      <Router>
        <Route path="/" exact component={Old} />
        <Route path="/new" exact component={New} />
        <Route path="/group" exact component={Group} />
        </Router>
    </ProductState>
  );
}

export default App;
