import React from 'react';

const AnnonceItem = ({ annonce }) => {
  return (
    <div className="flex items-center p-4 bg-white shadow-md mb-4 transition-transform duration-100 hover:scale-105">
      <div className="flex-1">
        <h4 className="text-lg font-semibold ">{annonce.title}</h4>
        <h2 className="text-sm text-primary text-left font-bold">{annonce.status}</h2>
        <p className="text-gray-600 line-clamp-2 overflow-hidden text-ellipsis">
          {annonce.description}
        </p>
        {/* Lien vers le détail de l'annonce */}
        <a 
          href={`/annoucement/${annonce.id}`} 
          className="text-secondary hover:underline mt-2 inline-block"
        >
          Voir plus
        </a>
      </div>
      <p className="text-primary font-bold text-right">{annonce.budget} €</p>
    </div>
  );
};

export default AnnonceItem;
