import React from 'react';

const AnnonceItem = ({ annonce }) => {
  return (
    <div className="flex items-center p-4 bg-white shadow-md mb-4 transition-transform duration-100 hover:scale-105">
      <img
        src={annonce.image}
        alt={annonce.title}
        className="w-25 h-25 object-cover mr-4"
      />
      <div className="flex-1">
        <h4 className="text-lg font-semibold">{annonce.title}</h4>
        <p className="text-gray-600 line-clamp-2 overflow-hidden text-ellipsis">
          {annonce.description}
        </p>
        {/* Lien vers le détail de l'annonce */}
        <a 
          href={`/profile/announcements/${annonce.id}`} 
          className="text-secondary hover:underline mt-2 inline-block"
        >
          Voir plus
        </a>
      </div>
      <p className="text-gray-500 font-bold text-right">{annonce.price} €</p>
    </div>
  );
};

export default AnnonceItem;
