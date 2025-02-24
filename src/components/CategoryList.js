import React, { Component } from 'react'
import "./../styles/Category.css";

export default class CategoryList extends Component {
  render() {
    return (
      <div className="category-list">
        <h2>Kategoriler</h2>
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
