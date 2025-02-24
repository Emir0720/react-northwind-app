import React, { Component } from "react";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import "./App.css";


export default class App extends Component {

  state = { currentCategory: "" };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };

    return (
      <div>
        <Navi />
        <div className="main-container">
          <CategoryList currentCategory = {this.state.currentCategory} changeCategory = {this.changeCategory} info={categoryInfo} />
          <ProductList currentCategory = {this.state.currentCategory} info={productInfo} />
        </div>
      </div>
    );
  }
}









