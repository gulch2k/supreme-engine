import { Footer, Navbar } from "./components/";
import ProductsList from "./pages/shop/ProductsList";
import ProductDetails from "./pages/shop/Product";
import LogIn from "./pages/LogIn";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/cart/Checkout";
import SuccessPage from "./pages/cart/Checkout";
import { CartProvider } from "./components/";
import { Route, Routes } from "react-router-dom";
import { CatPaws } from "react-cat-paws";
import React, { useState } from "react";

function App() {
  const [showCatPaws, setShowCatPaws] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("userToken"));

  return (
    <div className="main-container">
      <CartProvider>
        <Navbar setToken={setToken} />
        <Routes>
          <Route
            path="/"
            element={
              token ? (
                <ProductsList />
              ) : (
                <LogIn token={token} setToken={setToken} />
              )
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<LogIn setToken={setToken} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
        <Footer />
      </CartProvider>
      <button onClick={() => setShowCatPaws(true)}> click me! </button>
      {showCatPaws && 
        <CatPaws 
          onClose={() => setShowCatPaws(false)}
          fillScreen
        />}
    </div>
  );
}

export default App;
