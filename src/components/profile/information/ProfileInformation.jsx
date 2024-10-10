import React, { useState } from 'react';
import './ProfileInformation.css';

const ProfileInformation = () => {
  const [formData, setFormData] = useState({
    name: 'Masum Rana',
    dob: '15/03/1986',
    phone: '+46-7644 394 68',
    location: 'Gothenburg',
    travelPreferences: 'Nature, Adventure',
    recentTrip: 'Mount Everest Base Camp',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="profile-information">
      <h2>Informations Personnelles</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Date de Naissance:</label>
          <input type="text" name="dob" value={formData.dob} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Téléphone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Localisation:</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Préférences de Voyage:</label>
          <input
            type="text"
            name="travelPreferences"
            value={formData.travelPreferences}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Dernier Voyage:</label>
          <input
            type="text"
            name="recentTrip"
            value={formData.recentTrip}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="save-button">
          Sauvegarder
        </button>
      </form>
    </div>
  );
};

export default ProfileInformation;
