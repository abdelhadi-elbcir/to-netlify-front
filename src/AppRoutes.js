import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './pages/auth/register';
import Login from './pages/auth/Login';
import ProfileInformationPage from './pages/profile/ProfileInformationPage';
import ProfileAnnouncementPage from './pages/profile/ProfileAnnouncementPage';
import AjouterAnnoncePage from './pages//profile/AjouterAnnoncePage';
import AnnoucementDetailsPage from './pages/annoucement/AnnoucementDetailsPage';
import ProfileBookingsPage from './pages/profile/ProfileBookingsPage';
import Contact from './pages/contact/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/annoucement/:id" element={<AnnoucementDetailsPage />} />
      <Route path='/login' element={<Login/>}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/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<ProfileInformationPage/>}/>
      <Route path='/profile/announcements' element={<ProfileAnnouncementPage/>}/>
      <Route path='/profile/reservations' element={<ProfileBookingsPage/>}/>
      <Route path="/add-annonce" element={<AjouterAnnoncePage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
