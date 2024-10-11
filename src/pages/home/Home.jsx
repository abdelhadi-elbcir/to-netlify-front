import React from 'react';
import './home.css';
import TripAnnouncementCarousel from '../../components/annoucement/tripAnnouncementCarousel/TripAnnouncementCarousel';
import AnnouncementList from '../../components/annoucement/announcementList/AnnouncementList';

const Home = () => {
  return (
    <>
      <TripAnnouncementCarousel />
      <AnnouncementList />
      </>
  );
};

export default Home;
