import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Admin from './AdminComponents/admin';
import Login from './login'
import AdminHome from './AdminComponents/adminhome';
import Home from './Home';
import User from './UserComponents/user';
import Feedback from './UserComponents/Feedback';
import Contact from './UserComponents/Contact';
import Events from './UserComponents/Event';
import Themes from './UserComponents/Theme';
import Booking from './UserComponents/Booking';
import Venue from './UserComponents/Venue';
import Eventcrud from './AdminComponents/EventList';
import EventForm from './AdminComponents/EventForm';
import Venuecrud from './AdminComponents/Venuecrud';
import Themecrud from './AdminComponents/Themecrud';
import Payment from './AdminComponents/PaymentList';
const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}
const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const handleLogin = () => {
    setIsAuthorized(true);
  };
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
  {isAuthorized && (
        <>
   
      <Route path="/user" element={<User/>}/>
      <Route path='/adminhome' element={<AdminHome/>} />
      <Route path='/feedback' element={<Feedback resources={resources} />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/themes' element={<Themes/>} />
      <Route path='/booking' element={<Booking/>} />
      <Route path='/venue' element={<Venue/>} />
      <Route path='/eventcrud' element={<Eventcrud/>} />
      <Route path='/venuecrud' element={<Venuecrud/>} />
      <Route path='/Themecrud' element={<Themecrud/>} />
      <Route path='/payment' element={<Payment/>} />
      
      </>
  )}       
      </Routes>
      </Router>
      );
    };
    
    export default App;


























// export default App
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
  //   const [count, setCount] = useState(0)
  
  //   return (
    //     <>
    //       <div>
    //         <a href="https://vitejs.dev" target="_blank">
    //           <img src={viteLogo} className="logo" alt="Vite logo" />
    //         </a>
    //         <a href="https://react.dev" target="_blank">
    //           <img src={reactLogo} className="logo react" alt="React logo" />
    //         </a>
    //       </div>
    //       <h1>Vite + React</h1>
    //       <div className="card">
    //         <button onClick={() => setCount((count) => count + 1)}>
    //           count is {count}
    //         </button>
    //         <p>
    //           Edit <code>src/App.jsx</code> and save to test HMR
    //         </p>
    //       </div>
    //       <p className="read-the-docs">
    //         Click on the Vite and React logos to learn more
    //       </p>
    //     </>
    //   )
    // }
    
    // export default App
    