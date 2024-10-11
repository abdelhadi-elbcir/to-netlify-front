import React from 'react';
import { Star } from 'lucide-react';
import "./AnnouncementCard.css";


const AnnouncementCard = ({ image, title, duration, transport, familyPlan, rating, reviews, price }) => {
  return (
    <div className="announcement-card">
      <img src={image} alt={title} className="announcement-card__image" />
      <h3 className="announcement-card__title">{title}</h3>
      <div className="announcement-card__details">
        <p>Duration: {duration}</p>
        <p>{transport}</p>
        <p>{familyPlan}</p>
      </div>
      <div className="announcement-card__rating">
        {[...Array(5)].map((_, i) => (
          <Star key={i} fill={i < Math.floor(rating) ? "#FFD700" : "none"} stroke="#FFD700" size={16} />
        ))}
        <span>{rating}</span>
        <span className="announcement-card__reviews">({reviews} reviews)</span>
      </div>
      <div className="announcement-card__price">
        ${price}
        <span className="announcement-card__price-note">per person</span>
      </div>
    </div>
  );
};

export default AnnouncementCard;
