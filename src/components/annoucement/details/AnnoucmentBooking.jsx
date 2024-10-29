import { useState } from "react";
import { Calendar, Share2 } from "lucide-react";
import { createBooking } from "../../../services/BookingService";
import { useSelector } from "react-redux";

const AnnoucmentBooking = ({ announcementId }) => {
    // Form state for BookingReq fields
    const [nbOfPeople, setNbOfPeople] = useState(1);
    const [bookingDate, setBookingDate] = useState(""); 
    const [totalPrice] = useState(78.90); 
    const [availableSeats] = useState(2); 
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const user = useSelector(state=>state.user);

    // Booking handler to create the booking based on BookingReq data
    const handleBooking = async () => {
        const bookingData = {
            nbOfPeople,
            bookingDate,   
            totalPrice,
            userID: user.user_id,
            announcementID: announcementId,
        };

        try {
            const response = await createBooking(bookingData);
            console.log("Booking successful:", response);
            setIsModalOpen(false);  // Close modal after booking
        } catch (error) {
            console.error("Error creating booking:", error);
        }
    };

    // Open the modal when confirm button is clicked
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Close the modal when cancel is clicked
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Réservation</h2>
            <div className="space-y-4">
                {/* Input for booking date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Date de réservation :</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                            type="text"
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-300 rounded-md"
                            placeholder="10/12/2021"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Input for number of people */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nombre de personnes :</label>
                    <input
                        type="number"
                        value={nbOfPeople}
                        onChange={(e) => setNbOfPeople(e.target.value)}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-300 rounded-md"
                        placeholder="1"
                    />
                </div>

                {/* Display of available seats */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nombre de places restantes</label>
                    <input
                        disabled={true}
                        value={availableSeats}
                        type="text"
                        className="focus:ring-indigo-500 bg-gray-300 focus:border-indigo-500 block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-700 rounded-md"
                        placeholder="2"
                    />
                </div>


                {/* Button to open confirmation modal */}
                <button
                    onClick={openModal}
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-600 transition duration-200"
                >
                    Confirm Booking
                </button>

                {/* Button to share the activity */}
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition duration-200 flex items-center justify-center">
                    <Share2 className="mr-2 h-5 w-5" /> Share The Activity
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-lg font-semibold mb-4">Confirmer la réservation</h3>
                        <p className="mb-4">Vous êtes sur le point de réserver pour {nbOfPeople} personnes le {bookingDate}</p>
                        
                        {/* Modal Actions */}
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={closeModal}
                                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={handleBooking}
                                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-600"
                            >
                                Confirmer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnnoucmentBooking;
