import { useContext, useEffect  } from "react";
import {useNavigate} from "react-router-dom"
import { CartContext } from "../../components/CartContext";
import CartItem from "./CartItem";
import "../../styles/Cart.css";

const Cart = () => {
  const { cart, setCart, total, clearCartList } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      // Update the cart context state with the cart items from localStorage
      setCart(JSON.parse(storedCart));
    }
  }, []);

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
          <p class="total-amount">Total: $ {parseFloat(total).toFixed(2)}</p>
          <button className="checkout-button" onClick={() => clearCartList()}>
            REMOVE CART  ❌
          </button>
          <button className="checkout-button" onClick={handleCheckout}>
            CHECKOUT  🛒 
          </button>
          
        </ul>
      )}
    </div>
  );
};

export default Cart;
