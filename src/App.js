import React from "react";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
let productInfo = {title: "ProductList"};
let categoryInfo = {title: "CategoryList"};

  return (
    <div>
      <Navi />
      <div className="main-container">
        <CategoryList info={categoryInfo}/>
        <ProductList info={productInfo}/>
      </div>
    </div>
  );
}

export default App;
