import React, { useRef, useEffect, useState, useCallback } from 'react';
import AnnouncementCard from '../announcementCard/AnnouncementCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "./AnnouncementList.css"

const announcements = [
  {
    image: "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_126/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/2/422c917a5d3d306a7b992a5dd256dbe25916d183/20-essential-tips-successful-road-trip.jpg",
    title: "Westminster to Greenwich River Thames",
    duration: "2 hours",
    transport: "Transport Facility",
    familyPlan: "Family Plan",
    rating: 4.5,
    reviews: 584,
    price: 35.00
  },
  {
    image: "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_126/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/2/422c917a5d3d306a7b992a5dd256dbe25916d183/20-essential-tips-successful-road-trip.jpg",
    title: "Vintage Double Decker Bus Tour & Thames",
    duration: "2 hours",
    transport: "Transport Facility",
    familyPlan: "Family Plan",
    rating: 4,
    reviews: 584,
    price: 35.00
  },
  {
    image: "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_126/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/2/422c917a5d3d306a7b992a5dd256dbe25916d183/20-essential-tips-successful-road-trip.jpg",
    title: "Magic of London Tour with Afternoon Tea at Westminster Abbey",
    duration: "2 hours",
    transport: "Transport Facility",
    familyPlan: "Family Plan",
    rating: 4.5,
    reviews: 584,
    price: 35.00
  },
  {
    image: "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_126/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/2/422c917a5d3d306a7b992a5dd256dbe25916d183/20-essential-tips-successful-road-trip.jpg",
    title: "Westminster to Greenwich River Thames",
    duration: "2 hours",
    transport: "Transport Facility",
    familyPlan: "Family Plan",
    rating: 4.5,
    reviews: 584,
    price: 35.00
  },
  {
    image: "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_126/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/2/422c917a5d3d306a7b992a5dd256dbe25916d183/20-essential-tips-successful-road-trip.jpg",
    title: "Vintage Double Decker Bus Tour & Thames",
    duration: "2 hours",
    transport: "Transport Facility",
    familyPlan: "Family Plan",
    rating: 4,
    reviews: 584,
    price: 35.00
  },
  {
    image: "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_126/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/2/422c917a5d3d306a7b992a5dd256dbe25916d183/20-essential-tips-successful-road-trip.jpg",
    title: "Magic of London Tour with Afternoon Tea at Westminster Abbey",
    duration: "2 hours",
    transport: "Transport Facility",
    familyPlan: "Family Plan",
    rating: 4.5,
    reviews: 584,
    price: 35.00
  },
];

const AnnouncementList = () => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const cardWidth = 270; // Width of each card + gap
  const scrollAmount = cardWidth * 3; // Scroll 3 cards at a time

  const handleScroll = useCallback(
    (direction) => {
      const container = scrollRef.current;
      const scrollWidth = container.scrollWidth - container.clientWidth;

      let newPosition;
      if (direction === 'left') {
        newPosition = Math.max(0, scrollPosition - scrollAmount);
      } else {
        newPosition = Math.min(scrollWidth, scrollPosition + scrollAmount);
      }

      container.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
      setScrollPosition(newPosition);
    },
    [scrollPosition, scrollAmount]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll('right');
    }, 5000);

    return () => clearInterval(interval);
  }, [scrollPosition, handleScroll]);

  const handleSwipe = (e) => {
    const container = scrollRef.current;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const newPosition = Math.min(Math.max(0, e.target.scrollLeft), scrollWidth);
    setScrollPosition(newPosition);
  };

  return (
    <div className="announcement-list">
      <h2 className="announcement-list__title">Featured Destinations</h2>
      <p className="announcement-list__description">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </p>
      <div className="announcement-list__grid-container">
        <button className="announcement-list__nav-btn announcement-list__nav-btn--left" onClick={() => handleScroll('left')}>
          <ChevronLeft />
        </button>
        <div className="announcement-list__grid" ref={scrollRef} onScroll={handleSwipe}>
          {announcements.map((announcement, index) => (
            <AnnouncementCard key={index} {...announcement} />
          ))}
        </div>
        <button className="announcement-list__nav-btn announcement-list__nav-btn--right" onClick={() => handleScroll('right')}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementList;