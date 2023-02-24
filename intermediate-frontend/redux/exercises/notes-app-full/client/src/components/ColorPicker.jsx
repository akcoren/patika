import React from "react";

const ColorPicker = ({color, setColor}) => {
  
  const handleClick = (e) => {
    // console.log(e.target)
    // console.log(e.target.name)
    // console.log(e.target.value)
    setColor(e.target.value)
  }
 
  return (
    <div className="flex gap-1 mr-3">
      <button name="color01" className="h-6 w-6 rounded-full bg-skin-note-01" onClick={handleClick} value="note01" type="button" />
      <button name="color02" className="h-6 w-6 rounded-full bg-skin-note-02" onClick={handleClick} value="note02" type="button" />
      <button name="color03" className="h-6 w-6 rounded-full bg-skin-note-03" onClick={handleClick} value="note03" type="button" />
      <button name="color04" className="h-6 w-6 rounded-full bg-skin-note-04" onClick={handleClick} value="note04" type="button" />
      <button name="color05" className="h-6 w-6 rounded-full bg-skin-note-05" onClick={handleClick} value="note05" type="button" />
      <button name="color06" className="h-6 w-6 rounded-full bg-skin-note-06" onClick={handleClick} value="note06" type="button" />
      <button name="color07" className="h-6 w-6 rounded-full bg-skin-note-07" onClick={handleClick} value="note07" type="button" />
      <button name="color08" className="h-6 w-6 rounded-full bg-skin-note-08" onClick={handleClick} value="note08" type="button" />
      <button name="color09" className="h-6 w-6 rounded-full bg-skin-note-09" onClick={handleClick} value="note09" type="button" />
      <button name="color10" className="h-6 w-6 rounded-full bg-skin-note-10" onClick={handleClick} value="note10" type="button" />
      <button name="color11" className="h-6 w-6 rounded-full bg-skin-note-11" onClick={handleClick} value="note11" type="button" />
    </div>
  );
};

export default ColorPicker;
