import React from 'react';

const RaduisButton = ({ href, label }) => {
  return (
    <div>
      <a
        href={href}
        className="bg-primary text-[#FFFBE6] py-2 px-4 rounded-lg font-bold hover:bg-seconsary"
      >
        {label}
      </a>
    </div>
  );
};

export default RaduisButton;
