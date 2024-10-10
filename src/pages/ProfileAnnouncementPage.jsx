import React, { useState,useEffect } from 'react';
import AnnonceList from '../components/manageProfile/AnnonceList';
import ActionButton from '../components/buttons/ActionButton';
import Sidebar from '../components/manageProfile/Sidebar';
const ProfileAnnouncementPage = () => {

    const [annonces, setAnnonces] = useState([]);
    useEffect(() => {
      const fetchAnnonces = async () => {
        const response = [
          { id: 1, title: 'Annonce 1', description: 'Description de l\'annonce 1Description de l\'annonce Description de l\'annonce Description de l\'annonce Description de l\'annonce Description de l\'annonce ', image: 'https://via.placeholder.com/150', price: 50 },
          { id: 2, title: 'Annonce 2', description: 'Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2', image: 'https://via.placeholder.com/150', price: 75 },
          { id: 2, title: 'Annonce 3', description: 'Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2', image: 'https://via.placeholder.com/150', price: 75 },
          { id: 2, title: 'Annonce 4', description: 'Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2Description de l\'annonce 2', image: 'https://via.placeholder.com/150', price: 75 },
      
        ];
        setAnnonces(response);
      };
  
      fetchAnnonces();
    }, []);

    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl flex">
          {/* Barre latérale */}
          <Sidebar />
          
          <div className="w-3/4 p-10">
            {/* En-tête */}
            <h2 className="text-3xl font-semibold text-[#347928] mb-8">Mes Annonces</h2>
  
        <AnnonceList annonces={annonces} />
        <ActionButton 
                href="/add-annonce" 
                label="ajouter une annonce" 
                isNavigable={true} 
            />
           </div>
        </div>
      </div>
    );
  };
  

export default ProfileAnnouncementPage;
