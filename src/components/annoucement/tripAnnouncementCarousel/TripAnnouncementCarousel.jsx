import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const announcements = [
  {
    title: "Toubkal Challenge",
    description: "Climb North Africa's highest peak",
    price: "$599",
    image: "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_126/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/2/422c917a5d3d306a7b992a5dd256dbe25916d183/20-essential-tips-successful-road-trip.jpg"
  },
  {
    title: "Sahara Adventure",
    description: "Experience the magic of the desert",
    price: "$799",
    image: "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_126/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/2/422c917a5d3d306a7b992a5dd256dbe25916d183/20-essential-tips-successful-road-trip.jpg"
  },
  {
    title: "Atlas Mountains Trek",
    description: "Explore beautiful mountain landscapes",
    price: "$499",
    image: "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_126/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/2/422c917a5d3d306a7b992a5dd256dbe25916d183/20-essential-tips-successful-road-trip.jpg"
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
    <div className="max-w-full mx-auto bg-white py-8">
      <div className="relative overflow-hidden rounded-lg shadow-md max-w-6xl mx-auto">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {announcements.map((announcement, index) => (
            <div key={index} className="flex-none w-full bg-white rounded-lg overflow-hidden">
              <img src={announcement.image} alt={announcement.title} className="w-full h-96 object-cover" />
              <div className="p-6 flex flex-col h-64">
                <h2 className="text-3xl text-primary-700 mb-4">{announcement.title}</h2>
                <p className="text-gray-700 mb-4 flex-grow">{announcement.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-2xl font-bold text-primary">{announcement.price}</span>
                  <button className="bg-primary text-white px-6 py-3 rounded hover:bg-secondary transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={prevAnnouncement} 
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-colors duration-300"
        >
          <ChevronLeft className="w-8 h-8 text-primary-700" />
        </button>
        <button 
          onClick={nextAnnouncement} 
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-colors duration-300"
        >
          <ChevronRight className="w-8 h-8 text-primary-700" />
        </button>
      </div>
    </div>
  );
};

export default TripAnnouncementCarousel;