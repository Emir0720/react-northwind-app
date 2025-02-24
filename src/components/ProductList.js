import React, {Component} from "react";
import "./../styles/ProductList.css";

export default class ProductList extends Component {
  render() {
    return(

 
    <div className="product-list">
      <h2>{this.props.info.title}-{this.props.currentCategory}</h2>
      <div className="products">
        <div className="product-card">product 1</div>
        <div className="product-card">product 2</div>
        <div className="product-card">product 3</div>
        <div className="product-card">product 4</div>
      </div>
    </div>
       )
  }
}