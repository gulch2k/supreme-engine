import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import '../styles/Login.css';

const fetchAllUsers = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/users');

        // Check if the response is ok (status code in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.text();

        // Check if the response data is not empty
        if (!data) {
            throw new Error('No data returned by the API');
        }

        // Parse the data as JSON
        const users = JSON.parse(data);
        console.log(users);
    } catch (error) {
        console.error('Error:', error);
    }
};

fetchAllUsers();


// Login form component
const LoginForm = () => {
    // State for form inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

 const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const json = await response.json();

        if (json.token) {
            console.log('Login successful');
            // Store the token in local storage for later use
            localStorage.setItem('userToken', json.token);

            // Redirect to the homepage after successful login
            navigate("/");
        } else {
            console.log('Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Login" />
        </form>
        
    );
};

export default LoginForm;