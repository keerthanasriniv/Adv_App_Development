// Import necessary dependencies
import React, { useState } from 'react';
import './admin.css';
import {Link} from 'react-router-dom';
// Create a functional component for the login page
const AdminLogin = () => {
  // State to manage form input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the username and password (add your own validation logic)
    if (username === 'admin' && password === 'admin123') {
      // Perform login logic (redirect, set authentication state, etc.)
      console.log('Login successful!');
    } else {
      // Display an error message for invalid credentials
      console.log('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit} className='container1'>
      <h2 className='adminh1'>Admin Login</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <Link to='/adminhome' className="ad2">LOGIN</Link>
      </form>
    </div>
  );
};

export default AdminLogin;

