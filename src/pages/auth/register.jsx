import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import Popup from '../../components/popup/PopupRegister'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifiez si les mots de passe correspondent avant d'envoyer
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setShowPopup(true); // Afficher la popup pour l'erreur de correspondance
      return;
    }

    // Effacez les messages précédents
    setError('');
    setMessage('');

    const dataToSend = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: "USER",
    };

    try {
      const response = await fetch('http://localhost:8081/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const responseText = await response.text();

      if (response.ok) {
        setMessage(responseText || 'Inscription réussie !');
        setShowPopup(true);
      } else {
        setError(responseText || 'Une erreur s\'est produite.');
        setShowPopup(true);
      }
    } catch (error) {
      console.error('Erreur:', error);
      setError('Erreur de connexion au serveur.');
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex justify-center items-center py-10 bg-white">
      <div className="w-full max-w-md bg-[#f8f9fa] p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-[#347928] mb-6 text-center">Créer un Compte</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex items-center mb-1">
              <FaUser className="mr-2 text-[#347928]" />
              <label className="text-[#347928]">Nom</label>
            </div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-[#347928]"
              placeholder="Entrez votre nom"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-1">
              <FaEnvelope className="mr-2 text-[#347928]" />
              <label className="text-[#347928]">Adresse Email</label>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-[#347928]"
              placeholder="Entrez votre email"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-1">
              <FaLock className="mr-2 text-[#347928]" />
              <label className="text-[#347928]">Mot de Passe</label>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-[#347928]"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-1">
              <FaLock className="mr-2 text-[#347928]" />
              <label className="text-[#347928]">Confirmer le Mot de Passe</label>
            </div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-[#347928]"
              placeholder="Confirmez votre mot de passe"
              required
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label className="text-[#347928]">J'accepte les conditions d'utilisation</label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#347928] text-[#FFFBE6] px-4 py-2 rounded-lg font-bold hover:bg-[#C0EBA6] transition duration-300"
          >
            S'inscrire
          </button>
        </form>

        <p className="mt-4 text-center text-black">
          Vous avez déjà un compte ?{' '}
          <a href="/login" className="text-[#347928] hover:underline">
            Se connecter
          </a>
        </p>
      </div>

      {showPopup && (
        <Popup 
          message={error || message} 
          error={!!error} 
          onClose={closePopup} 
        />
)}

    </div>
  );
};

export default Register;
