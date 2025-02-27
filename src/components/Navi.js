import React, { useState } from "react";
import "./../styles/Navi.css";
import CartSummary from "./CartSummary"; // CartSummary'yi import ettik

function Navi({ cart }) {
  const [isCartOpen, setIsCartOpen] = useState(false); // Sepetin açık olup olmadığını kontrol eden state

  // Sepet açma/kapama işlemi
  const toggleCart = () => {  
    setIsCartOpen((prev) => !prev);
  };

  // ✅ Toplam ürün miktarını hesapla
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navi">
      <h1>My Store</h1>

      <div className="cart" onClick={toggleCart}>
        🛒 Cart ({totalItems}) 
      </div>

      {/* Eğer sepet açık ise, CartSummary gösterilir */}
      {isCartOpen && <CartSummary cart={cart} />}
    </nav>
  );
}

export default Navi;
