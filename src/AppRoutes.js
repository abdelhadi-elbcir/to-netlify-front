import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import AnnoucementDetails from './components/annoucement/AnnoucementDetails';
import Register from './pages/register';
import Login from './pages/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<AnnoucementDetails />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  );
};

export default AppRoutes;
