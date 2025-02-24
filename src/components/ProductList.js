import React from "react";
import "./../styles/ProductList.css";

const ProductList = ({ products, info, currentCategory }) => {
  return (
    <div className="product-list">
      <h2>{info.title} - {currentCategory}</h2>

      <table className="product-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Units In Stock</th>
          </tr>
        </thead>
      
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>${product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
