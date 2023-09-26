import React, { useState } from 'react';

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
        email,
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
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;