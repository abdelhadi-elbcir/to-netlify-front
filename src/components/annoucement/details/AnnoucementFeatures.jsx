import React from 'react';
import { Calendar } from 'lucide-react';

const AnnouncementFeatures = ({announcement}) => {

  const features = [
    {
      title: "Annulation gratuite",
      description: "Annulez jusqu'à 24 heures à l'avance pour recevoir un remboursement complet",
      icon : <Calendar className="h-6 w-6 text-primary" />
    },
    {
      title: "Nombre de personnes",
      description: announcement?.nbOfPeople,
      icon : <Calendar className="h-6 w-6 text-primary" />
    },
    {
      title: "La date de départ",
      description: announcement?.tripDate,
      icon : <Calendar className="h-6 w-6 text-primary" />
    },
    {
      title: "duration",
      description: announcement?.duration+" jeurs",
      icon : <Calendar className="h-6 w-6 text-primary" />
    },
    {
      title: "Budget",
      description: announcement?.budget + " MAD",
      icon : <Calendar className="h-6 w-6 text-primary" />
    },
    {
      title: "Destination",
      description: announcement?.destination,
      icon : <Calendar className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-4 p-2 lg:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start">
          <div className="flex-shrink-0">
            {feature.icon}
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