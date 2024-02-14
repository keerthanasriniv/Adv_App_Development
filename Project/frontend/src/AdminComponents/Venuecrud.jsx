import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventForm from './VenueForm';
import AdminNav from '../NavComponents/AdminNav';
import './Venuelist.css';
const BASE_URL = 'http://localhost:8080'; // Define the base URL

const VenueList = () => { // Changed EventList to VenueList
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${BASE_URL}/venue/`, { // Modified URL to /venue/
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setVenues(response.data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  const addVenue = async (newVenue) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${BASE_URL}/venue/`, newVenue, { // Modified URL to /venue/
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchVenues();
    } catch (error) {
      console.error('Error adding venue:', error);
    }
  };

  const updateVenue = async (updatedVenue) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`${BASE_URL}/venue/${updatedVenue.id}`, updatedVenue, { // Modified URL to /venue/
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchVenues();
      setSelectedVenue(null);
    } catch (error) {
      console.error('Error updating venue:', error);
    }
  };

  const deleteVenue = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${BASE_URL}/venue/${id}`, { // Modified URL to /venue/
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchVenues();
    } catch (error) {
      console.error('Error deleting venue:', error);
    }
  };

  const handleEditClick = (id) => {
    const venueToEdit = venues.find((venue) => venue.id === id);
    setSelectedVenue(venueToEdit);
  };

  return (
    <body className='venuelistbg'>
    <div>
      <AdminNav />
      <div className="venue-list-container">
        <h1 className="venuelisth1">Venue List</h1>
        <EventForm
          addVenue={addVenue}
          updateVenue={updateVenue}
          selectedVenue={selectedVenue}
          clearSelectedVenue={() => setSelectedVenue(null)}
        />
        <div className="venue-grid">
          {venues.map((venue) => (
            <div key={venue.id} className="venue-item">
              <img src={venue.image} alt={`Venue ${venue.id}`} />
              <p className="venue-description">{venue.description}</p>
              <strong>Rent: ${venue.rent}</strong>
              <div className="venue-buttons">
                <button onClick={() => handleEditClick(venue.id)}>Edit</button>
                <button onClick={() => deleteVenue(venue.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </body>
  );
};

export default VenueList; 






// // EventList.jsx
// import React, { useState, useEffect } from 'react';
// import EventForm from './EventForm';
// import './EventList.css';
// import AdminNav from '../NavComponents/AdminNav';
// // import image1 from '../../src/bd.jpg'; // Adjust the paths for your images
// // import image2 from '../../src/wed.jpg';
// // import image3 from '../../src/farewell.jpg';

// const EventList = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     // Your code to fetch events from a backend or local storage can go here
//   }, []);

//   const addEvent = (newEvent) => {
//     setEvents([...events, newEvent]);
//   };

//   const updateEvent = (updatedEvent) => {
//     const updatedEvents = events.map((event) =>
//       event.id === updatedEvent.id ? updatedEvent : event
//     );
//     setEvents(updatedEvents);
//     setSelectedEvent(null);
//   };

//   const deleteEvent = (id) => {
//     const filteredEvents = events.filter((event) => event.id !== id);
//     setEvents(filteredEvents);
//   };

//   const handleEditClick = (id) => {
//     const eventToEdit = events.find((event) => event.id === id);
//     setSelectedEvent(eventToEdit);
//   };

//   return (
//     <body className='eventlistbg'>
//     <div>
//     <AdminNav/>
//     <div className="event-list-container">
//       <h1 className='eventlisth1'>Venue List</h1>
//       <EventForm
//         addEvent={addEvent}
//         updateEvent={updateEvent}
//         selectedEvent={selectedEvent}
//         clearSelectedEvent={() => setSelectedEvent(null)}
//       />
//       <div className="event-grid">
//         {events.map((event) => (
//           <div key={event.id} className="event-item">
//             <img src={event.image} alt={`Event ${event.id}`} />
//             <p className="event-description">{event.description}</p>
//             <strong>Price: ${event.price}</strong>
//             <div className="event-buttons">
//               <button onClick={() => handleEditClick(event.id)}>Edit</button>
//               <button onClick={() => deleteEvent(event.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//     </body>
//   );
// };

// export default EventList;
