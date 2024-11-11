import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaHome, FaInfoCircle, FaMapMarkedAlt, FaBullhorn, FaEnvelope, FaBars, FaTimes, FaUser, FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import Button from '../buttons/CarreButton';
import UserDropdown from '../../components/profile/UserDropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useSelector(state => state.user);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="p-4 fixed top-0 left-0 w-full z-50 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold transition duration-300 hover:text-primary">
          <Link to="/">Tripy.ma</Link> 
        </div>

        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`md:flex items-center space-x-6 ${isOpen ? 'flex' : 'hidden'} absolute top-16 left-0 w-full bg-[rgba(0,0,0,0.5)] md:static md:bg-transparent md:w-auto md:top-auto md:translate-x-0 transition-all duration-300`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 text-[#FFFBE6] md:space-y-0 space-y-2 p-4 md:p-0">
            <li className="flex items-center">
              <FaHome className="mr-1" />
              <Link to="/" className="hover:text-primary">Accueil</Link> 
            </li>
            <li className="flex items-center">
              <FaInfoCircle className="mr-1" />
              <Link to="/" className="hover:text-primary">À propos</Link>
            </li>
            <li className="flex items-center">
              <FaMapMarkedAlt className="mr-1" />
              <Link to="/" className="hover:text-primary">Destinations populaires</Link> 
            </li>
            <li className="flex items-center">
              <FaBullhorn className="mr-1" />
              <Link to="/" className="hover:text-primary">Annonces</Link>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-1" />
              <Link to="/" className="hover:text-primary">Contact</Link> 
            </li>
          </ul>
          {user.accessToken ? (
            <div className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="flex items-center text-primary hover:text-white">
                <FaUser className="mr-2" />
                <span>{user.name}</span>
                <FaCaretDown className="ml-1" />
              </button>
              {dropdownOpen && <UserDropdown user={user} onClose={() => setDropdownOpen(false)} />}
            </div>
          ) : (
            <Button href="/login" label="Login" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
