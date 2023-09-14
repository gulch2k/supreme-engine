import { useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Perform login logic here
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic here
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;