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
  import AddStopsPage from './pages/profile/AddStopsPage';

  const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/annoucement/:id" element={<AnnoucementDetailsPage />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<ProfileInformationPage/>}/>
        <Route path='/profile/announcements' element={<ProfileAnnouncementPage/>}/>
        <Route path='/profile/reservations' element={<ProfileBookingsPage/>}/>
        <Route path="/profile/add-annonce" element={<AjouterAnnoncePage />} />
        <Route path="/profile/announcements/:announcementId/add-stops" element={<AddStopsPage />} />
        </Routes>
    );
  };

  export default AppRoutes;
