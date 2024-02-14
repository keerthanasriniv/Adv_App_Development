import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ThemeForm from './ThemeForm'; // Assuming EventForm was renamed to ThemeForm
import AdminNav from '../NavComponents/AdminNav';
import './ThemeList.css'; // Imported the ThemeList.css file

const BASE_URL = 'http://localhost:8080'; // Define the base URL

const ThemeList = () => {
  const [themes, setThemes] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState(null);

  useEffect(() => {
    fetchThemes();
  }, []);

  const fetchThemes = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${BASE_URL}/theme/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setThemes(response.data);
    } catch (error) {
      console.error('Error fetching themes:', error);
    }
  };

  const addTheme = async (newTheme) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${BASE_URL}/theme/`, newTheme, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchThemes();
    } catch (error) {
      console.error('Error adding theme:', error);
    }
  };

  const updateTheme = async (updatedTheme) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`${BASE_URL}/theme/${updatedTheme.id}`, updatedTheme, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchThemes();
      setSelectedTheme(null);
    } catch (error) {
      console.error('Error updating theme:', error);
    }
  };

  const deleteTheme = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${BASE_URL}/theme/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchThemes();
    } catch (error) {
      console.error('Error deleting theme:', error);
    }
  };

  const handleEditClick = (id) => {
    const themeToEdit = themes.find((theme) => theme.id === id);
    setSelectedTheme(themeToEdit);
  };

  return (
    <body className='theme-list-bg'>
    <div>
      <AdminNav />
      <div className="theme-list-container"> {/* Changed event-list-container to theme-list-container */}
        <h1 className="theme-list-h1">Theme List</h1> {/* Changed Event List to Theme List */}
        <ThemeForm
          addTheme={addTheme}
          updateTheme={updateTheme}
          selectedTheme={selectedTheme}
          clearSelectedTheme={() => setSelectedTheme(null)}
        />
        <div className="theme-grid"> {/* Changed event-grid to theme-grid */}
          {themes.map((theme) => (
            <div key={theme.id} className="theme-item"> {/* Changed event-item to theme-item */}
              <img src={theme.image} alt={`Theme ${theme.id}`} /> {/* Changed event to theme */}
              <p className="theme-description">{theme.description}</p> {/* Changed event to theme */}
              <strong>Price: ${theme.price}</strong> {/* Changed event to theme */}
              <div className="theme-buttons"> {/* Changed event-buttons to theme-buttons */}
                <button onClick={() => handleEditClick(theme.id)}>Edit</button>
                <button onClick={() => deleteTheme(theme.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </body>
  );
};

export default ThemeList;





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
//       <h1 className='eventlisth1'>Theme List</h1>
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
