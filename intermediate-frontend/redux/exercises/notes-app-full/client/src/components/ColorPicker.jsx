import React from "react";

const ColorPicker = ({color, setColor}) => {
  
  const handleClick = (e) => {
    // console.log(e.target)
    // console.log(e.target.name)
    // console.log(e.target.value)
    setColor(e.target.value)
  }
 
  return (
    <div className="flex gap-1 mr-3 p-2">
      <button name="color-00" className="hover:border-2 hover:border-skin-primary border border-gray-700 h-6 w-6 rounded-full bg-skin-primary" onClick={handleClick} value="0" type="button" />
      <button name="color-01" className="hover:border-2 border-skin-primary h-6 w-6 rounded-full bg-skin-note-01" onClick={handleClick} value="1" type="button" />
      <button name="color-02" className="hover:border-2 border-skin-primary h-6 w-6 rounded-full bg-skin-note-02" onClick={handleClick} value="2" type="button" />
      <button name="color-03" className="hover:border-2 border-skin-primary h-6 w-6 rounded-full bg-skin-note-03" onClick={handleClick} value="3" type="button" />
      <button name="color-04" className="hover:border-2 border-skin-primary h-6 w-6 rounded-full bg-skin-note-04" onClick={handleClick} value="4" type="button" />
      <button name="color-05" className="hover:border-2 border-skin-primary h-6 w-6 rounded-full bg-skin-note-05" onClick={handleClick} value="5" type="button" />
      <button name="color-06" className="hover:border-2 border-skin-primary h-6 w-6 rounded-full bg-skin-note-06" onClick={handleClick} value="6" type="button" />
      <button name="color-07" className="hover:border-2 border-skin-primary h-6 w-6 rounded-full bg-skin-note-07" onClick={handleClick} value="7" type="button" />
      <button name="color-08" className="hover:border-2 border-skin-primary h-6 w-6 rounded-full bg-skin-note-08" onClick={handleClick} value="8" type="button" />
      <button name="color-09" className="hover:border-2 border-skin-primary h-6 w-6 rounded-full bg-skin-note-09" onClick={handleClick} value="9" type="button" />
      <button name="color-10" className="hover:border-2 border-skin-primary h-6 w-6 rounded-full bg-skin-note-10" onClick={handleClick} value="10" type="button" />
      <button name="color-11" className="hover:border-2 border-skin-primary h-6 w-6 rounded-full bg-skin-note-11" onClick={handleClick} value="11" type="button" />
    </div>
  );
};

export default ColorPicker;
