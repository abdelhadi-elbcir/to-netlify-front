import React from 'react';
import MainSection from '../../components/home/Main';
import TripAnnouncementCarousel from '../../components/annoucement/tripAnnouncementCarousel/TripAnnouncementCarousel';
import AnnouncementList from '../../components/annoucement/announcementList/AnnouncementList';

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
