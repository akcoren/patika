import React from "react";
import HeadlessUI from "./HeadlessUI";
import MyDropdown from "./MyDropdown";

const ThemeSwitch = () => {
  return (
    <div className="flex flex-col pr-3 pt-3">
      ThemeSwitch
      <HeadlessUI />
      <MyDropdown />
    </div>
  );
};

export default ThemeSwitch;
