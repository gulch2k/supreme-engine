import React from 'react';
import '../styles/ProductCard.css';
import {Link} from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
      <div className='img'>
        <img src={product.image} alt={product.title} id="poster" /></div>
        <h2 id="title">{product.title}</h2>
        <div className="price">
          <h4 id="price">${product.price}</h4>
          <h5 id="rating">⭐Rating: {product.rating.rate}</h5>
        </div>
      </Link>
    </div>
    
  );
}

export default ProductCard;