import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import AnnoucementDetails from './components/annoucement/details/AnnoucementDetails';

// Import other pages as needed
// import About from './pages/about/About';
// import Contact from './pages/contact/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<AnnoucementDetails />} />
      {/* Add more routes as needed */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default AppRoutes;
