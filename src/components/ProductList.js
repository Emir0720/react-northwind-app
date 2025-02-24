import React from "react";
import "./../styles/ProductList.css";

function ProductList() {
  return (
    <div className="product-list">
      <h2>Ürünler</h2>
      <div className="products">
        <div className="product-card">Ürün 1</div>
        <div className="product-card">Ürün 2</div>
        <div className="product-card">Ürün 3</div>
        <div className="product-card">Ürün 4</div>
      </div>
    </div>
  );
}

export default ProductList;
