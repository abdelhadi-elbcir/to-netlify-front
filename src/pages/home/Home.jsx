import React from 'react';
import './home.css';
import TripAnnouncementCarousel from '../../components/annoucement/tripAnnouncementCarousel/TripAnnouncementCarousel';
import AnnouncementList from '../../components/annoucement/announcementList/AnnouncementList';
import StopsList from '../../components/annoucement/stops/StopsList';

const Home = () => {
  return (
    <>
      <TripAnnouncementCarousel />
      <AnnouncementList />
      <StopsList />
      </>
  );
};

export default Home;
