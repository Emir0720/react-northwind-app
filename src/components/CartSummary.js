import React from 'react';
import './../styles/CartSummary.css';

const CartSummary = ({ cart }) => {
  return (
    <div className={`cart-summary ${cart.length > 0 ? 'open' : ''}`}>
      🛒 Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items) <br /> <br />
      {cart.length > 0 ? (
        <ul className="cart-summary-list">
          {cart.map((item, index) => (
            <li key={index}>
              {item.product.productName}  
              <span className="quantity-badge">{item.quantity}</span>
            </li>
          ))}
        </ul>
      ) : (
        'No products in the cart.'
      )}
    </div>
  );
};

export default CartSummary;
