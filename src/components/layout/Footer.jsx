import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"; 

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
    <footer className="bg-gray-200 text-primary py-10 border-t-2 border-primary-300">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        
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

        <div className="flex-1 min-w-[200px] p-4">
          <h4 className="text-lg font-bold mb-3">Entreprise</h4>
          <ul>
            <li><Link to="/about" className="text-primary hover:underline">À propos de nous</Link></li>
            <li><Link to="/blog" className="text-primary hover:underline">Blog</Link></li>
            <li><Link to="/press" className="text-primary hover:underline">Salle de presse</Link></li>
            <li><Link to="/careers" className="text-primary hover:underline">Carrières</Link></li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px] p-4">
          <h4 className="text-lg font-bold mb-3">Aide</h4>
          <ul>
            <li><Link to="/contact" className="text-primary hover:underline">Contactez-nous</Link></li>
            <li><Link to="/faq" className="text-primary hover:underline">FAQ</Link></li>
            <li><Link to="/terms" className="text-primary hover:underline">Conditions générales</Link></li>
            <li><Link to="/privacy" className="text-primary hover:underline">Politique de confidentialité</Link></li>
            <li><Link to="/sitemap" className="text-primary hover:underline">Plan du site</Link></li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px] p-4">
          <h4 className="text-lg font-bold mb-3">Devenir guide</h4>
          <p><Link to="/become-a-guide" className="text-primary hover:underline">Devenez guide pour Tripy.ma</Link></p>
        </div>
      </div>

      <div className="text-center border-t border-gray-300 mt-6 pt-6">
        <p className="font-bold">Copyright © 2024 Tripy.ma. Tous droits réservés</p>
        <div className="mt-4">
          <Link to="/facebook" className="text-primary mx-2 text-2xl hover:text-secondary"><FontAwesomeIcon icon={faFacebook} /></Link>
          <Link to="/twitter" className="text-primary mx-2 text-2xl hover:text-secondary"><FontAwesomeIcon icon={faTwitter} /></Link>
          <Link to="/instagram" className="text-primary mx-2 text-2xl hover:text-secondary"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link to="/pinterest" className="text-primary mx-2 text-2xl hover:text-secondary"><FontAwesomeIcon icon={faPinterest} /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
