import React, { Component } from 'react';
import "./../styles/Category.css";

export default class CategoryList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Elektronik" },
        { categoryId: 2, categoryName: "Giyim" },
        { categoryId: 3, categoryName: "Ev & Bahçe" },
        { categoryId: 4, categoryName: "Kitap" }
      ],
      currentCategory: null
    };
  }

  // Arrow function kullanarak 'this' bağlamını otomatik olarak ayarlıyoruz
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    return (
      <div className="category-list">
        <h2>{this.props.info.title}</h2>
        <ul>
          {this.state.categories.map(category => (
            <li onClick={() => this.changeCategory(category)} 
                key={category.categoryId}>
              {category.categoryName}
            </li>
          ))}
        </ul>
        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}
