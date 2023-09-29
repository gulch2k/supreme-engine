import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "../../styles/Checkout.css";

const PaymentForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
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


  const handlePayment = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate processing the payment
    setTimeout(() => {
      setIsLoading(false);
      setIsPopupOpen(true);
    }, 2000); // Simulating a 2-second processing time
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    navigate("/success");
  };

  return (
    <div className="grid-container">
      <h2>Payment Information</h2>
      <form className="checkout-form" onSubmit={handlePayment}>
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
        <button type="submit" className="checkout-button" disabled={isLoading}>
        {isLoading ? "Processing..." : "Make Payment"}
      </button>
      <Popup open={isPopupOpen} onClose={closePopup} className="custom-popup">
  <div className="custom-popup-content">
    The order was successfully placed and will arrive in 1 day!
  </div>
</Popup>
      </form>
    </div>
  );
};

export default PaymentForm;
