import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import "../styles/Login.css";

//fetching users and their info
const fetchAllUsers = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users");

    // Check if the response is ok (status code in the range 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.text();

    // Check if the response data is not empty
    if (!data) {
      throw new Error("No data returned by the API");
    }

    // Parse the data as JSON
    const users = JSON.parse(data);
    console.log(users);
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchAllUsers();

const getUserCarts = async (userId) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/carts/user/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};


// LOGGING IN FUNCTIONS
async function loginUser(credentials) {
  return await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

// Login form component
const LoginForm = ({ setToken }) => {
  // State for form inputs
  const [userCarts, setUserCarts] = useState([]);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loginSuccess, setLoginSuccess] = useState("");

  const navigate = useNavigate();

  LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired,
  };

  // Function to handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    if (token) {
      setToken(token);
      setLoginSuccess("You have successfully logged in!");
      const carts = await getUserCarts(token); // Replace `userId` with the actual user ID
      setUserCarts(carts);
      navigate("/");
    } else {
      setLoginSuccess("Login failed. Please try again.");
    }
  };
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      {loginSuccess && <p>{loginSuccess}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
