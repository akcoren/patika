import React from "react";
import { height, width } from "../constants";

const ColorPicker = ({ color, setColor, size }) => {
  const handleClick = (e) => {
    // console.log(e.target)
    // console.log(e.target.name)
    // console.log(e.target.value)
    setColor(e.target.value);
  };



  return (
    <div className="mr-3 flex gap-1 p-2">
      <button
        name="color-00"
        className={`${height[size]} ${width[size]} ${color === "0" ? "border-2" : ""}
        rounded-full border bg-skin-primary border-skin-inverted hover:border-2 hover:border-skin-primary`}
        onClick={handleClick}
        value="0"
        type="button"
      />
      <button
        name="color-01"
        className={`${height[size]} ${width[size]} ${color === "1" ? "border-2 border-skin-inverted" : "border-skin-primary"}
        rounded-full border bg-skin-note-01 hover:border-2`}
        onClick={handleClick}
        value="1"
        type="button"
      />
      <button
        name="color-02"
        className={`${height[size]} ${width[size]} ${color === "2" ? "border-2 border-skin-inverted" : "border-skin-primary"}
        rounded-full border bg-skin-note-02 hover:border-2`}
        onClick={handleClick}
        value="2"
        type="button"
      />
      <button
        name="color-03"
        className={`${height[size]} ${width[size]} ${color === "3" ? "border-2 border-skin-inverted" : "border-skin-primary"}
        rounded-full border bg-skin-note-03 hover:border-2`}        
        onClick={handleClick}
        value="3"
        type="button"
      />
      <button
        name="color-04"
        className={`${height[size]} ${width[size]} ${color === "4" ? "border-2 border-skin-inverted" : "border-skin-primary"}
        rounded-full border bg-skin-note-04 hover:border-2`}
        onClick={handleClick}
        value="4"
        type="button"
      />
      <button
        name="color-05"
        className={`${height[size]} ${width[size]} ${color === "5" ? "border-2 border-skin-inverted" : "border-skin-primary"}
        rounded-full border bg-skin-note-05 hover:border-2`}
        onClick={handleClick}
        value="5"
        type="button"
      />
      <button
        name="color-06"
        className={`${height[size]} ${width[size]} ${color === "6" ? "border-2 border-skin-inverted" : "border-skin-primary"}
        rounded-full border bg-skin-note-06 hover:border-2`}
        onClick={handleClick}
        value="6"
        type="button"
      />
      <button
        name="color-07"
        className={`${height[size]} ${width[size]} ${color === "7" ? "border-2 border-skin-inverted" : "border-skin-primary"}
        rounded-full border bg-skin-note-07 hover:border-2`}
        onClick={handleClick}
        value="7"
        type="button"
      />
      <button
        name="color-08"
        className={`${height[size]} ${width[size]} ${color === "8" ? "border-2 border-skin-inverted" : "border-skin-primary"}
        rounded-full border bg-skin-note-08 hover:border-2`}
        onClick={handleClick}
        value="8"
        type="button"
      />
      <button
        name="color-09"
        className={`${height[size]} ${width[size]} ${color === "9" ? "border-2 border-skin-inverted" : "border-skin-primary"}
        rounded-full border bg-skin-note-09 hover:border-2`}
        onClick={handleClick}
        value="9"
        type="button"
      />
      <button
        name="color-10"
        className={`${height[size]} ${width[size]} ${color === "10" ? "border-2 border-skin-inverted" : "border-skin-primary"}
        rounded-full border bg-skin-note-10 hover:border-2`}
        onClick={handleClick}
        value="10"
        type="button"
      />
      <button
        name="color-11"
        className={`${height[size]} ${width[size]} ${color === "11" ? "border-2 border-skin-inverted" : "border-skin-primary"}
        rounded-full border bg-skin-note-11 hover:border-2`}
        onClick={handleClick}
        value="11"
        type="button"
      />
    </div>
  );
};

export default ColorPicker;
