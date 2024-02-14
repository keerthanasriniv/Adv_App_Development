import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../NavComponents/Navbar';
const BASE_URL = 'http://localhost:8080';
import './booking.css';
const BookingComponent = () => {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    name: '',
    mobile: '',
    email: '',
    theme: '',
    venue: '',
    event: '',
    time: '',
    date: ''
  });
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${BASE_URL}/booking/`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (selectedBooking) {
        await axios.put(`${BASE_URL}/booking/${selectedBooking.id}`, newBooking,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        fetchBookings();
        setSelectedBooking(null);
      } else {
        await axios.post(`${BASE_URL}/booking/`, newBooking,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        fetchBookings();
      }
      setNewBooking({
        name: '',
        mobile: '',
        email: '',
        theme: '',
        venue: '',
        event: '',
        time: '',
        date: ''
      });
    } catch (error) {
      console.error('Error creating/updating booking:', error);
    }
  };

  const handleEdit = (booking) => {
    setSelectedBooking(booking);
    setNewBooking(booking);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${BASE_URL}/booking/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <body className='bookingbg1'>
    <div>
    <Navbar/>
      <h2 className='bookingh1'>Bookings</h2>
      <form onSubmit={handleSubmit} className='bookingform1'>
        <input type="text" name="name" value={newBooking.name} onChange={handleInputChange} placeholder="Name" className='bookinginput1'/>
        <input type="text" name="mobile" value={newBooking.mobile} onChange={handleInputChange} placeholder="Mobile" className='bookinginput1'/>
        <input type="text" name="email" value={newBooking.email} onChange={handleInputChange} placeholder="Email" className='bookinginput1'/>
        <input type="text" name="theme" value={newBooking.theme} onChange={handleInputChange} placeholder="Theme" className='bookinginput1'/>
        <input type="text" name="venue" value={newBooking.venue} onChange={handleInputChange} placeholder="Venue" className='bookinginput1'/>
        <input type="text" name="event" value={newBooking.event} onChange={handleInputChange} placeholder="Event" className='bookinginput1'/>
        <input type="time" name="time" value={newBooking.time} onChange={handleInputChange} placeholder="Time" className='bookinginput1'/>
        <br/>
        <input type="date" name="date" value={newBooking.date} onChange={handleInputChange} placeholder="Date" className='bookinginput1' />
        <br/>
        <button type="submit"className='bookingbutton'>{selectedBooking ? 'Update Booking' : 'Create Booking'}</button>
      </form>
      <ul className='bookingul'>
        {bookings.map((booking) => (
          <li key={booking.id} className='bookingli'>
            Name: {booking.name} - Mobile: {booking.mobile} - Email: {booking.email} - Theme: {booking.theme} - Venue: {booking.venue} - Event: {booking.event} - Time: {booking.time} - Date: {booking.date}
            <button onClick={() => handleEdit(booking)}className='bookingedit'>Edit</button>
            <button onClick={() => handleDelete(booking.id)}className='bookingdelete'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </body>
  );
};

export default BookingComponent;










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BASE_URL = 'http://localhost:8080';

// const BookingComponent = () => {
//   const [bookings, setBookings] = useState([]);
//   const [newBooking, setNewBooking] = useState({
//     name: '',
//     mobile: '',
//     email: '',
//     theme: '',
//     venue: '',
//     event: '',
//     time: '',
//     date: ''
//   });
//   const [selectedBooking, setSelectedBooking] = useState(null);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get(`${BASE_URL}/booking/`,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setBookings(response.data);
//     } catch (error) {
//       console.error('Error fetching bookings:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewBooking({ ...newBooking, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       if (selectedBooking) {
//         await axios.put(`${BASE_URL}/booking/${selectedBooking.id}`, selectedBooking,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setBookings(bookings.map((booking) => (booking.id === selectedBooking.id ? selectedBooking : booking)));
//         setSelectedBooking(null);
//       } else {
//         const response = await axios.post(`${BASE_URL}/booking/`, newBooking,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setBookings([...bookings, response.data]);
//       }
//       setNewBooking({
//         name: '',
//         mobile: '',
//         email: '',
//         theme: '',
//         venue: '',
//         event: '',
//         time: '',
//         date: ''
//       });
//     } catch (error) {
//       console.error('Error creating/updating booking:', error);
//     }
//   };

//   const handleEdit = (booking) => {
//     setSelectedBooking(booking);
//     setNewBooking(booking);
//   };

//   const handleDelete = async (id) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`${BASE_URL}/booking/${id}`,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setBookings(bookings.filter((booking) => booking.id !== id));
//     } catch (error) {
//       console.error('Error deleting booking:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Bookings</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" value={newBooking.name} onChange={handleInputChange} placeholder="Name" />
//         <input type="text" name="mobile" value={newBooking.mobile} onChange={handleInputChange} placeholder="Mobile" />
//         <input type="text" name="email" value={newBooking.email} onChange={handleInputChange} placeholder="Email" />
//         <input type="text" name="theme" value={newBooking.theme} onChange={handleInputChange} placeholder="Theme" />
//         <input type="text" name="venue" value={newBooking.venue} onChange={handleInputChange} placeholder="Venue" />
//         <input type="text" name="event" value={newBooking.event} onChange={handleInputChange} placeholder="Event" />
//         <input type="time" name="time" value={newBooking.time} onChange={handleInputChange} placeholder="Time" />
//         <br/>
//         <input type="date" name="date" value={newBooking.date} onChange={handleInputChange} placeholder="Date" />
//         <br/>
//         <button type="submit">{selectedBooking ? 'Update Booking' : 'Create Booking'}</button>
//       </form>
//       <ul>
//         {bookings.map((booking) => (
//           <li key={booking.id}>
//             {booking.name} - {booking.mobile} - {booking.email}
//             <button onClick={() => handleEdit(booking)}>Edit</button>
//             <button onClick={() => handleDelete(booking.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BookingComponent;





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

//   const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);

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

//     // For demonstration purposes, consider the form as successfully submitted
//     setIsBookingSuccessful(true);
//   };

//   return (
//     <body className='bookbg'>
//     <div>
//     <Navbar />

//       {isBookingSuccessful ? (
//         <p className="success">Booking successfully completed! Thank you.</p>
//       ) : (
//         <form onSubmit={handleSubmit} className='bform'>
//           <label className='blabel'>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />

//           <label className='blabel'>
//             Mobile Number:
//             <input
//               type="tel"
//               name="mobileNumber"
//               value={formData.mobileNumber}
//               onChange={handleChange}
//               pattern="[0-9]{10}" // Enforce 10-digit number
//               required
//             />
//           </label>
//           <br />

//           <label className='blabel'>
//             Event Name:
//             <input
//               type="text"
//               name="eventName"
//               value={formData.eventName}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />

//           <label className='blabel'>
//             Venue:
//             <input
//               type="text"
//               name="venue"
//               value={formData.venue}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />

//           <label className='blabel'>
//             Event Theme:
//             <input
//               type="text"
//               name="eventTheme"
//               value={formData.eventTheme}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />

//           <label className='blabel'>
//             Date:
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />

//           <label className='blabel'>
//             Time:
//             <input
//               type="time"
//               name="time"
//               value={formData.time}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />

//           <label className='blabel'>
//             Guest Count:
//             <input
//               type="number"
//               name="guestCount"
//               value={formData.guestCount}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />

//           <label className='blabel'>
//             Price:
//             <input
//               type="text"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />

//           <button type="submit" className='bbutton'>Submit</button>
//         </form>
//       )}
//     </div>
//     </body>
//   );
// }

// export default App;












// // import React, { useState } from 'react';
// // import './booking.css';
// // import Navbar from '../NavComponents/Navbar';

// // function App() {
// //   const [formData, setFormData] = useState({
// //     eventName: '',
// //     eventType: '',
// //     date: '',
// //     time: '',
// //     guestCount: '',
// //     name: '',
// //     mobileNumber: '',
// //     venue: '',
// //     eventTheme: '',
// //     price: '',
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Add your logic for form submission here
// //     console.log('Form submitted:', formData);
// //     // You can make an API call or perform further actions as needed
// //   };

// //   return (
// //     <div className="App">
// //       <Navbar />
// //       <h1 className='bookh1'>Party Event Booking</h1>
// //       <form onSubmit={handleSubmit} className='bform'>
// //       <label className='blabel'>
// //       Name:
// //       <input
// //         type="text"
// //         name="name"
// //         value={formData.name}
// //         onChange={handleChange}
// //         required
// //       />
// //     </label>
// //     <br />

// //     <label className='blabel'>
// //       Mobile Number:
// //       <input
// //         type="tel"
// //         name="mobileNumber"
// //         value={formData.mobileNumber}
// //         onChange={handleChange}
// //         pattern="[0-9]{10}" // Enforce 10-digit number
// //         required
// //       />
// //     </label>
// //     <br />
// //         <label className='blabel'>
// //           Event Name:
// //           <input
// //             type="text"
// //             name="eventName"
// //             value={formData.eventName}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <br />

// //         <label className='blabel'>
// //           Venue:
// //           <input
// //             type="text"
// //             name="venue"
// //             value={formData.venue}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <br />

// //         <label className='blabel'>
// //           Event Theme:
// //           <input
// //             type="text"
// //             name="eventTheme"
// //             value={formData.eventTheme}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <br />
// //         <label className='blabel'>
// //           Date:
// //           <input
// //             type="date"
// //             name="date"
// //             value={formData.date}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <br />
// //         <label className='blabel'>
// //           Time:
// //           <input
// //             type="time"
// //             name="time"
// //             value={formData.time}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <br />
// //         <label className='blabel'>
// //           Guest Count:
// //           <input
// //             type="number"
// //             name="guestCount"
// //             value={formData.guestCount}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <br />

        


// //         <label className='blabel'>
// //           Price:
// //           <input
// //             type="text"
// //             name="price"
// //             value={formData.price}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <br />

// //         <button type="submit" className='bbutton'>Submit</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default App;
