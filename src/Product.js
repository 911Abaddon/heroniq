// Product.js

import React from 'react';
import './Product.css';

function Product() {
  const squares = Array.from({ length: 200 }, (_, index) => (
    <div key={index} className="square" />
  ));

  return (
    <div className="product">
      <div className="grid">
        {squares}
      </div>
      <header className="hero">
        <div className="hero-content">
          <h1>Enter the Void</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Join Waitlist</button>
        </div>
      </header>
    </div>
  );
}

export default Product;
