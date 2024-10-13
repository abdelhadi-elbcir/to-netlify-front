import React from 'react';

const RaduisButton = ({ href, label }) => {
  return (
    <div>
      <a
        href={href}
        className="bg-[#FFFBE6] text-[#347928] py-2 px-4 rounded-lg font-bold hover:bg-[#C0EBA6]"
      >
        {label}
      </a>
    </div>
  );
};

export default RaduisButton;
