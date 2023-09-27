import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Checkout.css";

const PaymentForm = () => {
  const navigate = useNavigate();
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    email: "",
    city:"",
    address: "",
    zipCode: "",
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
    // Add more payment fields as needed
  });

  const handleCheckout = () => {
    navigate("/success");
  };

  const handlePayment = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Simulate processing the payment
    setTimeout(() => {
    }, 2000); // Simulating a 2-second processing time
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="grid-container">
      <h2>Payment Information</h2>
      <form onSubmit={handlePayment} className="checkout-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={paymentInfo.name}
            onChange={handleChange}
            className="checkout-input"
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={paymentInfo.email}
            onChange={handleChange}
            className="checkout-input"
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={paymentInfo.city}
            onChange={handleChange}
            className="checkout-input"
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={paymentInfo.address}
            onChange={handleChange}
            className="checkout-input"
          />
        </label>
        <label>
          Zip Code:
          <input
            type="text"
            name="zipCode"
            value={paymentInfo.zipCode}
            onChange={handleChange}
            className="checkout-input"
          />
        </label>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
            className="checkout-input"
          />
        </label>
        <label>
          Card Holder:
          <input
            type="text"
            name="cardHolder"
            value={paymentInfo.cardHolder}
            onChange={handleChange}
            className="checkout-input"
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            name="expiryDate"
            value={paymentInfo.expiryDate}
            onChange={handleChange}
            className="checkout-input"
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleChange}
            className="checkout-input"
          />
        </label>
        {/* Add more payment fields as needed */}
        <button
          type="submit"
          className="checkout-button"
          onClick={handleCheckout}
        >
          Make Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
