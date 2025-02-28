import React, { Component } from 'react';
import "./../styles/NotFound.css";

export default class NotFound extends Component {
  render() {
    return (
      <div className='container'>
        <div className="error-code">404</div>
        <div className="error-message">Oops! Page Not Found</div>
        <button className="home-button" 
        onClick={() => window.location.href = '/'}>Go Home</button>
      </div>
    );
  }
}
