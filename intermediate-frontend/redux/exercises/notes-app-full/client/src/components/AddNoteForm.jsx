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
        ADD NOTE FORM
        <div className="w-1/2 rounded-md border-2 border-skin-primary shadow-md shadow-skin-primary">
          <input
            type="text"
            name="noteTitle"
            id="noteTitle"
            className={`${noteColors[color]} text-md block w-full rounded-t-md border-b-2 border-b-skin-seperator p-3 placeholder:text-skin-placeholder focus:outline-none`}
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
          <textarea
            rows={3}
            type="text"
            name="noteBody"
            id="noteBody"
            ref={textAreaRef}
            className={`w-full break-all focus:outline-none
            ${noteColors[color]} block max-h-[60vh] w-full
            overflow-y-auto rounded-b-md p-3 text-sm group-focus:min-h-[10rem]`}
            value={body}
            onChange={handleBodyChange}
            placeholder="What's on your mind?"
          />
        </div>
        <div className="flex py-2">
          <ColorPicker color={color} setColor={setColor} size={6} />
          <button
            className="rounded-md border border-skin-primary bg-skin-menu-button py-2 px-4 text-sm font-medium text-skin-button
            shadow-sm hover:bg-skin-button-hover hover:text-skin-menu-button-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            type="submit">
            Add
          </button>
          {/* <GenericButton type="submit" onClick={() => {}} buttonText="Add" /> */}
        </div>
      </form>
    </div>
  );
};

export default AddNoteForm;
