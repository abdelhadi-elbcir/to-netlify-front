import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../../components/manageProfile/Sidebar';
import ActionButton from '../../components/buttons/ActionButton';
import FormInput from '../../components/manageProfile/FormInput';
import TextareaInput from '../../components/manageProfile/TextareaInput';
import SelectInput from '../../components/manageProfile/SelectInput';
import { createAnnouncement } from '../../services/AnnouncementService';
import Popup from '../../components/popup/PopupRegister';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AjouterAnnoncePage = () => {
  const user = useSelector(state => state.user);
  const [Message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    nbOfPeople: '',
    tripDate: '',
    budget: '',
    duration: '',
    destination: '',
    status: 'APPROVED',
    userId: user.user_id,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'nbOfPeople' || name === 'budget' || name === 'duration' ? Number(value) : value,
    }));
  };

  useEffect(() => {
    if (Message) {
      setShowPopup(true);  
    }
  }, [Message]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createAnnouncement(formData);
      const announcementId = extractAnnouncementId(response);
  
      if (announcementId) {
        setMessage('Annonce créée avec succès !');
        setTimeout(() => {
          navigate(`/profile/announcements/${announcementId}/add-stops`);
        }, 1000);
      } else {
        console.error('L\'ID de l\'annonce n\'a pas pu être extrait.');
      }
    } catch (error) {
      console.error('Erreur lors de la création de l\'annonce:', error);
      setMessage('Erreur lors de la création de l\'annonce.');
      setIsError(true);
    }
  };
  
  
  
  const extractAnnouncementId = (message) => {
    const match = message.match(/ID:\s*(\d+)/);
    return match ? match[1] : null; 
  };
  

  const closePopup = () => {
    setShowPopup(false);
  };

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
            Ajouter une Annonce
          </motion.h2>
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <FormInput 
              label="Titre" 
              name="title" 
              value={formData.title} 
              handleChange={handleChange} 
              required 
            />
            <TextareaInput 
              label="Description" 
              name="description" 
              value={formData.description} 
              handleChange={handleChange} 
              placeholder="Entrez la description de votre annonce" 
              rows={4} 
              required 
            />
            <div className="grid grid-cols-2 gap-4">
              <FormInput 
                label="Nombre de Personnes" 
                name="nbOfPeople" 
                value={formData.nbOfPeople} 
                handleChange={handleChange} 
                type="number" 
                required 
              />
              <FormInput 
                label="Date du Voyage" 
                name="tripDate" 
                value={formData.tripDate} 
                handleChange={handleChange} 
                type="date" 
                required 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormInput 
                label="Budget" 
                name="budget" 
                value={formData.budget} 
                handleChange={handleChange} 
                type="number" 
                required 
              />
              <FormInput 
                label="Durée (jours)" 
                name="duration" 
                value={formData.duration} 
                handleChange={handleChange} 
                type="number"
                required 
              />
            </div>
            <FormInput 
              label="Destination" 
              name="destination" 
              value={formData.destination} 
              handleChange={handleChange} 
              required 
            />
            <SelectInput 
              label="Type d'annonce" 
              name="type" 
              value={formData.type} 
              handleChange={handleChange} 
              options={[
                { label: 'Sélectionnez le type d\'annonce ', value: '' },
                { label: 'VISIT', value: 'VISIT' },
                { label: 'VOYAGE', value: 'VOYAGE' },
              ]}
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ActionButton 
                href="" 
                label="Suivant" 
                isNavigable={true}
                className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded transition duration-300"
              />
            </motion.div>
          </motion.form>
        </div>
        {showPopup && (
          <Popup 
            message={Message} 
            error={isError} 
            onClose={closePopup} 
            duration={3000} 
          />
        )}
      </div>
    </motion.div>
  );
};

export default AjouterAnnoncePage;
