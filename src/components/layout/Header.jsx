import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Tripy.ma</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Popular Destinations</a>
          <a href="#" className="hover:underline">Our Packages</a>
          <a href="#" className="hover:underline">Help</a>
        </div>
        <button className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded">login</button>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 p-4">
          <a href="#" className="block py-2">Home</a>
          <a href="#" className="block py-2">About Us</a>
          <a href="#" className="block py-2">Popular Destinations</a>
          <a href="#" className="block py-2">Our Packages</a>
          <a href="#" className="block py-2">Help</a>
          <button className="mt-4 w-full bg-yellow-400 text-black px-4 py-2 rounded">login</button>
        </div>
      )}
    </header>
  );
};

export default Header;
