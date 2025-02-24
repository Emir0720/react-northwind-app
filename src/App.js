import React from "react";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <Navi />
      <div className="main-container">
        <CategoryList />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
