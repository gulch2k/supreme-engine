import { useContext, useEffect } from "react";
import { CartContext } from "../../components/CartContext";
import CartItem from "./CartItem";
import "../../styles/Cart.css";

const Cart = () => {
  const { cart, setCart, total } = useContext(CartContext);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      // Update the cart context state with the cart items from localStorage
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const CartItem = ({ item }) => {
    return (
      <li>
        {/* Render the necessary details of the item */}
        <p>Product ID: {item.productId}</p>
        <p>Quantity: {item.quantity}</p>
      </li>
    );
  };

  return (
    <div>
      <h1>Cart Page</h1>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <p class="total-amount">Total: $ {parseFloat(total).toFixed(2)}</p>
        </ul>
      )}
    </div>
  );
};

export default Cart;
