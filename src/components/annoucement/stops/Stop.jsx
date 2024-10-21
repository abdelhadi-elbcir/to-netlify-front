import React from 'react';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

const Stop = ({ number, titre, location, date, duration, picture, description }) => {
  return (
    <div className="flex items-start space-x-4 max-w-2xl mx-auto">
      <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-primary z-10">
        {number}
      </div>
      <div className="flex-grow bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h3 className="text-xxl font-semibold text-black flex items-center">{titre}</h3>
          <br />
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-primary flex items-center">
              <MapPin className="w-5 h-5 mr-1" />
              {location}
            </h3>
            <p className="text-sm text-primary font-medium flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {duration} jours
            </p>
          </div>
          <div className="mb-4">
            <img 
              src={picture?.urlImage} 
              alt={picture?.name} 
              className="w-full max-w-full h-auto object-cover rounded-md" 
            />
          </div>
          <p className="text-black">{date}</p>
          <p className="text-gray-600 mb-4">{description}</p>
          <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors duration-300 flex items-center">
            Read More
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stop;
