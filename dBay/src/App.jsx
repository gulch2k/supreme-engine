
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import LogIn from "./components/LogIn";
import useToken from "./components/useToken";
import { Route, Routes } from "react-router-dom";



function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const { token, setToken } = useToken();

  if(!token) {
    return <LogIn setToken={setToken} />
  }
  
  return (
    <>
      <div className="main-container">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<LogIn setToken={setToken} />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;