import React, { useState } from 'react';
import Sidebar from '../../components/manageProfile/Sidebar';
import ActionButton from '../../components/buttons/ActionButton';
import FormInput from '../../components/manageProfile/FormInput';
import TextareaInput from '../../components/manageProfile/TextareaInput';
import SelectInput from '../../components/manageProfile/SelectInput';

const AjouterAnnoncePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    Type: '',
    nbPersonnes: '',
    dateTrip: '',
    budget: '',
    duree: '',
    destination: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici votre logique pour soumettre l'annonce
    console.log('Annonce soumise:', formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white mb-[40px] pt-[64px]">
      <div className="bg-[#f8f9fa] shadow-lg rounded-lg w-full max-w-5xl flex">
        {/* Barre latérale */}
        <Sidebar />
        
        <div className="w-3/4 p-10">
          {/* En-tête */}
          <h2 className="text-3xl font-semibold text-primary mb-8">Ajouter une Annonce</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <FormInput 
              label="Nombre de Personnes" 
              name="nbPersonnes" 
              value={formData.nbPersonnes} 
              handleChange={handleChange} 
              type="number" 
              required 
            />
            <FormInput 
              label="Date du Voyage" 
              name="dateTrip" 
              value={formData.dateTrip} 
              handleChange={handleChange} 
              type="date" 
              required 
            />
            <FormInput 
              label="Budget" 
              name="budget" 
              value={formData.budget} 
              handleChange={handleChange} 
              type="number" 
              required 
            />
            <FormInput 
              label="Durée" 
              name="duree" 
              value={formData.duree} 
              handleChange={handleChange} 
              placeholder="Durée du trip en jours" 
              required 
            />
            <FormInput 
              label="Destination" 
              name="destination" 
              value={formData.destination} 
              handleChange={handleChange} 
              required 
            />
            <SelectInput 
              label="Type d'annonce" 
              name="Type" 
              value={formData.Type} 
              handleChange={handleChange} 
              options={[
                { label: 'Sélectionnez le type d\'annonce ', value: '' },
                { label: 'VISIT', value: 'VISIT' },
                { label: 'VOYAGE', value: 'VOYAGE' },
              ]}
            />
            <ActionButton 
              href="" 
              label="Sauvegarder" 
              isNavigable={true} 
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AjouterAnnoncePage;
