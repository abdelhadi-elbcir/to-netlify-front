import React, { useState } from 'react';
import { FaUser, FaHistory, FaBell, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; //

const Sidebar = () => {

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

  return (
    <div className="w-1/4 p-4 bg-gray-50 shadow-lg rounded-md">
      {/* Section de l'utilisateur avec la photo de profil */}
      <div className="text-center mb-6">
        <img
          src="https://via.placeholder.com/100" // Remplacez par l'image de l'utilisateur
          alt="Profil de l'utilisateur"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#347928]"
        />
        <h3 className="text-lg font-semibold text-gray-800">Masum Rana</h3>
        <p className="text-gray-500">Gothenburg</p>
        <p className="text-gray-400 text-sm">15 Février</p>
      </div>

      {/* Menu de navigation */}
      <ul className="space-y-4">
        <li
          className={`flex items-center space-x-2 cursor-pointer p-3 rounded-md transition-colors duration-200 ${
            activeItem === 'profile'
              ? 'bg-[#347928] text-white'
              : 'hover:bg-[#C0EBA6] hover:text-[#347928] text-gray-700'
          }`}
          onClick={() => handleNavigation('profile')}
        >
          <FaUser />
          <span className="font-medium">Informations du Profil</span>
        </li>
        <li
          className={`flex items-center space-x-2 cursor-pointer p-3 rounded-md transition-colors duration-200 ${
            activeItem === 'booking'
              ? 'bg-[#347928] text-white'
              : 'hover:bg-[#C0EBA6] hover:text-[#347928] text-gray-700'
          }`}
          onClick={() => handleNavigation('reservations')}
        >
          <FaHistory />
          <span className="font-medium">Historique des Réservations</span>
        </li>
        <li
          className={`flex items-center space-x-2 cursor-pointer p-3 rounded-md transition-colors duration-200 ${
            activeItem === 'notification'
              ? 'bg-[#347928] text-white'
              : 'hover:bg-[#C0EBA6] hover:text-[#347928] text-gray-700'
          }`}
          onClick={() => handleNavigation('notification')}
        >
          <FaEnvelope />
          <span className="font-medium">notification</span>
        </li>
        <li
          className={`flex items-center space-x-2 cursor-pointer p-3 rounded-md transition-colors duration-200 ${
            activeItem === 'announcements'
              ? 'bg-[#347928] text-white'
              : 'hover:bg-[#C0EBA6] hover:text-[#347928] text-gray-700'
          }`}
          onClick={() => handleNavigation('announcements')}
        >
          <FaBell />
          <span className="font-medium">Gérer les Annonces</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
