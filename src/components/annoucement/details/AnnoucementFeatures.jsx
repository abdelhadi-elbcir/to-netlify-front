import React from 'react';
import { Calendar } from 'lucide-react';

const AnnouncementFeatures = ({ annoucement }) => {

  const features = [
    {
      title: "nombre de personnes",
      description: annoucement?.nbOfPeople 
    },
    {
      title: "la date de trip",
      description: annoucement?.tripDate 
    },
    {
      title: "Le budget", 
      description: annoucement?.budget 
    },
    {
      title: "Durée",
      description: annoucement?.duration 
    },
    {
      title: "la destination de trip", 
      description: annoucement?.destination 
    },
    {
      title: "Type",
      description: annoucement?.type
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-4 p-2 lg:grid-cols-3 gap-4 ">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start">
          <div className="flex-shrink-0">
            <Calendar className="h-6 w-6 text-primary" />
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
