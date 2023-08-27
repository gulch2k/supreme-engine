import React from 'react';
import '../styles/ProductCard.css';
import {Link} from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h5 className="product-title">{product.title}</h5>
          <p className="product-price">${product.price}</p>
          <p className="product-ratings">${product.ratings}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;