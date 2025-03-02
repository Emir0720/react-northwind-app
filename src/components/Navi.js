import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import "./../styles/Navi.css";
import CartSummary from "./CartSummary";

function Navi({ cart, removeFromCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook'u ile yönlendirme

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navi">
      <h1 onClick={() => navigate("/")} className="store-title">
      Northwind App
      </h1>

      <div className="cart" onClick={toggleCart}>
        🛒 Cart ({totalItems}) 
      </div>

      {isCartOpen && <CartSummary removeFromCart={removeFromCart} cart={cart} />}
    </nav>
  );
}

export default Navi;
