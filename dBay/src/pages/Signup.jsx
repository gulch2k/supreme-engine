import React, { useState } from 'react';
import "../styles/Signup.css"

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Other form fields...

  const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        // Other form fields...
      }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('userToken', data.token);
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="signup-input"
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="signup-input"
        placeholder="Password"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="signup-input"
        placeholder="Confirm Password"
      />
      <button type="submit" className="signup-button">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;