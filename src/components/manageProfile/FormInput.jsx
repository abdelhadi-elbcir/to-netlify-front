import React from 'react';

const FormInput = ({ label, name, value, handleChange, type = 'text' }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300"
        placeholder={`Enter ${label.toLowerCase()}`}
        required
      />
    </div>
  );
};

export default FormInput;
