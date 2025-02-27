import React from "react";
import "./../styles/Navi.css";

function Navi({ cart }) { // cart prop'unu ekledik
  return (
    <nav className="navi">
      <h1>My Store</h1>

      <div className="cart">
        🛒 Cart ({cart.length})
      </div>
    </nav>
  );
}

export default Navi;
