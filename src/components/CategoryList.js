import React, { Component } from 'react';
import "./../styles/Category.css";

export default class CategoryList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Electronic" },
        { categoryId: 2, categoryName: "Clothes" },
        { categoryId: 3, categoryName: "Home & Garden" },
        { categoryId: 4, categoryName: "Books" }
      ],
    };
  }

  componentDidMount() {
    this.getCategories();
  }

   getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));

   };

  render() {
    return (
      <div className="category-list">
        <h2>{this.props.info.title}</h2>
        <ul>
          {this.state.categories.map(category => (
            <li onClick={() => this.props.changeCategory(category)} 
                key={category.id}>
              {category.categoryName}
            </li>
          ))}
        </ul>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
