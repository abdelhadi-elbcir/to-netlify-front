import React from 'react';

const Button = ({ href, label }) => {
  return (
    <div>
      <a
        href={href}
        className="bg-primary text-[#FFFBE6] py-3 px-4 font-bold hover:bg-secondary"
      >
        {label}
      </a>
    </div>
  );
};

export default Button;
