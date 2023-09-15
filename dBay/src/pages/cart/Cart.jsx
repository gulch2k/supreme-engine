import React, { useContext } from 'react';
import { CartContext } from '../../components/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
        </div>
      ))}
      <p>Total: ${getCartTotal()}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;