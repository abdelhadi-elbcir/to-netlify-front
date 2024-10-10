
import React from 'react';

const SelectInput = ({ label, value, name, handleChange, options }) => {
  return (
    <div className="flex-1">
      <label className="block text-gray-700 mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="border  w-full py-2"
      >
        <option value="">Sélectionnez une option</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
