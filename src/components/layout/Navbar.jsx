// Navbar.js
import React from 'react';
import Button from '../buttons/CarreButton';

const Navbar = () => {
  return (
    <nav className="bg-[#347928] p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-white text-2xl font-bold">
          <a href="#">Tripy.ma</a>
        </div>

        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-[#FFFBE6]">
            <li><a href="#" className="hover:text-[#C0EBA6]">Accueil</a></li>
            <li><a href="#" className="hover:text-[#C0EBA6]">À propos</a></li>
            <li><a href="#" className="hover:text-[#C0EBA6]">Destinations populaires</a></li>
            <li><a href="#" className="hover:text-[#C0EBA6]">Annonces</a></li>
            <li><a href="#" className="hover:text-[#C0EBA6]">Contact</a></li>
          </ul>
          <Button href="/login" label="Login" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
