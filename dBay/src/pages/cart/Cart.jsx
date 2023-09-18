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

  return (
    <div className="cart-container">
      {cart.map((product) => {
        return <CartItem item={product} key={product.id} />;
      })}
      <p class="total-amount">Total: $ {parseFloat(total).toFixed(2)}</p>
    </div>
  );
};

export default Cart;
