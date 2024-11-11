import React, { useState } from 'react';
import { FaUser, FaHistory, FaBell, FaEnvelope ,FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Sidebar = ({picture}) => {
  const [activeItem, setActiveItem] = useState(''); 
  const navigate = useNavigate(); 

  const handleNavigation = (item) => {
    setActiveItem(item);
    if (item === 'announcements' || item === 'reservations') {
      navigate(`/profile/${item}`); 
    } else if (item === 'profile') {
      navigate('/profile'); 
    }
  };

const user = useSelector(state => state.user);

  return (
    <div className="w-1/4 p-4 bg-gray-50 shadow-lg rounded-md">
  
      <div className="text-center mb-6">
        <img
          src={picture} 
          alt="Profil de l'utilisateur"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary"
        />
        <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
      
      </div>

    
      <ul className="space-y-4">
        <li
          className={`flex items-center space-x-2 cursor-pointer p-3 rounded-md transition-colors duration-200 ${
            activeItem === 'profile'
              ? 'bg-primary text-white'
              : 'hover:bg-secondary hover:text-highlight text-gray-700'
          }`}
          onClick={() => handleNavigation('profile')}
        >
          <FaUser />
          <span className="font-medium">Informations du Profil</span>
        </li>
        <li
          className={`flex items-center space-x-2 cursor-pointer p-3 rounded-md transition-colors duration-200 ${
            activeItem === 'booking'
              ? 'bg-primary text-white'
              : 'hover:bg-secondary hover:text-highlight text-gray-700'
          }`}
          onClick={() => handleNavigation('reservations')}
        >
          <FaHistory />
          <span className="font-medium">Historique des Réservations</span>
        </li>
        <li
          className={`flex items-center space-x-2 cursor-pointer p-3 rounded-md transition-colors duration-200 ${
            activeItem === 'notification'
              ? 'bg-primary text-white'
              : 'hover:bg-secondary hover:text-highlight text-gray-700'
          }`}
          onClick={() => handleNavigation('notification')}
        >
          <FaEnvelope />
          <span className="font-medium">Notifications</span>
        </li>
        <li
          className={`flex items-center space-x-2 cursor-pointer p-3 rounded-md transition-colors duration-200 ${
            activeItem === 'announcements'
              ? 'bg-primary text-white'
              : 'hover:bg-secondary hover:text-highlight text-gray-700'
          }`}
          onClick={() => handleNavigation('announcements')}
        >
          <FaBell />
          <span className="font-medium">Gérer les Annonces</span>
        </li>
        <li
          className={`flex items-center space-x-2 cursor-pointer p-3 rounded-md transition-colors duration-200 ${
            activeItem === 'securite'
              ? 'bg-primary text-white'
              : 'hover:bg-secondary hover:text-highlight text-gray-700'
          }`}
          onClick={() => handleNavigation('securite')}
        >
          <FaLock  />
          <span className="font-medium">Securité</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
