import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const productData = await response.json();
      setProduct(productData);
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.title} />
      {/* Add more details as needed */}
    </div>
  );
}

export default ProductDetails;