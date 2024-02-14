// EventForm.jsx
import React, { useState, useEffect } from 'react';
const EventForm = ({ addEvent, updateEvent, selectedEvent, clearSelectedEvent }) => {
  const [formData, setFormData] = useState({
    description: '',
    image: '',
    price: '',
  });

  useEffect(() => {
    if (selectedEvent) {
      setFormData(selectedEvent);
    } else {
      clearForm();
    }
  }, [selectedEvent]);

  const clearForm = () => {
    setFormData({
      description: '',
      image: '',
      price: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedEvent) {
      updateEvent({ ...selectedEvent, ...formData });
    } else {
      addEvent({ id: Date.now(), ...formData });
    }

    clearForm();
    clearSelectedEvent();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>{selectedEvent ? 'Edit Event' : 'Add New Event'}</h2>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
      </label>
      <label>

        Price:
        <br/>
        <input type="number" name="price" value={formData.price} onChange={handleChange} className='eventp1'/>
      </label>
      <br/>
      <br/>
      <button type="submit">{selectedEvent ? 'Update Event' : 'Add Event'}</button>
      {selectedEvent && (
        <button type="button" onClick={clearSelectedEvent}>
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default EventForm;








// import React, { useState, useEffect } from 'react';

// const EventForm = ({ addEvent, updateEvent, selectedEvent, clearSelectedEvent }) => {
//   const [formData, setFormData] = useState({
//     description: '',
//     image: '',
//     price: '',
//   });

//   useEffect(() => {
//     if (selectedEvent) {
//       setFormData(selectedEvent);
//     } else {
//       clearForm();
//     }
//   }, [selectedEvent]);

//   const clearForm = () => {
//     setFormData({
//       description: '',
//       image: '',
//       price: '',
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (selectedEvent) {
//       updateEvent({ ...selectedEvent, ...formData });
//     } else {
//       addEvent({ id: Date.now(), ...formData });
//     }

//     clearForm();
//     clearSelectedEvent();
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <form className="event-form" onSubmit={handleSubmit}>
//       <h2>{selectedEvent ? 'Edit Event' : 'Add New Event'}</h2>
//       <label>
//         Description:
//         <input
//           type="text"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Image URL:
//         <input type="text" name="image" value={formData.image} onChange={handleChange} />
//       </label>
//       <label>
//         Price:
//         <input type="number" name="price" value={formData.price} onChange={handleChange} />
//       </label>
//       <button type="submit">{selectedEvent ? 'Update Event' : 'Add Event'}</button>
//       {selectedEvent && (
//         <button type="button" onClick={clearSelectedEvent}>
//           Cancel Edit
//         </button>
//       )}
//     </form>
//   );
// };

// export default EventForm;









