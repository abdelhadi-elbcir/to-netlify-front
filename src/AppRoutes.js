import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import AnnoucementDetails from './components/annoucement/AnnoucementDetails';
import Register from './pages/auth/register';
import Login from './pages/auth/Login';
import ProfileInformationPage from './pages/profile/ProfileInformationPage';
import ProfileAnnouncementPage from './pages/profile/ProfileAnnouncementPage';
import AjouterAnnoncePage from './pages/AjouterAnnoncePage';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<AnnoucementDetails />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<ProfileInformationPage/>}/>
      <Route path='/profile/announcements' element={<ProfileAnnouncementPage/>}/>
      <Route path="/add-annonce" element={<AjouterAnnoncePage />} />
    </Routes>
  );
};

export default AppRoutes;
