import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ImPlus, ImMinus, ImCross } from "react-icons/im";
import { CartContext } from "../../components/CartContext";
import "../../styles/Cart.css";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div className="cart-container">
      <div className="cart-item">
        {/* Cart items */}
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} className="cart-item-image" />
        </Link>
        <Link to={`/product/${id}`} className="cart-item-title">
          {title}
        </Link>
        <p className="cart-item-price">${price}</p>
        <p>Quantity: {amount}</p>

        {/* Delete button */}
        <button onClick={() => removeFromCart(id)} className="delete-button">
          <ImCross />
        </button>

        {/* Add button */}
        <button onClick={() => increaseAmount(id)} className="add-button">
          <ImPlus />
        </button>

        {/* Minus button */}
        <button onClick={() => decreaseAmount(id)} className="minus-button">
          <ImMinus />
        </button>
        {/* price button */}
        {/*makes the price at 2 decimal points*/}
      </div>
      {`${parseFloat(price * amount).toFixed(2)}`}
    </div>
  );
};

export default CartItem;
