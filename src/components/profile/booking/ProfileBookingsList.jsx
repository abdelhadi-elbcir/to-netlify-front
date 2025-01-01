import React from "react";
import { motion } from "framer-motion";

const ProfileBookingsList = ({ bookings }) => {
  if (!bookings || bookings.length === 0) {
    return (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-500"
      >
        Aucune réservation trouvée.
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      {bookings?.map((booking) => (
        <motion.div
          key={booking.id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <div>
            <p className="text-sm text-gray-600">
              Date de réservation:{" "}
              <span className="font-medium text-gray-800">
                {new Date(booking.bookingDate).toLocaleDateString()}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Nombre de personnes:{" "}
              <span className="font-medium text-gray-800">
                {booking.nbOfPeople}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Prix total:{" "}
              <span className="font-medium text-gray-800">
                {booking.totalPrice.toFixed(2)} €
              </span>
            </p>
          </div>
          <div>
            <button
              className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-200"
              onClick={() => console.log("Cancel booking", booking.id)}
            >
              Annuler
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProfileBookingsList;
