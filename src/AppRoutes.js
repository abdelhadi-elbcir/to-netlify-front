import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './pages/register';
import Login from './pages/Login';
import ProfileInformationPage from './pages/ProfileInformationPage';
import ProfileAnnouncementPage from './pages/ProfileAnnouncementPage';
import AjouterAnnoncePage from './pages/AjouterAnnoncePage';
import AnnoucementDetailsPage from './pages/annoucement/AnnoucementDetailsPage';
import ProfileBookingsPage from './pages/profile/booking/ProfileBookingsPage';

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
    </Routes>
  );
};

export default AppRoutes;
