import React from 'react';
import AnnonceItem from './AnnonceItem';

const AnnonceList = ({ annonces }) => {
  return (
    <div>
      {annonces.map((annonce) => (
        <AnnonceItem key={annonce.id} annonce={annonce} />
      ))}
    </div>
  );
};

export default AnnonceList;
