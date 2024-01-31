// EventList.jsx
import React, { useState, useEffect } from 'react';
import EventForm from './EventForm';
import './EventList.css';
import AdminNav from '../NavComponents/AdminNav';
// import image1 from '../../src/bd.jpg'; // Adjust the paths for your images
// import image2 from '../../src/wed.jpg';
// import image3 from '../../src/farewell.jpg';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Your code to fetch events from a backend or local storage can go here
  }, []);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const updateEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
    setSelectedEvent(null);
  };

  const deleteEvent = (id) => {
    const filteredEvents = events.filter((event) => event.id !== id);
    setEvents(filteredEvents);
  };

  const handleEditClick = (id) => {
    const eventToEdit = events.find((event) => event.id === id);
    setSelectedEvent(eventToEdit);
  };

  return (
    <div>
    <AdminNav/>
    <div className="event-list-container">
      <h1 className='eventlisth1'>Theme List</h1>
      <EventForm
        addEvent={addEvent}
        updateEvent={updateEvent}
        selectedEvent={selectedEvent}
        clearSelectedEvent={() => setSelectedEvent(null)}
      />
      <div className="event-grid">
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <img src={event.image} alt={`Event ${event.id}`} />
            <p className="event-description">{event.description}</p>
            <strong>Price: ${event.price}</strong>
            <div className="event-buttons">
              <button onClick={() => handleEditClick(event.id)}>Edit</button>
              <button onClick={() => deleteEvent(event.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EventList;
