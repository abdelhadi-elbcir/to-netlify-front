import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../../components/manageProfile/Sidebar';
import ActionButton from '../../components/buttons/ActionButton';
import FormInput from '../../components/manageProfile/FormInput';
import { addStops } from '../../services/StopService'; 
import Popup from '../../components/popup/PopupRegister';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'; // Font Awesome Trash icon

const AddStopPage = () => {
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const { announcementId } = useParams(); 
  
  const [stops, setStops] = useState([{
    titre: '',
    description: '',
    location: '',
    date: '',
    duration: '',
    picture: null,
    announcement_id : announcementId,
  }]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    setStops((prevStops) => {
      const newStops = [...prevStops];
      newStops[index][name] = value;
      return newStops;
    });
  };

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    setStops((prevStops) => {
      const newStops = [...prevStops];
      newStops[index].picture = file;
      return newStops;
    });
  };

  const addStop = () => {
    setStops([...stops, {
      titre: '',
      description: '',
      location: '',
      date: '',
      duration: '',
      picture: null,
      announcement_id : announcementId,
    }]);
  };

  const removeStop = (index) => {
    setStops((prevStops) => prevStops.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (message) {
      setShowPopup(true);
    }
  }, [message]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construction des stops avec leurs données et images
    const stopsToSend = stops.map(stop => ({
      titre: stop.titre,
      description: stop.description,
      location: stop.location,
      date: stop.date,
      duration: stop.duration,
      picture: stop.picture,
      announcementId: stop.announcement_id
    }));

    try {
      // Appel au backend avec les stops et les images
      await addStops(stopsToSend);
      setMessage('Stops ajoutés avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout des stops:', error);
      setMessage('Erreur lors de l\'ajout des stops.');
      setIsError(true);
    }
};

  const closePopup = () => {
    setShowPopup(false);
    if (!isError) {
      navigate('/profile/announcements'); 
    }
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
            Ajouter des Stops
          </motion.h2>
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {stops.map((stop, index) => (
              <div key={index} className="border p-4 mb-4 rounded-lg relative">
                {/* Delete icon */}
                <FaTrash 
                  className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer text-red-500 hover:text-red-700 transition"
                  onClick={() => removeStop(index)}
                />

                <FormInput 
                  label="titre" 
                  name="titre" 
                  value={stop.titre} 
                  handleChange={(e) => handleChange(index, e)} 
                  required 
                />
                <FormInput 
                  label="Localisation du Stop" 
                  name="location" 
                  value={stop.location} 
                  handleChange={(e) => handleChange(index, e)} 
                  required 
                />
                <FormInput 
                  label="Description" 
                  name="description" 
                  value={stop.description} 
                  handleChange={(e) => handleChange(index, e)} 
                  required 
                />
                <FormInput 
                  label="Date" 
                  name="date" 
                  value={stop.date} 
                  handleChange={(e) => handleChange(index, e)} 
                  type="date" 
                  required 
                />
                <FormInput 
                  label="Duration (minutes)" 
                  name="duration" 
                  value={stop.duration} 
                  handleChange={(e) => handleChange(index, e)} 
                  type="number" 
                  required 
                />
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor={`picture-${index}`}>Image</label>
                  <input 
                    type="file" 
                    id={`picture-${index}`} 
                    name="picture" 
                    onChange={(e) => handleFileChange(index, e)} 
                    className="border rounded-lg p-2 w-full" 
                    required 
                  />
                </div>
              </div>
            ))}
            <button type="button" onClick={addStop} className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded transition duration-300">
              Ajouter un autre Stop
            </button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ActionButton 
                label="Soumettre Tous les Stops" 
                isNavigable={true}
                className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded transition duration-300"
              />
            </motion.div>
          </motion.form>
        </div>
        {showPopup && (
          <Popup 
            message={message} 
            error={isError} 
            onClose={closePopup} 
            duration={3000} 
          />
        )}
      </div>
    </motion.div>
  );
};

export default AddStopPage;
