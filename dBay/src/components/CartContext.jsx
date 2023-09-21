import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

//create context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([]);

  //item amount state

  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);

  useEffect(() => { 
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

//add to cart
const addToCart = (item, id) => {
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
    localStorage.setItem("cart", JSON.stringify(newCart));
  } else {
    const newItem = { ...item, amount: 1 };
    const updatedCart = [...cart, newItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
};

  // remove from cart list
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  //clear cart list
  const clearCartList = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart([]);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const checkout = () => {
    // In a real-world app, this is where you'd send the cart data to the server
    console.log('Checking out', cart);
    setCart([]);
  };

  //increase amount
  const increaseAmount = (id) => {
    const productItem = cart.find((item) => item.id === id);
    addToCart(productItem, id);
  };

  //decrease amount
  const decreaseAmount = (id) => {
    const productItem = cart.find((item) => {
      return item.id === id;
    });
    if (productItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: productItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart)); // Update the cart in local storage
    }

    if (productItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCartList,
        increaseAmount,
        decreaseAmount,
        setCart,
        total,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
    }
