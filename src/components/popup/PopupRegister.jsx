import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Popup = ({ message, error, onClose, duration = 3000 }) => {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 100) {
          clearInterval(timer);
          onClose(); // Ferme le popup lorsque le timer atteint 0
          return 0;
        }
        return prev - 100; // Diminue le temps restant de 100ms
      });
    }, 100); // Mise à jour toutes les 100 ms

    return () => clearInterval(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-5 right-10 z-50 flex items-center justify-center">
      <div
        className={`bg-white p-4 rounded-lg shadow-lg ${error ? 'border-red-500' : 'border-green-500'} border relative`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[#347928]">
            {error ? 'Erreur' : 'Succès'}
          </h3>
          <div onClick={onClose} className="cursor-pointer">
            <FaTimes className="text-[#347928] hover:text-red-500 transition duration-200" size={20} />
          </div>
        </div>
        <p className="mt-2 text-center">{message}</p>
        <div className="relative h-1 bg-gray-200 mt-2">
          <div
            className="absolute h-full bg-[#347928]"
            style={{
              width: `${(remainingTime / duration) * 100}%`,
              transition: 'width 0.1s linear', // Transition fluide lors de la diminution
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
