import { Calendar, Heart, Share2 } from "lucide-react";


const AnnoucmentBooking = () => {


    return (<div className="bg-white p-4 rounded-lg shadow">
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
                <p className="text-3xl font-bold text-primary ">$78.90</p>
            </div>
            <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-600 transition duration-200">Confirm Booking</button>
            <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition duration-200 flex items-center justify-center">
                <Heart className="mr-2 h-5 w-5" /> Save To Wishlist
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition duration-200 flex items-center justify-center">
                <Share2 className="mr-2 h-5 w-5" /> Share The Activity
            </button>
        </div>
    </div>)
}

export default AnnoucmentBooking;