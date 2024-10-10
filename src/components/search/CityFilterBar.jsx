import React, { useState } from 'react';

const CityFilterBar = () => {
  const [selectedCity, setSelectedCity] = useState('Alaska');

  const cities = [
    'New York',
    'California',
    'Alaska',
    'Sydney',
    'Dubai',
    'London',
    'Tokyo',
    'Delhi'
  ];

  const handleCityClick = (city) => {
    setSelectedCity(city);
    // Add any logic here to filter based on the city.
  };

  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Explore Popular Cities</h2>
      <p className="text-gray-600 mb-6">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </p>
      <div className="flex justify-center items-center space-x-4 overflow-x-auto">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => handleCityClick(city)}
            className={`px-6 py-2 border-2 rounded-full text-sm ${
              selectedCity === city
                ? 'bg-teal-200 text-white border-teal-400'
                : 'text-gray-700 border-gray-300'
            } hover:bg-teal-200 hover:text-white transition duration-300`}
          >
            {city}
          </button>
        ))}
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <button className="px-4 py-2 border-2 border-gray-300 rounded-full">{"<"}</button>
        <button className="px-4 py-2 border-2 border-gray-300 rounded-full">{">"}</button>
      </div>
    </div>
  );
};

export default CityFilterBar;
