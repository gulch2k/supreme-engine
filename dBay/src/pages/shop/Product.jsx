import React, { useEffect, useState, useContext  } from 'react';
import { CartContext } from "../../components/CartContext";
import { useParams } from 'react-router-dom';
import '../../styles/Product.css'

const API_URL = 'https://fakestoreapi.com';

function ProductDetails() {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`${API_URL}/products/${id}`);
      const productData = await response.json();
      setProduct(productData);
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }


  return (
    <div className='product-container'>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <button clasname="add-to-cart-button" onClick={()=> addToCart(product, id)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;