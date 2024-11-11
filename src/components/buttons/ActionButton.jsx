import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActionButton = ({ href, label, isNavigable }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isNavigable) {
      navigate(href); 
    } else {
      window.location.href = href; 
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-primary text-[#FFFBE6] py-3 px-14 font-bold shadow-md hover:bg-secondary transition-colors duration-200"
    >
      {label}
    </button>
  );
};

export default ActionButton;
