import React, { useState } from 'react';

const CityFilterBar = () => {
  const [selectedCity, setSelectedCity] = useState('Alaska');

  const cities = [
    'New York',
    'Californie',
    'Alaska',
    'Sydney',
    'Dubaï',
    'Londres',
    'Tokyo',
    'Delhi'
  ];

  const handleCityClick = (city) => {
    setSelectedCity(city);
    // Ajouter toute logique ici pour filtrer en fonction de la ville.
  };

  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Découvrez des Villes Populaires</h2>
      <p className="text-gray-600 mb-6">
        Explorez les meilleures destinations à travers le monde pour vos prochaines aventures.
      </p>
      <div className="flex justify-center items-center space-x-4 overflow-x-auto">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => handleCityClick(city)}
            className={`px-6 py-2 border-2 rounded-full text-sm ${
              selectedCity === city
                ? 'bg-[#347928] text-white border-[#C0EBA6]' 
                : 'text-gray-700 border-gray-300'
            } hover:bg-[#C0EBA6] hover:text-white transition duration-300`} 
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
