import { Footer, useToken, Navbar } from "./components/";
import ProductsList from "./pages/shop/ProductsList";
import ProductDetails from "./pages/shop/Product";
import LogIn from "./pages/LogIn";
import Cart from "./pages/cart/Cart";
import { Route, Routes } from 'react-router-dom'
import React, { useState } from "react";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <LogIn setToken={setToken} />;
  }

  return (
    <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<LogIn setToken={setToken} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
