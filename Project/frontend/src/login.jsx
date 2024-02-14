import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

import { Link, useNavigate } from "react-router-dom";
const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
      role: role,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', loginData);
      localStorage.setItem('token', response.data.token);
      console.log(response.data.token);
        console.log('Login successful');
       handleLogin();
        if(role=="admin"&&email=="admin@gmail.com")
        {
          navigate("/adminhome")
        }
        else
        {
          navigate("/user")
        }

    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
  <body className='loginbg'>
      <div className="login-container">
        
        <h2 className="lo">Login</h2>
        <br />
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="role">Role</label> {/* Add label for role dropdown */}
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
          <option value="" disabled>Select</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <br />
          <br />
          <button className="login-lin" type="submit">Login</button>
          <br />
          <p className="login-link">Don't have an account? <Link to="/">Register here</Link></p>
          
          </form>
      </div>
      </body>
  );
};

export default Login;