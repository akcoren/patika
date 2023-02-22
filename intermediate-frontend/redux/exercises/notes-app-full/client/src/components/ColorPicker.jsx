import React from "react";

const ColorPicker = () => {
  return (
    <div className="flex gap-1 mr-3">
      <div className="h-8 w-8 rounded-full bg-green-700" />
      <div className="h-8 w-8 rounded-full bg-red-700" />
      <div className="h-8 w-8 rounded-full bg-yellow-700" />
      <div className="h-8 w-8 rounded-full bg-blue-700" />
      <div className="h-8 w-8 rounded-full bg-pink-700" />
    </div>
  );
};

export default ColorPicker;
