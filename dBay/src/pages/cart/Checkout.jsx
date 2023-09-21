import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Checkout.css";

const PaymentForm = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: ""
    // Add more payment fields as needed
  });

  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Simulate processing the payment
    setTimeout(() => {
      // After the payment is successfully processed, navigate to the success page
      navigate("/success");
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
    <div>
      <h2>Payment Information</h2>
      <form onSubmit={handlePayment} className="checkout-form">
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
        <button type="submit" className="checkout-button">Make Payment</button>
      </form>
    </div>
  );
}


export default PaymentForm;