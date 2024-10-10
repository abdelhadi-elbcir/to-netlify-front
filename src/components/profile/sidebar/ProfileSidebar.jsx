import React from 'react';
import './ProfileSidebar.css';
import defaultProfilePic from '../../../assets/images/defaultProfilePic.png';

const ProfileSidebar = ({ onSelect, selectedSection }) => {
  return (
    <div className="sidebar">
      <div className="profile-summary">
        <img src={defaultProfilePic} alt="Profile" className="profile-picture" />
        <h3 className="profile-name">Youness Serrakhi</h3>
        <p className="profile-location">
          <i className="fa fa-map-marker"></i> Casablanca
        </p>
        <p className="profile-date">
          <i className="fa fa-calendar"></i> 15 Février
        </p>
      </div>
      <div className="menu">
        <ul>
          <li
            className={selectedSection === 'Profil' ? 'active' : ''}
            onClick={() => onSelect('Profil')}
          >
            Profil
          </li>
          <li
            className={selectedSection === 'Réservations' ? 'active' : ''}
            onClick={() => onSelect('Réservations')}
          >
            Réservations
          </li>
          <li
            className={selectedSection === 'Annonces' ? 'active' : ''}
            onClick={() => onSelect('Annonces')}
          >
            Annonces
          </li>
          <li
            className={selectedSection === 'Favoris' ? 'active' : ''}
            onClick={() => onSelect('Favoris')}
          >
            Favoris
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
