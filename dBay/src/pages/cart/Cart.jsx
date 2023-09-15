import React, { useContext } from 'react';
import { CartContext } from '../../components/CartContext';

const Cart = () => {
  const [cart] = useContext(CartContext);

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((product, index) => (
        <div key={index}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      ))}
      <p>Total: {totalPrice}</p>
    </div>
  );
};

export default Cart;