import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import UserService from '../../services/UserService';
import Sidebar from '../../components/manageProfile/Sidebar';
import FormInput from '../../components/manageProfile/FormInput';
import TextareaInput from '../../components/manageProfile/TextareaInput';
import SelectInput from '../../components/manageProfile/SelectInput';
import ActionButton from '../../components/buttons/ActionButton';
import { useSelector } from 'react-redux';

const ProfileInformationPage = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    surname: '',
    bio: '',
    gender: '',
    dob: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  });
  
  
  const user = useSelector(state=>state.user);

  const userId =  user.user_id; 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await UserService.getUserById(userId);
        console.log(userData); // Ajoutez ceci pour vérifier les données
        setProfileData({
          name: userData.firstName || '',
          surname: userData.lastName || '',
          bio: userData.bio || '',
          gender: userData.six || '',
          dob: userData.birthday || '',
          phone: userData.phone || '',
          address: userData.address || '',
          email: userData.email || '',
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
      }
    };
    
    

    fetchUserData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value || '' }); 
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        firstName: profileData.name,
        lastName: profileData.surname,
        bio: profileData.bio,
        six: profileData.gender,
        birthday: profileData.dob,
        phone: profileData.phone,
        address: profileData.address,
        email: profileData.email,
      };
      console.log('Données à envoyer :', userData); 
      await UserService.updateUser(userId, userData);
      console.log('Données du profil sauvegardées :', profileData);
    } catch (error) {
      console.error('Erreur lors de la mise à jour des données utilisateur:', error);
    }
};


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex justify-center items-center bg-gradient-to-b from-white to-white mb-[40px] pt-[64px]"
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
            Informations Personnelles
          </motion.h2>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-10"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <FormInput label="Nom" value={profileData.name} name="name" handleChange={handleChange} />
                <FormInput label="Prénom" value={profileData.surname} name="surname" handleChange={handleChange} />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <SelectInput 
                  label="Genre" 
                  value={profileData.gender} 
                  name="gender" 
                  handleChange={handleChange} 
                  options={[
                    { value: 'homme', label: 'Homme' },
                    { value: 'femme', label: 'Femme' },
                  ]} 
                />
                <FormInput label="Date de Naissance" value={profileData.dob} name="dob" type="date" handleChange={handleChange} />
              </div>

              <FormInput label="Téléphone" value={profileData.phone} name="phone" handleChange={handleChange} />
              <FormInput label="Adresse" value={profileData.address} name="address" handleChange={handleChange} />
              
              <TextareaInput 
                label="Bio" 
                value={profileData.bio} 
                name="bio" 
                handleChange={handleChange} 
                placeholder="Entrez votre bio" 
                rows={4} 
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4"
              >
                <ActionButton 
                  href="" 
                  label="Sauvegarder" 
                  isNavigable={true} 
                  onClick={handleSubmit}
                  className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded transition duration-300"
                />
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileInformationPage;
