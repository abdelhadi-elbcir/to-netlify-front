import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  const [language, setLanguage] = useState("fr");
  const [currency, setCurrency] = useState("mad");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    // Logique pour changer la langue de l'application
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    // Logique pour changer la devise de l'application
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Options: Langue et Devise */}
        <div className="footer-section">
          <h4>Options</h4>
          <label htmlFor="language-select">Langue</label>
          <select
            id="language-select"
            className="select-input"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="fr">Français (FR)</option>
            <option value="en">Anglais (UK)</option>
          </select>
          <label htmlFor="currency-select">Devise</label>
          <select
            id="currency-select"
            className="select-input"
            value={currency}
            onChange={handleCurrencyChange}
          >
            <option value="mad">Dirham marocain (MAD)</option>
            <option value="usd">Dollar US ($)</option>
          </select>
        </div>

        {/* Entreprise */}
        <div className="footer-section">
          <h4>Entreprise</h4>
          <ul>
            <li><a href="#">À propos de nous</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Salle de presse</a></li>
            <li><a href="#">Carrières</a></li>
          </ul>
        </div>

        {/* Aide */}
        <div className="footer-section">
          <h4>Aide</h4>
          <ul>
            <li><a href="#">Contactez-nous</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Conditions générales</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Plan du site</a></li>
          </ul>
        </div>

        {/* Devenir guide */}
        <div className="footer-section">
          <h4>Devenir guide</h4>
          <p><a href="#">Devenez guide pour Tripy.ma</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 Tripy.ma. Tous droits réservés</p>
        <div className="social-media">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
