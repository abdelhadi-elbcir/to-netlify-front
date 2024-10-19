import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnnonceList from '../../components/manageProfile/AnnonceList';
import ActionButton from '../../components/buttons/ActionButton';
import Sidebar from '../../components/manageProfile/Sidebar';
import { getAllAnnouncementsByUser } from '../../services/AnnouncementService'; // Assure-toi que le chemin d'importation est correct
import { useSelector } from 'react-redux';
const ProfileAnnouncementPage = () => {
  const [annonces, setAnnonces] = useState([]);
  const [error, setError] = useState(null); // État pour gérer les erreurs
  const user = useSelector(state => state.user);

  useEffect(() => {
    const fetchAnnonces = async () => {
        try {
          const response = await getAllAnnouncementsByUser(user.user_id); 
          setAnnonces(response); 
        } catch (error) {
          setError("Erreur lors de la récupération des annonces."); 
          console.error("Error fetching announcements:", error);
        }
      
    };

    fetchAnnonces(); 
  }, [user]);

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

          {error && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-red-600 mb-4"
            >
              {error} {/* Affiche l'erreur si elle existe */}
            </motion.div>
          )}

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
