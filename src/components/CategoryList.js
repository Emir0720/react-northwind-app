import React, { Component } from 'react';
import "./../styles/Category.css";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      isCategoriesVisible: false, 
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3001/categories")
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));
  };

  toggleCategories = () => {
    this.setState((prevState) => ({
      isCategoriesVisible: !prevState.isCategoriesVisible
    }));
  };

  render() {
    return (
      <div className="category-list">
        <h2 className="category-header" onClick={this.toggleCategories}>
          {this.props.info.title}
          <span className="arrow">{this.state.isCategoriesVisible ? "▲" : "▼"}</span>
        </h2>

        <div className={`category-items ${this.state.isCategoriesVisible ? 'open' : ''}`}>
          <ul>
            {this.state.categories.map(category => (
              <li 
                onClick={() => this.props.changeCategory(category)} 
                key={category.id}
              >
                {category.categoryName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
