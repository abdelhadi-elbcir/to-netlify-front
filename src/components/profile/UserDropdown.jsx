import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../state/userSlice';
import { useNavigate } from 'react-router-dom';

const UserDropdown = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    onClose(); // Ferme le dropdown après la déconnexion
    navigate('/login'); // Redirige l'utilisateur vers la page de login
  };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
      <div className="px-4 py-2 bg-gray-100">
        <p className="text-sm font-medium text-gray-800">{user.name}</p>
        <p className="text-xs text-gray-500">{user.email}</p>
      </div>
      <ul className="py-1">
        <li><a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil et visibilité</a></li>
        <li><a href="/profile/announcements" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mes annonces</a></li>
        <li><a href="/profile/reservations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Reservations</a></li>
      </ul>
      <div className="px-4 py-2 bg-gray-100">
        <a href="/profile/add-annonce" className="block text-sm text-blue-500 hover:underline">Ajouter un annonce</a>
      </div>
      <ul className="py-1">
        <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Aide</a></li>
        <li><a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Notifications</a></li>
        <li>
          <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Déconnexion
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
