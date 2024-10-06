import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

// Import other pages as needed
// import About from './pages/about/About';
// import Contact from './pages/contact/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes as needed */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default AppRoutes;
