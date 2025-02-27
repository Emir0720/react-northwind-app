import React, { Component } from "react";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import "./App.css";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
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

  //  Sepete ürün ekleme fonksiyonu
  addToCart = (product) => {
    let newCart = [...this.state.cart]; // Yeni bir dizi oluşturduk

    // Eğer ürün sepette varsa miktarı artır
    let addedItem = newCart.find((c) => c.product.id === product.id);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
   
  };

  removeFromCart = (product) => {
    let newCart = [...this.state.cart];  
  
    // Sepetteki ürünün miktarını 1 azaltıyoruz
    let itemIndex = newCart.findIndex((c) => c.product.id === product.id);
  
    if (itemIndex !== -1) {
      if (newCart[itemIndex].quantity > 1) {
        
        newCart[itemIndex].quantity -= 1;
      } else {
        
        newCart = newCart.filter((c) => c.product.id !== product.id);
      }
    }
  
    this.setState({ cart: newCart });  // Sepeti güncelliyoruz
  }
  


  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };

    return (
      <div>
        <Navi removeFromCart = {this.removeFromCart} cart={this.state.cart} />
        <div className="main-container">
          <CategoryList
            currentCategory={this.state.currentCategory}
            changeCategory={this.changeCategory}
            info={categoryInfo}
          />
          <ProductList
            products={this.state.products}
            currentCategory={this.state.currentCategory}
            info={productInfo}
            addToCart={this.addToCart} // Burada prop olarak geçtik
          />
        </div>
      </div>
    );
  }
}
