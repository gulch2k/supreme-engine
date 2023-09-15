import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartProvider } from '../../components/CartContext';
import '../../styles/ProductDetails.css'

const API_URL = 'https://fakestoreapi.com/';

function ProductDetails() {
  const { addToCart } = useContext(CartProvider);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`${API_URL}/products/${productId}`);
      const productData = await response.json();
      setProduct(productData);
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-ratings">{product.ratings}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;