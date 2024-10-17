import React from 'react';
import { Calendar } from 'lucide-react';

const AnnouncementFeatures = () => {

  const features = [
    {
      title: "Annulation gratuite",
      description: "Annulez jusqu'à 24 heures à l'avance pour recevoir un remboursement complet"
    },
    {
      title: "Précautions sanitaires",
      description: "Des mesures particulières de santé et de sécurité s'appliquent. Apprendre encore plus"
    },
    {
      title: "Billet mobile",
      description: "Utilisez votre téléphone ou imprimez votre bon"
    },
    {
      title: "Durée",
      description: "2 heures"
    },
    {
      title: "Évitez la file d'attente",
      description: "Évitez les files d'attente avec un accès prioritaire"
    },
    {
      title: "Confirmation instantanée",
      description: "Recevez une confirmation immédiate de votre réservation"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-4 p-2 lg:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start">
          <div className="flex-shrink-0">
            <Calendar className="h-6 w-6 text-teal-500" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default AnnouncementFeatures;