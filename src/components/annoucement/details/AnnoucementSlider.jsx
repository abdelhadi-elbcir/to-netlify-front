
import React, { useState } from 'react';

const AnnoucementSlider = ({ images }) => {
  // État pour suivre l'index de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour passer à l'image précédente
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="md:w-2/3">
      <div className="relative aspect-video mb-4">
        {images.length > 0 && (
          <>
            <img 
              src={images[currentIndex]} 
              alt="Main slide" 
              className="w-full h-full shadow object-cover rounded-lg" 
            />
          
            <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
              &lt; 
            </button>
            <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
              &gt;
            </button>
          </>
        )}
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {images.map((image, i) => (
          <img 
            key={i} 
            src={image} 
            alt={`Thumbnail ${i + 1}`} 
            className={`w-24 h-24 object-cover shadow rounded-md cursor-pointer ${currentIndex === i ? 'border-2 border-blue-500' : ''}`} 
            onClick={() => setCurrentIndex(i)} 
          />
        ))}
      </div>
    </div>
  );
};

export default AnnoucementSlider;
