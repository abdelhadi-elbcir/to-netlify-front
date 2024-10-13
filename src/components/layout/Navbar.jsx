import React from 'react';
import { FaHome, FaInfoCircle, FaMapMarkedAlt, FaBullhorn, FaEnvelope } from 'react-icons/fa';
import Button from '../buttons/CarreButton';

const Navbar = () => {
  return (
    <nav className="bg-[#347928] p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold transition duration-300 hover:text-[#C0EBA6]">
          <a href="#">Tripy.ma</a>
        </div>

        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-[#FFFBE6]">
            <li className="flex items-center">
              <FaHome className="mr-1" />
              <a href="#" className="hover:text-[#C0EBA6]">Accueil</a>
            </li>
            <li className="flex items-center">
              <FaInfoCircle className="mr-1" />
              <a href="#" className="hover:text-[#C0EBA6]">À propos</a>
            </li>
            <li className="flex items-center">
              <FaMapMarkedAlt className="mr-1" />
              <a href="#" className="hover:text-[#C0EBA6]">Destinations populaires</a>
            </li>
            <li className="flex items-center">
              <FaBullhorn className="mr-1" />
              <a href="#" className="hover:text-[#C0EBA6]">Annonces</a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-1" />
              <a href="#" className="hover:text-[#C0EBA6]">Contact</a>
            </li>
          </ul>
          <Button href="/login" label="Login" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
