import React, { useState, useEffect } from 'react';

const ThemeForm = ({ addTheme, updateTheme, selectedTheme, clearSelectedTheme }) => {
  const [formData, setFormData] = useState({
    description: '',
    image: '',
    price: '',
  });

  useEffect(() => {
    if (selectedTheme) {
      setFormData(selectedTheme);
    } else {
      clearForm();
    }
  }, [selectedTheme]);

  const clearForm = () => {
    setFormData({
      description: '',
      image: '',
      price: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedTheme) {
      updateTheme({ ...selectedTheme, ...formData });
    } else {
      addTheme({ id: Date.now(), ...formData });
    }

    clearForm();
    clearSelectedTheme();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <h2>{selectedTheme ? 'Edit Theme' : 'Add New Theme'}</h2>
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
        <input type="number" name="price" value={formData.price} onChange={handleChange} />
      </label>
      <br/>
      <br/>
      <button type="submit">{selectedTheme ? 'Update Theme' : 'Add Theme'}</button>
      {selectedTheme && (
        <button type="button" onClick={clearSelectedTheme}>
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default ThemeForm;
