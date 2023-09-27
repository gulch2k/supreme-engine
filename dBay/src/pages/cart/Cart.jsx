import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../components/CartContext";
import CartItem from "./CartItem";
import "../../styles/Cart.css";

const Cart = () => {
  const { cart, setCart, total, clearCartList } = useContext(CartContext);
  const navigate = useNavigate();
  const [fetchedCarts, setFetchedCarts] = useState([]);
  const [showCatPaws, setShowCatPaws] = useState(false);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      // Update the cart context state with the cart items from localStorage
      setCart(JSON.parse(storedCart));
    }

    fetch("https://fakestoreapi.com/carts")
      .then((response) => response.json())
      .then((carts) => {
        setFetchedCarts(carts);
      })
      .catch((error) => {
        console.error("Error fetching carts:", error);
      });
  }, []);

  console.log(fetchedCarts); // Access the fetched carts data here

  return (
    <div>
      <h1>Cart Page</h1>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <CartItem item={item} />
            </li>
          ))}
          <p className="total-amount">Total: $ {parseFloat(total).toFixed(2)}</p>
          <button className="checkout-button" onClick={() => clearCartList()}>
            REMOVE CART ❌
          </button>
          <button className="checkout-button" onClick={handleCheckout}>
            CHECKOUT 🛒
          </button>
          <button onClick={() => setShowCatPaws(true)}> click me! </button>
      {showCatPaws && 
        <CatPaws 
          onClose={() => setShowCatPaws(false)}
          fillScreen
        />}
        </ul>
      )}
    </div>
  );
};

export default Cart;