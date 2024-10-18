import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnnonceList from '../../components/manageProfile/AnnonceList';
import ActionButton from '../../components/buttons/ActionButton';
import Sidebar from '../../components/manageProfile/Sidebar';

const ProfileAnnouncementPage = () => {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    const fetchAnnonces = async () => {
      // Simuler un appel API avec un délai
      await new Promise(resolve => setTimeout(resolve, 500));
      const response = [
        { id: 1, title: 'Voyage à Paris', description: 'Découvrez la ville lumière...', image: '/api/placeholder/300/200', price: 500 },
        { id: 2, title: 'Aventure en Amazonie', description: 'Explorez la jungle amazonienne...', image: '/api/placeholder/300/200', price: 1200 },
        { id: 3, title: 'Safari au Kenya', description: 'Observez les Big Five dans leur habitat naturel...', image: '/api/placeholder/300/200', price: 2000 },
        { id: 4, title: 'Ski dans les Alpes', description: 'Profitez des meilleures pistes de ski...', image: '/api/placeholder/300/200', price: 800 },
      ];
      setAnnonces(response);
    };

    fetchAnnonces();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex justify-center items-center bg-white mb-[40px] pt-[64px]"
    >
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl flex overflow-hidden">
        <Sidebar />

        <div className="w-3/4 p-10">
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-semibold text-primary mb-8"
          >
            Mes Annonces
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <AnnonceList annonces={annonces} />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <ActionButton
              href="/add-annonce"
              label="Ajouter une annonce"
              isNavigable={true}
              className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded transition duration-300"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileAnnouncementPage;