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

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };

    return (
      <div>
        <Navi cart={this.state.cart} />
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
