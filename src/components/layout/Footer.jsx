import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [language, setLanguage] = useState("fr");
  const [currency, setCurrency] = useState("mad");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    
    <footer className="bg-gray text-primary py-10 border-t-2 border-primary-300">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        
        {/* Options: Langue et Devise */}
        <div className="flex-1 min-w-[200px] p-4">
          <h4 className="text-lg font-bold mb-3">Options</h4>
          <label htmlFor="language-select" className="block">Langue</label>
          <select
            id="language-select"
            className="block w-full p-2 border-2 border-primary rounded-md bg-white text-primary font-bold mt-1"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="fr">Français (FR)</option>
            <option value="en">Anglais (UK)</option>
          </select>
          <label htmlFor="currency-select" className="block mt-4">Devise</label>
          <select
            id="currency-select"
            className="block w-full p-2 border-2 border-primary rounded-md bg-white text-primary font-bold mt-1"
            value={currency}
            onChange={handleCurrencyChange}
          >
            <option value="mad">Dirham marocain (MAD)</option>
            <option value="usd">Dollar US ($)</option>
          </select>
        </div>

        {/* Entreprise */}
        <div className="flex-1 min-w-[200px] p-4">
          <h4 className="text-lg font-bold mb-3">Entreprise</h4>
          <ul>
            <li><a href="#" className="text-primary  hover:underline">À propos de nous</a></li>
            <li><a href="#" className="text-primary  hover:underline">Blog</a></li>
            <li><a href="#" className="text-primary  hover:underline">Salle de presse</a></li>
            <li><a href="#" className="text-primary  hover:underline">Carrières</a></li>
          </ul>
        </div>

        {/* Aide */}
        <div className="flex-1 min-w-[200px] p-4">
          <h4 className="text-lg font-bold mb-3">Aide</h4>
          <ul>
            <li><a href="#" className="text-primary hover:underline">Contactez-nous</a></li>
            <li><a href="#" className="text-primary hover:underline">FAQ</a></li>
            <li><a href="#" className="text-primary hover:underline">Conditions générales</a></li>
            <li><a href="#" className="text-primary hover:underline">Politique de confidentialité</a></li>
            <li><a href="#" className="text-primary hover:underline">Plan du site</a></li>
          </ul>
        </div>

        {/* Devenir guide */}
        <div className="flex-1 min-w-[200px] p-4">
          <h4 className="text-lg font-bold mb-3">Devenir guide</h4>
          <p><a href="#" className="text-primary hover:underline">Devenez guide pour Tripy.ma</a></p>
        </div>
      </div>

      <div className="text-center border-t border-gray-300 mt-6 pt-6">
        <p className="font-bold">Copyright © 2024 Tripy.ma. Tous droits réservés</p>
        <div className="mt-4">
          <a href="#" className="text-primary mx-2 text-2xl hover:text-secondary"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" className="text-primary mx-2 text-2xl hover:text-secondary"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="text-primary mx-2 text-2xl hover:text-secondary"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="text-primary mx-2 text-2xl hover:text-secondary"><FontAwesomeIcon icon={faPinterest} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
