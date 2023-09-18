import React, { Children, createContext, useContext, useState } from "react";

//create context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([]);

  //item amount state 

  const [itemAmount, setItemAmount] = useState(0);

  //add to cart
  const addToCart = (item, id) => {
    const newItem = { ...item, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    //if cart item is already in cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      const updatedCart = [...cart, newItem];
      setCart([...cart, newItem]);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  // remove from cart list
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => item.id !== id);
  setCart(newCart);
  localStorage.setItem('cart', JSON.stringify(newCart));
  };

  //clear cart list 
  const clearCartList = () => {
    setCart([]);
  }

//increase amount 
const increaseAmount = (id) => {
  const productItem = cart.find((item) => item.id === id);
  addToCart(productItem, id);
}

//decrease amount 
const decreaseAmount = (id) => {
  const productItem = cart.find((item) => {
  return item.id === id;
});
  if (productItem) {
    const newCart = cart.map(item => {
      if (item.id === id) {
        return {...item, amount: productItem.amount -1 };
      } else {
        return item;
      }
    });
    setCart(newCart);
  }

    if (cartItem.amount < 2) {
      removeFromCart(id);
  }
};

    return (
      <CartContext.Provider value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        clearCartList, 
        increaseAmount, 
        decreaseAmount,
        setCart
        }}>
        {children}
      </CartContext.Provider>
    );
  };
