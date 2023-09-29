import { Footer, Navbar } from "./components/";
import ProductsList from "./pages/shop/ProductsList";
import ProductDetails from "./pages/shop/Product";
import LogIn from "./pages/LogIn";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/cart/Checkout";
import Success from "./pages/cart/Checkout";
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
          <Route
            exact
            path="/product/:id"
            name="singleView"
            element={<ProductDetails />}
          />
          <Route
            exact
            path="/login"
            name="login"
            element={<LogIn setToken={setToken} />}
          />
          <Route exact path="/signup" name="signup" element={<Signup />} />
          <Route exact path="/logout" name="logout" element={<Logout />} />
          <Route exact path="/cart" name="cart" element={<Cart />} />
          <Route
            exact
            path="/checkout"
            name="checkout"
            element={<Checkout />}
          />
          <Route exact path="/success" name="success" element={<Success />} />
        </Routes>
        <Footer />
      </CartProvider>
      <button onClick={() => setShowCatPaws(true)}> click me! </button>
      {showCatPaws && (
        <CatPaws onClose={() => setShowCatPaws(false)} fillScreen />
      )}
    </div>
  );
}

export default App;
