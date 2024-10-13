import React from 'react';
import Stop from './Stop';
import './StopsList.css';

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

const StopsList = () => {
  return (
    <div className="stops-list">
      {stops.map((stop, index) => (
        <div key={stop.number} className="stop-container">
          <div className="vertical-line" />
          <Stop
            number={stop.number}
            location={stop.location}
            days={stop.days}
            image={stop.image}
            description={stop.description}
          />
        </div>
      ))}
    </div>
  );
};

export default StopsList;
