import React from 'react';

const ProfileButton = ({ href, label }) => {
  return (
    <div>
      <a
        href={href}
        className="bg-[#347928] text-[#FFFBE6] py-3 px-14 font-bold hover:bg-[#C0EBA6] mt-4"
      >
        {label}
      </a>
    </div>
  );
};

export default ProfileButton;