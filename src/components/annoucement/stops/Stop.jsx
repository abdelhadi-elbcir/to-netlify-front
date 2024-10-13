import React from 'react';
import './Stop.css';

const Stop = ({ number, location, days, image, description }) => {
  return (
    <div className="stop">
      <div className="stop__number">{number}</div> {/* Number now in the line */}
      <div className="stop__details-wrapper">
        <div className="stop__header">
          <h3 className="stop__location">
            <span role="img" aria-label="location">📍</span> {location}
          </h3>
          <p className="stop__days">Day {days}</p>
        </div>

        <div className="stop__image-wrapper">
          <img src={image} alt={location} className="stop__image" />
        </div>

        <div className="stop__details">
          <p>{description}</p>
          <button className="stop__read-more">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Stop;
