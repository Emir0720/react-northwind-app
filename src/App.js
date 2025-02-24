import React, { Component } from "react";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import "./App.css";


export default class App extends Component {

  state = { currentCategory: "", products: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => this.setState({ products: data }));

  };


  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };

    return (
      <div>
        <Navi />
        <div className="main-container">
          <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
          <ProductList products={this.state.products} currentCategory={this.state.currentCategory} info={productInfo} />
        </div>
      </div>
    );
  }
}









