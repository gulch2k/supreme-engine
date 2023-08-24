import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.error('Error:', error);
        // Handle the error here
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
    {products.map(product => (
      <div key={product.id}>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
        
      </div>
    ))}
  </div>
);
}

export default ProductList;