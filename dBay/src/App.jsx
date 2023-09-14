import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import LogIn from "./components/LogIn";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;