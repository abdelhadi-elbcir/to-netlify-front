import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaMapMarkedAlt, FaBullhorn, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import Button from '../buttons/CarreButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#347928] p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold transition duration-300 hover:text-[#C0EBA6]">
          <a href="#">Tripy.ma</a>
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />} {/* Afficher l'icône FaBars ou FaTimes en fonction de l'état */}
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex items-center space-x-6">
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

      {/* Menu for smaller screens (tablets and phones) */}
      <div
        className={`md:hidden bg-[#347928] absolute top-16 left-0 w-full px-4 py-4 transition-transform duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col space-y-4 text-[#FFFBE6]">
          <li className="flex items-center justify-start">
            <FaHome className="mr-1" />
            <a href="#" className="hover:text-[#C0EBA6]">Accueil</a>
          </li>
          <li className="flex items-center justify-start">
            <FaInfoCircle className="mr-1" />
            <a href="#" className="hover:text-[#C0EBA6]">À propos</a>
          </li>
          <li className="flex items-center justify-start">
            <FaMapMarkedAlt className="mr-1" />
            <a href="#" className="hover:text-[#C0EBA6]">Destinations populaires</a>
          </li>
          <li className="flex items-center justify-start">
            <FaBullhorn className="mr-1" />
            <a href="#" className="hover:text-[#C0EBA6]">Annonces</a>
          </li>
          <li className="flex items-center justify-start">
            <FaEnvelope className="mr-1" />
            <a href="#" className="hover:text-[#C0EBA6]">Contact</a>
          </li>
        </ul>
        <div className="mt-4">
          <Button href="/login" label="Login" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
