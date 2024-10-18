import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../../components/manageProfile/Sidebar';
import FormInput from '../../components/manageProfile/FormInput';
import TextareaInput from '../../components/manageProfile/TextareaInput';
import SelectInput from '../../components/manageProfile/SelectInput';
import ActionButton from '../../components/buttons/ActionButton';

const ProfileInformationPage = () => {
  const [profileData, setProfileData] = useState({
    name: 'Masum',
    surname: 'Rana',
    bio: '',
    gender: '',
    dob: '1986-03-15',
    phone: '+46 7644 394 68',
    address: '',
    location: 'Gothenburg',
    email: 'masumrana15@gmail.com',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du profil sauvegardées :', profileData);
  };

  const changePassword = (e) => {
    e.preventDefault();
    console.log('password changer');
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
              <FormInput label="Lieu" value={profileData.location} name="location" handleChange={handleChange} />
              
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

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-6">Sécurité</h3>
            <form onSubmit={changePassword}>
              <FormInput label="Adresse E-mail" value={profileData.email} name="email" handleChange={handleChange} />
              <FormInput label="Mot de Passe" value={profileData.password} name="password" type="password" handleChange={handleChange} />
              <FormInput label="Confirmer le Mot de Passe" value={profileData.confirmPassword} name="confirmPassword" type="password" handleChange={handleChange} />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4"
              >
                <ActionButton 
                  href="" 
                  label="Changer le mot de passe" 
                  isNavigable={true} 
                  onClick={changePassword}
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