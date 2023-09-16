import React, { useEffect, useState, useContext  } from 'react';
import { Cartcontext } from "../../components/CartContext";
import { useParams } from 'react-router-dom';
import '../../styles/Product.css'

const API_URL = 'https://fakestoreapi.com';

function ProductDetails() {
  const { cart, setCart } = useContext(CartContext);
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

  const addToCart = () => {
    if (cart) {
    const productInCart = cart.find(item => item.id === product.id);
    if (productInCart) {
      productInCart.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }}
  };

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-ratings">{product.ratings}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;