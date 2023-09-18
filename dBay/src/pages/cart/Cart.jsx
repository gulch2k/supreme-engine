import { useContext } from "react";
import { CartContext } from "../../components/CartContext";
import  CartItem from "./CartItem";
import "../../styles/Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-container">
      {cart.map((product) => {
        return <CartItem item={product} key={product.id}/>;
})}
    </div>
  );
};

export default Cart;