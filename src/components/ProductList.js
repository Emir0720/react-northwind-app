import React from "react";
import "./../styles/ProductList.css";

const ProductList = ({ products, info, currentCategory, addToCart }) => {
  return (
    <div className="product-list">
      <h2>
        {info.title} - {currentCategory}
      </h2>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.productName}</h3>
            <p className="price">Price: ${product.unitPrice}</p>
            <p className="quantity-per-unit">Quantity per Unit: {product.quantityPerUnit}</p>
            <p className="stock">Stock: {product.unitsInStock}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
