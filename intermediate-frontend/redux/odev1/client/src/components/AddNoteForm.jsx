import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";
import ColorPicker from "./ColorPicker";
import { noteColors } from "../constants";

const AddNoteForm = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("0");
  const [body, setBody] = useState("");

  const textAreaRef = useRef(null);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  useEffect(resizeTextArea, [body]);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addNote({
        id: nanoid(),
        title: title,
        body: body,
        color: color,
      })
    );
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div className="group w-full">
      <form onSubmit={handleSubmit} className="flex flex-col items-center text-skin-primary">
        <div
          className={`${noteColors[color]} w-1/2 rounded-md border-2 border-skin-primary 
          shadow-md shadow-skin-primary`}>
          <input
            type="text"
            name="noteTitle"
            id="noteTitle"
            className={`${noteColors[color]} text-md block w-full rounded-t-md 
            border-b-2 border-b-skin-seperator p-3 focus:outline-none`}
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
          <textarea
            rows={4}
            type="text"
            name="noteBody"
            id="noteBody"
            ref={textAreaRef}
            className={`w-full resize-none break-all focus:outline-none
            ${noteColors[color]} block max-h-[60vh] w-full
            overflow-y-auto rounded-b-md p-3 text-sm group-focus:min-h-[10rem]`}
            value={body}
            onChange={handleBodyChange}
            placeholder="What's on your mind?"
          />
        </div>
        <div className="flex py-2">
          <ColorPicker color={color} setColor={setColor} size={7} />
          <button
            className="rounded-md border border-skin-primary bg-skin-menu-button 
            px-3 text-sm font-medium text-skin-button h-9 my-auto
            shadow-sm hover:bg-skin-button-hover/20 hover:text-skin-menu-button-hover"
            type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNoteForm;
