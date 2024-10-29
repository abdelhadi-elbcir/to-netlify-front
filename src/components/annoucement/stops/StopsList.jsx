import React from 'react';
import Stop from './Stop';

const StopsList = ({ stops = [] }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-secondary-50">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Your Indian Adventure Itinerary</h2>
      <div className="space-y-8 relative">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary" />
        {stops.map((stop, index) => (
          <Stop key={index} number={index + 1} {...stop} />
        ))}
      </div>
    </div>
  );
};

export default StopsList;
