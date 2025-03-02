import React, { Component } from 'react';
import './../styles/CartList.css';

export default class CartList extends Component {

  calculateTotalPrice() {
    return this.props.cart.reduce(
      (total, cartItem) => total + cartItem.product.unitPrice * cartItem.quantity,
      0
    );
  }

  renderCart() {
    return (
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id} className="cart-item">
              <td>{cartItem.product.productName}</td>
              <td className="cart-quantity">{cartItem.quantity}</td>
              <td className="cart-price">${cartItem.product.unitPrice}</td>
              <td className="cart-total">
                ${cartItem.product.unitPrice * cartItem.quantity}
              </td>
              <td>
                <button
                  className="remove-button"
                  onClick={() => this.props.removeFromCart(cartItem.product)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="cart-container">
        {this.renderCart()}
        <p className="cart-total-price">Total: ${this.calculateTotalPrice()}</p>
      </div>
    );
  }
}
