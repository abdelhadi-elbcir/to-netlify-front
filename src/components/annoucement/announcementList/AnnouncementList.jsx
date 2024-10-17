import React, { useRef, useEffect, useState, useCallback } from 'react';
import AnnouncementCard from '../announcementCard/AnnouncementCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
    setScrollPosition(scrollRef.current.scrollLeft);
  };

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Destinations</h2>
      <p className="text-gray-600 mb-8">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </p>
      <div className="relative">
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-100 z-10"
          onClick={() => handleScroll('left')}
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <div
          className="flex gap-5 overflow-x-auto scroll-smooth p-5 cursor-grab active:cursor-grabbing"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {announcements.map((announcement, index) => (
            <div key={index} className="flex-shrink-0 w-[270px]">
              <AnnouncementCard {...announcement} />
            </div>
          ))}
        </div>

        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-100 z-10"
          onClick={() => handleScroll('right')}
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementList;