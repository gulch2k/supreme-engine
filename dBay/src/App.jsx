import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;