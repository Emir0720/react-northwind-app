import React, { Component } from "react";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import "./App.css";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import CartList from "./components/CartList";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
    this.loadCartFromStorage();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      this.saveCartToStorage();
    }
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3001/products";

    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

 
  addToCart = (product) => {
    let newCart = [...this.state.cart];

    let addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!", 3);
  };

  removeFromCart = (product) => {
    let newCart = [...this.state.cart];

    let itemIndex = newCart.findIndex((c) => c.product.id === product.id);
    if (itemIndex !== -1) {
      if (newCart[itemIndex].quantity > 1) {
        newCart[itemIndex].quantity -= 1;
      } else {
        newCart = newCart.filter((c) => c.product.id !== product.id);
      }
    }

    this.setState({ cart: newCart });
  };

 
  saveCartToStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

 
  loadCartFromStorage = () => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      this.setState({ cart: JSON.parse(storedCart) });
    }
  };

  render() {
    let productInfo = { title: "PRODUCTS" };
    let categoryInfo = { title: "CATEGORY" };

    return (
      <div>
        <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
        <div className="main-container">
          <CategoryList
            currentCategory={this.state.currentCategory}
            changeCategory={this.changeCategory}
            info={categoryInfo}
          />

          <Routes>
            <Route 
              path="/" 
              element={
                <ProductList
                  products={this.state.products}
                  addToCart={this.addToCart}
                  currentCategory={this.state.currentCategory}
                  info={productInfo}
                />
              }
            />
            <Route 
              path="/cart" 
              element={<CartList cart={this.state.cart} removeFromCart={this.removeFromCart} />} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    );
  }
}
