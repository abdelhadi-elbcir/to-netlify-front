import React from 'react';
import { Star } from 'lucide-react';

const AnnouncementCard = ({ image, title, duration, transport, familyPlan, rating, reviews, price }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-65 h-96 flex flex-col">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2">{title}</h3>
        <div className="text-gray-600 text-sm mb-2 flex-grow">
          <p className="line-clamp-1">Duration: {duration}</p>
          <p className="line-clamp-1">{transport}</p>
          <p className="line-clamp-1">{familyPlan}</p>
        </div>
        <div className="flex items-center text-sm mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill={i < Math.floor(rating) ? "#FFD700" : "none"} stroke="#FFD700" size={16} />
          ))}
          <span className="ml-2">{rating}</span>
          <span className="ml-2 text-gray-500">({reviews} reviews)</span>
        </div>
        <div className="text-lg font-bold text-primary">
          ${price}
          <span className="text-sm font-normal text-gray-500 ml-1">per person</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;