import React, { useRef, useEffect, useState, useCallback } from 'react';
import AnnouncementCard from '../announcementCard/AnnouncementCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getAllAnnouncements } from '../../../services/AnnouncementService'; 

const AnnouncementList = () => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [announcements, setAnnouncements] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const cardWidth = 270; 
  const scrollAmount = cardWidth * 3; 

  // Fetch announcements from the API
  const fetchAnnouncements = async () => {
    try {
      const data = await getAllAnnouncements(); 
      setAnnouncements(data); 
      setLoading(false); 
    } catch (error) {
      setError('Failed to fetch announcements.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements(); 
  }, []);

  const handleScroll = useCallback(
    (direction) => {
      const container = scrollRef.current;
      if (!container) return; 
  
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
    if (!scrollRef.current) return; 
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
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
    setScrollPosition(scrollRef.current.scrollLeft);
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-4xl text-center font-bold text-primary mb-4">Featured Destinations</h2>
      <p className="text-gray-600 mb-8 text-center">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </p>

      {loading ? (
        <div>Loading announcements...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
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
              <div key={index} className="flex-shrink-0 w-[254px]">
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
      )}
    </div>
  );
};

export default AnnouncementList;
