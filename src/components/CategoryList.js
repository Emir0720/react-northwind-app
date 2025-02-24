import React, { Component } from 'react'
import "./../styles/Category.css";

export default class CategoryList extends Component {

constructor(props) {
  super(props); 
  state:{}

}

  render() {
    return (
      <div className="category-list">
        <h2>{this.props.info.title}</h2>
        <ul>
          <li>Elektronik</li>
          <li>Giyim</li>
          <li>Ev & Bahçe</li>
          <li>Kitap</li>
        </ul>
      </div>
    );
  }
}
