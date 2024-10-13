import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center py-10 bg-[#FFFBE6]">
    
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
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
    </div>
  );
};

export default Register;
