import React from 'react';

const InputGroup = ({ label, name, value, placeholder, type, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={name} />
      <input
        type={type}
        name={name}
        className="text-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroup;
