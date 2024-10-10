import { Calendar, Heart, Share2 } from 'lucide-react';

const AnnoucementDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold mb-2">Vintage Double Decker Bus Tour & Thames River Cruise</h1>
      <div className="flex items-center mb-4">
        <span className="mr-2">Gothenburg</span>
        <div className="flex text-yellow-400">
          {'★'.repeat(5)}
          <span className="text-gray-600 ml-1">(348 reviews)</span>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <div className="relative aspect-video mb-4">
            <img src="/api/placeholder/800/600" alt="Mountain landscape" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {[...Array(6)].map((_, i) => (
              <img key={i} src={`/api/placeholder/100/100`} alt={`Thumbnail ${i + 1}`} className="w-24 h-24 object-cover rounded-md" />
            ))}
          </div>
        </div>
        
        <div className="md:w-1/3">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Booking</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">From</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input type="text" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-300 rounded-md" placeholder="10/12/2021" />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">To</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input type="text" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-300 rounded-md" placeholder="10/12/2021" />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">No. Of Guest</label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>2 adults</option>
                </select>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Subtotal</p>
                <p className="text-3xl font-bold text-teal-500">$78.90</p>
              </div>
              <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-200">Confirm Booking</button>
              <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition duration-200 flex items-center justify-center">
                <Heart className="mr-2 h-5 w-5" /> Save To Wishlist
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition duration-200 flex items-center justify-center">
                <Share2 className="mr-2 h-5 w-5" /> Share The Activity
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </div>
  );
};

export default AnnoucementDetails;