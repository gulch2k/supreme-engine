import React, { Children, createContext, useContext, useState } from "react";

//create context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([]);

  //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((product) => {
      return product.id === id;
    });

    //if cart item is already in cart
    if (cartItem) {
      const newCart = [...cart].map((product) => {
        if (product.id === id) {
          return { ...product, amount: cartItem.amount + 1 };
        } else {
          return product;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove from cart list
  const removeFromCart = (id) => {
    const newCart = cart.filter(product => {
      return product.id === id;
    })
    setCart(newCart);
  };

  //clear cart list 
  const clearCartList = () => {
    setCart([]);
  }

//increase amount 
const increaseAmount = (id) => {
  const productItem = cart.find((product) => product.id === id);
  addToCart(product, id);
}

//decrease amount 
const decreaseAmount = (id) => {
  const productItem = cart.find((product) => {
  return product.id === id;
});
  if (productItem) {
    const newCart = cart.map(item => {
      if (item.id === id) {
        return {...product, amount: cartItem.amount -1 };
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
        decreaseAmount
        }}>
        {children}
      </CartContext.Provider>
    );
  };
