import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sidebar from "../../components/manageProfile/Sidebar";
import ProfileBookingsList from "../../components/profile/booking/ProfileBookingsList";
import { getUserBookings } from "../../services/BookingService"; // Replace with your API service function
import { useSelector } from "react-redux";

const ProfileBookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await getUserBookings(user.user_id); // Adjust API call if necessary
        console.log(response)
        setBookings(response.content);
      } catch (err) {
        setError("Erreur lors de la récupération des réservations.");
        console.error("Error fetching bookings:", err);
      }
    };

    fetchBookings();
  }, [user]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex justify-center items-center bg-white mb-[40px] pt-[64px]"
    >
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl flex overflow-hidden">
        <Sidebar />

        <div className="w-3/4 p-10">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-semibold text-primary mb-8"
          >
            Mes Réservations
          </motion.h2>

          {error && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-red-600 mb-4"
            >
              {error}
            </motion.div>
          )}

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ProfileBookingsList bookings={bookings} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileBookingsPage;
