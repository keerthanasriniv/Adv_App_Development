import React, { useState } from 'react';
import './payment.css';
import NavBar from "../NavComponents/Navbar";

const PaymentPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Implement your payment processing logic here
    console.log('Payment Details Submitted:', paymentDetails);
  };

  return (
    <body className='paybg'>
    <div>
    <NavBar/>
   
    <div className="payment-container">
 
      <h1>Event Payment</h1>
      <form className="payment-form" onSubmit={handlePaymentSubmit}>
        <div className="payment-input-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="payment-input-group">
          <label htmlFor="cardHolderName">Card Holder Name</label>
          <input
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            value={paymentDetails.cardHolderName}
            onChange={handleInputChange}
          />
        </div>

        <div className="payment-input-group">
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            placeholder="MM/YYYY"
            value={paymentDetails.expirationDate}
            onChange={handleInputChange}
          />
        </div>

        <div className="payment-input-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="pay-button">
          Pay Now
        </button>
      </form>
    </div>
    </div>
    </body>
  );
};

export default PaymentPage;