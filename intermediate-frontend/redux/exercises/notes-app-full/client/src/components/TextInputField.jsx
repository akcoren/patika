import React from "react";

const TextInputField = ({name, value, onChange}) => {
  // theme should be same in all text input fields, this component should get 
  // size values as prop

  return (
    <div>
      <input
        type="text"
        name={name}
        id={name}
        className="my-1 block rounded-md border-gray-300 p-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInputField;
