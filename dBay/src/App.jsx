import { Footer, useToken, Navbar } from "./components/";
import ProductsList from "./pages/shop/ProductsList";
import ProductDetails from "./pages/shop/Product";
import LogIn from "./pages/LogIn";
import Logout from "./pages/Logout";
import Cart from "./pages/cart/Cart";
import { Route, Routes } from 'react-router-dom'
import React, { useState } from "react";

function App() {
  const [ token, setToken ] = useState(localStorage.getItem("userToken"));

  return (
    <div className="main-container">
        <Navbar setToken={setToken} />
        <Routes>
        <Route path="/" element={token ? <ProductsList /> : <LogIn token={token} setToken={setToken} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<LogIn setToken={setToken} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
        <Footer />
    </div>
  );
}

export default App;
