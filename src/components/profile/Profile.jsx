import React, { useState } from 'react';
import ProfileSidebar from './sidebar/ProfileSidebar';
import ProfileInformation from './information/ProfileInformation';
import ProfileReservations from './reservations/ProfileReservations';
import ProfileAnnoncements from './profileAnnoncements/ProfileAnnoncements';
import ProfileFavoris from './profileFavoris/ProfileFavoris';
import './Profile.css';

const Profile = () => {
  const [selectedSection, setSelectedSection] = useState('Profil');

  const renderContent = () => {
    switch (selectedSection) {
      case 'Profil':
        return <ProfileInformation />;
      case 'Réservations':
        return <ProfileReservations />;
      case 'Annonces':
        return <ProfileAnnoncements />;
      case 'Favoris':
        return <ProfileFavoris />;
      default:
        return <ProfileInformation />;
    }
  };

  return (
    <div className="profile-page">
      <ProfileSidebar onSelect={setSelectedSection} selectedSection={selectedSection} />
      <div className="profile-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Profile;
