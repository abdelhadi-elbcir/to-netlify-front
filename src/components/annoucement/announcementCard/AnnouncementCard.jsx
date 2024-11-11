import React from 'react';
import { Star } from 'lucide-react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom'; 

const AnnouncementCard = ({ id, stops, title, duration, rating, reviews, budget, nbOfPeople, tripDate, destination }) => {
  const navigate = useNavigate(); 
  const firstStopImage = stops && stops.length > 0 ? stops[0].picture.urlImage : 'default-image.jpg';
  
  const formattedTripDate = format(new Date(tripDate), 'MMMM d, yyyy'); 

  // Fonction de gestion du clic
  const handleCardClick = () => {
    navigate(`/annoucement/${id}`); 
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-65 h-[400px] flex flex-col cursor-pointer" // Ajoutez cursor-pointer pour indiquer que c'est cliquable
      onClick={handleCardClick}
    >
      <img src={firstStopImage} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between text-gray-600 text-sm mb-2">
          <p className="line-clamp-1">{duration} jours</p>
          <p className="line-clamp-1">{formattedTripDate}</p>
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2">{title}</h3>
        <div className="text-gray-600 text-sm mt-2">
          <p className="line-clamp-1"><strong>{destination}</strong></p>
          <p className="line-clamp-1">{nbOfPeople} person(s)</p>
        </div>
        <div className="text-lg font-bold text-primary mb-2">
          ${budget}
          <span className="text-sm font-normal text-gray-500 ml-1">per person</span>
        </div>
        <div className="flex items-center text-sm mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill={i < Math.floor(rating) ? "#FFD700" : "none"} stroke="#FFD700" size={16} />
          ))}
          <span className="ml-2">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
