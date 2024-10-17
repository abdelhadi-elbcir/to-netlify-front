import React from 'react';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

const Stop = ({ number, location, days, image, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-green-700 z-10">
        {number}
      </div>
      <div className="flex-grow bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-green-700 flex items-center">
              <MapPin className="w-5 h-5 mr-1" />
              {location}
            </h3>
            <p className="text-sm text-green-500 font-medium flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              Day {days}
            </p>
          </div>
          <div className="mb-4">
            <img src={image} alt={location} className="w-full h-48 object-cover rounded-md" />
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <button className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition-colors duration-300 flex items-center">
            Read More
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const StopsList = () => {
  const stops = [
    {
      number: 1,
      location: 'Delhi',
      days: '1-2',
      image: 'http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_126/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/2/422c917a5d3d306a7b992a5dd256dbe25916d183/20-essential-tips-successful-road-trip.jpg',
      description: 'We meet up and stay in Delhi--the capital of the world\'s largest democracy. The day begins with light ice-breaking sessions.',
    },
    {
      number: 2,
      location: 'Jaipur',
      days: '2-5',
      image: 'http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_126/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/2/422c917a5d3d306a7b992a5dd256dbe25916d183/20-essential-tips-successful-road-trip.jpg',
      description: 'Discover the pink city of Jaipur, explore palaces and forts.',
    },
    {
      number: 3,
      location: 'Agra',
      days: '5-6',
      image: 'http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_126/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/2/422c917a5d3d306a7b992a5dd256dbe25916d183/20-essential-tips-successful-road-trip.jpg',
      description: 'Visit the world-famous Taj Mahal and other historical sites.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Your Indian Adventure Itinerary</h2>
      <div className="space-y-8 relative">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-green-700" />
        {stops.map((stop, index) => (
          <Stop key={stop.number} {...stop} />
        ))}
      </div>
    </div>
  );
};

export default StopsList;