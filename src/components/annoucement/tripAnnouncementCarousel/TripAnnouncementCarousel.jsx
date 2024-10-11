import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './TripAnnouncementCarousel.css';

const announcements = [
  {
    title: "Toubkal Challenge",
    description: "Climb North Africa's highest peak",
    price: "$599",
    image: "https://villatajmarrakech.com/wp-content/uploads/2022/12/sommet-mont-toubkal.jpeg"
  },
  {
    title: "Sahara Adventure",
    description: "Experience the magic of the desert",
    price: "$799",
    image: "https://villatajmarrakech.com/wp-content/uploads/2022/12/sommet-mont-toubkal.jpeg"
  },
  {
    title: "Atlas Mountains Trek",
    description: "Explore beautiful mountain landscapes",
    price: "$499",
    image: "https://villatajmarrakech.com/wp-content/uploads/2022/12/sommet-mont-toubkal.jpeg"
  }
];

const TripAnnouncementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAnnouncement = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevAnnouncement = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="trip-carousel">
      <div className="trip-carousel__container">
        <div className="trip-carousel__wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {announcements.map((announcement, index) => (
            <div key={index} className="trip-carousel__card">
              <img src={announcement.image} alt={announcement.title} className="trip-carousel__image" />
              <div className="trip-carousel__content">
                <h2 className="trip-carousel__card-title">{announcement.title}</h2>
                <p className="trip-carousel__description">{announcement.description}</p>
                <div className="trip-carousel__footer">
                  <span className="trip-carousel__price">{announcement.price}</span>
                  <button className="trip-carousel__button">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevAnnouncement} className="trip-carousel__nav trip-carousel__nav--prev">
          <ChevronLeft />
        </button>
        <button onClick={nextAnnouncement} className="trip-carousel__nav trip-carousel__nav--next">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TripAnnouncementCarousel;