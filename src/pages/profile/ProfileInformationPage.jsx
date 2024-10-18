import React, { useState } from 'react';
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
    dob: '15/03/1986',
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
    // Ici, vous pouvez ajouter la logique pour sauvegarder les informations du profil
    console.log('Données du profil sauvegardées :', profileData);
  };

  const changePassword = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour changer password
    console.log('password changer');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white mb-[40px] pt-[64px]">
      <div className="bg-[#f8f9fa] shadow-lg rounded-lg w-full max-w-5xl flex">
        {/* Barre latérale */}
        <Sidebar />
        
        <div className="w-3/4 p-10">
          {/* En-tête */}
          <h2 className="text-3xl font-semibold text-primary mb-8">Informations Personnelles</h2>

          {/* Section d'Informations Personnelles */}
          <div className="mb-10">
            <form>
              <div className="flex mb-4">
                <div className="flex-1 mr-2">
                  <FormInput label="Nom" value={profileData.name} name="name" handleChange={handleChange} />
                </div>
                <div className="flex-1 ml-2">
                  <FormInput label="Prénom" value={profileData.surname} name="surname" handleChange={handleChange} />
                </div>
              </div>

              <div className="flex space-x-4 mb-4">
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
              <br />
              <ActionButton 
                href="" 
                label="sauvegarder" 
                isNavigable={true} 
                onClick={handleSubmit}
            />
            </form>
          </div>

          {/* Section de Sécurité */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-6">Sécurité</h3>
            <form>
              <FormInput label="Adresse E-mail" value={profileData.email} name="email" handleChange={handleChange} />
              <FormInput label="Mot de Passe" value={profileData.password} name="password" type="password" handleChange={handleChange} />
              <FormInput label="Confirmer le Mot de Passe" value={profileData.confirmPassword} name="confirmPassword" type="password" handleChange={handleChange} />
               <br />
               <ActionButton 
                href="" 
                label="sauvegarder" 
                isNavigable={true} 
                onClick={changePassword}
            />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformationPage;
