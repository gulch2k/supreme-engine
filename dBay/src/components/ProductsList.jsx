import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css'


function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products');
      const productsData = await response.json();
      setProducts(productsData);
    }

    fetchProducts();
  }, []);

  return (
  <>
    <div className="productsContainer">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
}

export default ProductsList;