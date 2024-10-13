import React from 'react';
import './home.css';
import TripAnnouncementCarousel from '../../components/annoucement/tripAnnouncementCarousel/TripAnnouncementCarousel';
import AnnouncementList from '../../components/annoucement/announcementList/AnnouncementList';
import MainSection from '../../components/home/Main';

const Home = () => {
  return (
    <>
      <MainSection/>
      <TripAnnouncementCarousel />
      <AnnouncementList />
    </>
  );
};

export default Home;
