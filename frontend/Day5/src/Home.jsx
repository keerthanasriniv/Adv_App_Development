import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setError(null);
    setSuccessMessage(null);
  };

  const simulateSignUp = (username, email, password) => {
    // Simulate storing user in local state
    const newUser = { username, email, password };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setSuccessMessage('Successfully Registered!');
    setAuthenticated(true); // Set authenticated to true after successful signup
  };

  const simulateLogin = (email, password) => {
    // Simulate login by checking if the user exists in local state
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      setAuthenticated(true);
      setSuccessMessage('Successfully Logged In!');
    } else {
      setError('Invalid email or password.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (isSignUp) {
      // Simulate sign-up
      // You can customize this logic based on your needs
      if (username && email && password.length >= 8 && email.includes('@')) {
        simulateSignUp(username, email, password);
      } else {
        setError('Please fill in all the required fields and ensure the password is at least 8 characters long, and email contains "@".');
      }
    } else {
      // Simulate login
      // You can customize this logic based on your needs
      if (email && password) {
        simulateLogin(email, password);
      } else {
        setError('Please fill in all the required fields.');
      }
    }
  };

  return (
    <div className='homebg'>
      <form onSubmit={handleSubmit} className='container'>
        <h2>PARTY WITH US</h2>
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        {isSignUp && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (at least 8 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='ad1'>
        <Link to={!isSignUp ? '/user' : ''} type="submit" className='ad1'>{isSignUp ? 'Sign Up' : 'Login'}</Link>
        </button>
        <p onClick={toggleForm}>
          {isSignUp
            ? 'Already have an account? Login'
            : "Don't have an account? Sign Up"}
        </p>
        <p className='ph1'>If you are an admin</p>
        <Link to='/admin' className="ad">
          Admin
        </Link>
      </form>

      <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {authenticated && successMessage && (
          <p
            className='ph'
            style={{ color: 'green', position: 'fixed', bottom: '10px' }}
          >
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const [isSignUp, setIsSignUp] = useState(true);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [authenticated, setAuthenticated] = useState(false);
//   const [users, setUsers] = useState([]);

//   const toggleForm = () => {
//     setIsSignUp(!isSignUp);
//     setError(null);
//     setSuccessMessage(null);
//   };

//   const simulateSignUp = (username, email, password) => {
//     // Simulate storing user in local state
//     const newUser = { username, email, password };
//     setUsers((prevUsers) => [...prevUsers, newUser]);
//     setSuccessMessage('Successfully Registered!');
//     setAuthenticated(true); // Set authenticated to true after successful signup
//   };

//   const simulateLogin = (email, password) => {
//     // Simulate login by checking if the user exists in local state
//     const user = users.find((u) => u.email === email && u.password === password);

//     if (user) {
//       setAuthenticated(true);
//       setSuccessMessage('Successfully Logged In!');
//     } else {
//       setError('Invalid email or password.');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(null);

//     if (isSignUp) {
//       // Simulate sign-up
//       // You can customize this logic based on your needs
//       if (username && email && password.length >= 8 && email.includes('@')) {
//         simulateSignUp(username, email, password);
//       } else {
//         setError('Please fill in all the required fields and ensure the password is at least 8 characters long, and email contains "@".');
//       }
//     } else {
//       // Simulate login
//       // You can customize this logic based on your needs
//       if (email && password) {
//         simulateLogin(email, password);
//       } else {
//         setError('Please fill in all the required fields.');
//       }
//     }
//   };

//   return (
//     <div className='homebg'>
//       <h2>PARTY WITH US</h2>
//       <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
//       <form onSubmit={handleSubmit}>
//         {isSignUp && (
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         )}
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password (at least 8 characters)"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Link to={!isSignUp ? '/user' : ''} type="submit" className='ad1'>{isSignUp ? 'Sign Up' : 'Login'}</Link>
//       </form>

//       <p onClick={toggleForm}>
//         {isSignUp
//           ? 'Already have an account? Login'
//           : "Don't have an account? Sign Up"}
//       </p>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {authenticated && successMessage && (
//         <p className='ph' style={{ color: 'green', position: 'fixed', bottom: '10px' }}>{successMessage}</p>
//       )}
//       <p className='ph1'>If you are an admin</p>
//       <Link to='/admin' className="ad">Admin</Link>
//     </div>
//   );
// };

// export default Home;







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// const Home = () => {
//   const [isSignUp, setIsSignUp] = useState(true);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [authenticated, setAuthenticated] = useState(false);
//   const [users, setUsers] = useState([]);

//   const toggleForm = () => {
//     setIsSignUp(!isSignUp);
//     setError(null);
//     setSuccessMessage(null);
//   };

//   const simulateSignUp = (username, email, password) => {
//     // Simulate storing user in local state
//     const newUser = { username, email, password };
//     setUsers([...users, newUser]);
//     setAuthenticated(true);
//     setSuccessMessage('Successfully Registered!');
//   };

//   const simulateLogin = (email, password) => {
//     // Simulate login by checking if the user exists in local state
//     const user = users.find((u) => u.email === email && u.password === password);

//     if (user) {
//       setAuthenticated(true);
//       setSuccessMessage('Successfully Logged In!');
//     } else {
//       setError('Invalid email or password.');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(null);

//     if (isSignUp) {
//       // Simulate sign-up
//       // You can customize this logic based on your needs
//       if (username && email && password.length >= 8 && email.includes('@')) {
//         simulateSignUp(username, email, password);
//       } else {
//         setError('Please fill in all the required fields and ensure the password is at least 8 characters long, and email contains "@".');
//       }
//     } else {
//       // Simulate login
//       // You can customize this logic based on your needs
//       if (email && password) {
//         simulateLogin(email, password);
//       } else {
//         setError('Please fill in all the required fields.');
//       }
//     }
//   };

//   return (
//     // <div className='homebg'>
//     <div>
//       <h2>PARTY WITH US</h2>
//       <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
//       <form onSubmit={handleSubmit}>
//         {isSignUp && (
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         )}
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password (at least 8 characters)"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Link to={!isSignUp ? '/user' : ''} type="submit" className='ad1'>{isSignUp ? 'Sign Up' : 'Login'}</Link>
//       </form>

//       <p onClick={toggleForm}>
//         {isSignUp
//           ? 'Already have an account? Login'
//           : "Don't have an account? Sign Up"}
//       </p>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {authenticated && successMessage && (
//         <p className='ph' style={{ color: 'green', position: 'fixed', bottom: '10px' }}>{successMessage}</p>
//       )}
//       <p className='ph1'>If you are an admin</p>
//       <Link to='/admin' className="ad">Admin</Link>
//     </div>
//     // </div>
//   );
// };

// export default Home;
