import React, { useState } from 'react';
import './booking.css';
import Navbar from '../NavComponents/Navbar';

function App() {
  const [formData, setFormData] = useState({
    eventName: '',
    eventType: '',
    date: '',
    time: '',
    guestCount: '',
    name: '',
    mobileNumber: '',
    venue: '',
    eventTheme: '',
    price: '',
  });

  const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', formData);
    // You can make an API call or perform further actions as needed

    // For demonstration purposes, consider the form as successfully submitted
    setIsBookingSuccessful(true);
  };

  return (
    <div className="bookbg">
    <Navbar />

      {isBookingSuccessful ? (
        <p className="success">Booking successfully completed! Thank you.</p>
      ) : (
        <form onSubmit={handleSubmit} className='bform'>
          <label className='blabel'>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label className='blabel'>
            Mobile Number:
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              pattern="[0-9]{10}" // Enforce 10-digit number
              required
            />
          </label>
          <br />

          <label className='blabel'>
            Event Name:
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label className='blabel'>
            Venue:
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label className='blabel'>
            Event Theme:
            <input
              type="text"
              name="eventTheme"
              value={formData.eventTheme}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label className='blabel'>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label className='blabel'>
            Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label className='blabel'>
            Guest Count:
            <input
              type="number"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label className='blabel'>
            Price:
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <button type="submit" className='bbutton'>Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;












// import React, { useState } from 'react';
// import './booking.css';
// import Navbar from '../NavComponents/Navbar';

// function App() {
//   const [formData, setFormData] = useState({
//     eventName: '',
//     eventType: '',
//     date: '',
//     time: '',
//     guestCount: '',
//     name: '',
//     mobileNumber: '',
//     venue: '',
//     eventTheme: '',
//     price: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic for form submission here
//     console.log('Form submitted:', formData);
//     // You can make an API call or perform further actions as needed
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       <h1 className='bookh1'>Party Event Booking</h1>
//       <form onSubmit={handleSubmit} className='bform'>
//       <label className='blabel'>
//       Name:
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//     </label>
//     <br />

//     <label className='blabel'>
//       Mobile Number:
//       <input
//         type="tel"
//         name="mobileNumber"
//         value={formData.mobileNumber}
//         onChange={handleChange}
//         pattern="[0-9]{10}" // Enforce 10-digit number
//         required
//       />
//     </label>
//     <br />
//         <label className='blabel'>
//           Event Name:
//           <input
//             type="text"
//             name="eventName"
//             value={formData.eventName}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />

//         <label className='blabel'>
//           Venue:
//           <input
//             type="text"
//             name="venue"
//             value={formData.venue}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />

//         <label className='blabel'>
//           Event Theme:
//           <input
//             type="text"
//             name="eventTheme"
//             value={formData.eventTheme}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label className='blabel'>
//           Date:
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label className='blabel'>
//           Time:
//           <input
//             type="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label className='blabel'>
//           Guest Count:
//           <input
//             type="number"
//             name="guestCount"
//             value={formData.guestCount}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />

        


//         <label className='blabel'>
//           Price:
//           <input
//             type="text"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />

//         <button type="submit" className='bbutton'>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
