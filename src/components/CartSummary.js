import React from 'react';
import './../styles/CartSummary.css';
import { Link } from 'react-router-dom';

const CartSummary = ({ cart, removeFromCart }) => {
  return (
    <div className={`cart-summary ${cart.length > 0 ? 'open' : ''}`}>
      🛒 Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items) <br /> <br />
      
      {cart.length > 0 ? (
        <>
          <ul className="cart-summary-list">
            {cart.map((item, index) => (
              <li key={index}>
                {item.product.productName}
                <div className="item-container">
                  <span className="quantity-badge">{item.quantity}</span>
                  <button 
                    className="remove-button" 
                    onClick={() => removeFromCart(item.product)}>
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <Link to="/cart" className="cart-link">Go to Cart</Link> 
        </>
      ) : (
        'No products in the cart.'
      )}
    </div>
  );
};

export default CartSummary;
