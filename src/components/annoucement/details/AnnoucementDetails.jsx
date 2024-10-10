import { Calendar } from 'lucide-react';
import AnnoucementSlider from './AnnoucementSlider';
import AnnoucmentBooking from './AnnoucmentBooking';
import AnnoucementDescription from './AnnoucementDescription';

const AnnoucementDetails = ({ annoucement }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold mb-2">Vintage Double Decker Bus Tour & Thames River Cruise</h1>
      <div className="flex items-center mb-4">
        <span className="mr-2">Gothenburg</span>
        <div className="flex text-yellow-400">
          {'★'.repeat(5)}
          <span className="text-gray-600 ml-1">(348 reviews)</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <AnnoucementSlider />
        <div className="md:w-1/3">
          <AnnoucmentBooking />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Calendar className="h-6 w-6 text-teal-500" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">Free Cancellation</h3>
            <p className="mt-2 text-sm text-gray-500">Cancel up to 24 hours in advance to receive a full refund</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Calendar className="h-6 w-6 text-teal-500" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">Health Precautions</h3>
            <p className="mt-2 text-sm text-gray-500">Special health and safety measures apply. Learn more</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <AnnoucementDescription/>
      </div>
    </div>
  );
};

export default AnnoucementDetails;