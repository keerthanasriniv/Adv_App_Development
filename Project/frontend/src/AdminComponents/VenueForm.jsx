import React, { useState, useEffect } from 'react';

const VenueForm = ({ addVenue, updateVenue, selectedVenue, clearSelectedVenue }) => {
  const [formData, setFormData] = useState({
    description: '',
    image: '',
    rent: '',
  });

  useEffect(() => {
    if (selectedVenue) {
      setFormData(selectedVenue);
    } else {
      clearForm();
    }
  }, [selectedVenue]);

  const clearForm = () => {
    setFormData({
      description: '',
      image: '',
      rent: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedVenue) {
      updateVenue({ ...selectedVenue, ...formData });
    } else {
      addVenue({ id: Date.now(), ...formData });
    }

    clearForm();
    clearSelectedVenue();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="venue-form" onSubmit={handleSubmit}>
      <h2>{selectedVenue ? 'Edit Venue' : 'Add New Venue'}</h2>
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
        Rent:
        <br/>
        <input type="number" name="rent" value={formData.rent} onChange={handleChange} />
      </label>
      <br/>
      <br/>
      <button type="submit">{selectedVenue ? 'Update Venue' : 'Add Venue'}</button>
      {selectedVenue && (
        <button type="button" onClick={clearSelectedVenue}>
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default VenueForm;
