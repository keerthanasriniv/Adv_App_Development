// Contact.jsx

import React, { useState } from 'react';
import './contact.css'; // Import the provided CSS
import ContactImage from '../contact.jpg';
import Navbar from '../NavComponents/Navbar';

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    // A simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setIsValidEmail(false);
      return;
    }

    console.log('Form data submitted:', formData);
    // In a real-world application, you would typically send this data to a server.
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setIsValidEmail(true);
    setSubmitted(false);
  };

  return (
    <div className='contactbg'>
    <Navbar/>

    <div className="contact-container">
      
      <div className="image-side">
        <img src={ContactImage} alt="Contact" className='contactimg'/>
      </div>
      <div className="form-side">
        <h1 className='contacth1'>Contact Us</h1>
        {submitted ? (
          <>
            <p>Thank you for your submission!</p>
            <button onClick={handleReset} className='buttonc'>Submit Another Response</button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className='contactform'>
            <label className='contactlabel'>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label className='contactlabel'>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={!isValidEmail ? 'invalid' : ''}
              />
              {!isValidEmail && <p className="error-message">Please enter a valid email address.</p>}
            </label>
            <label className='contactlabel'>
              Message:<br></br>
              <textarea name="message" value={formData.message} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
    </div>
  );
};

export default Contact;
