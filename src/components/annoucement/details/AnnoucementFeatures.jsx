import React from 'react';
import { Calendar } from 'lucide-react';

const AnnouncementFeatures = () => {
  const features = [
    {
      title: "Free Cancellation",
      description: "Cancel up to 24 hours in advance to receive a full refund"
    },
    {
      title: "Health Precautions",
      description: "Special health and safety measures apply. Learn more"
    },
    {
      title: "Mobile Ticket",
      description: "Use your phone or print your voucher"
    },
    {
      title: "Duration",
      description: "2 hours"
    },
    {
      title: "Skip the line",
      description: "Avoid queues with priority access"
    },
    {
      title: "Instant Confirmation",
      description: "Receive immediate confirmation of your booking"
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