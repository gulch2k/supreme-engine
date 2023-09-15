import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import ProductsList from "./pages/shop/ProductsList";
import ProductDetails from "./pages/shop/Product";
import LogIn from "./pages/LogIn";
import useToken from "./components/useToken";
import Cart from "./pages/cart/Cart";
import { CartProvider } from "./components/CartContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from "react";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <LogIn setToken={setToken} />;
  }

  return (
    <div className="main-container">
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<LogIn setToken={setToken} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
