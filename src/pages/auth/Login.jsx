// Login.js

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../state/userSlice'; // Import du thunk
import { useNavigate } from 'react-router-dom';
import Popup from '../../components/popup/PopupRegister';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [popupMessage, setPopupMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (popupMessage) {
      setShowPopup(true);  
    }
  }, [popupMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Utilise le thunk pour faire l'appel API
      await dispatch(loginUser(formData.username, formData.password));

      // Si tout va bien, affiche un message de succès
      setPopupMessage('Connexion réussie !');
      setIsError(false);
      navigate('/');  // Redirection après connexion
    } catch (error) {
      // Si une erreur survient, affiche un message d'erreur
      setPopupMessage("Échec de la connexion. Vérifiez vos informations d'identification.");
      setIsError(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
    <div className="w-full max-w-md bg-[#f8f9fa] p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex items-center mb-1">
            <FaEnvelope className="mr-2 text-primary" />
            <label className="text-primary">UserName</label>
          </div>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-primary"
            placeholder="Entrez votre username"
            required
          />
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-1">
            <FaLock className="mr-2 text-primary" />
            <label className="text-primary">Mot de Passe</label>
          </div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-primary"
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-highlight px-4 py-2 rounded-lg font-bold hover:bg-secondary transition duration-300"
        >
          Se connecter
        </button>
      </form>
      <p className="mt-4 text-center text-black">
        Vous n'avez pas de compte ?{' '}
        <a href="/register" className="text-primary hover:underline">
          Créez votre compte
        </a>
      </p>
    </div>
      {showPopup && (
        <Popup 
          message={popupMessage} 
          error={isError} 
          onClose={() => setShowPopup(false)} 
          duration={3000} 
        />
      )}
    </div>
  );
};

export default Login;
