import React from 'react';

const TextareaInput = ({ label, value, name, handleChange, placeholder, rows }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        className="border rounded-md w-full p-2"
        rows={rows}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextareaInput;
