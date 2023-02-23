import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";
import ColorPicker from "./ColorPicker";
import GenericButton from "./GenericButton";
import TextInputField from "./TextInputField";

const AddNoteForm = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.noteTitle.value);
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

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="w-full bg-slate-200">
      <form onSubmit={handleSubmit} className="flex flex-col items-center ">
        ADD NOTE FORM
        <div className="w-1/2 rounded-md shadow-md shadow-slate-600">
          <input
            type="text"
            name="noteTitle"
            id="noteTitle"
            className="text-md w-full border-b-2 rounded-t-md block border-b-gray-100 p-3 placeholder:text-gray-400 focus:outline-none"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
          <textarea
            type="text"
            name="noteBody"
            id="noteBody"
            className="block w-full pt-3 px-3 pb-0 rounded-b-md text-sm placeholder:text-gray-400 focus:outline-none h-64"
            value={body}
            onChange={handleBodyChange}
            placeholder="Body"
          />
          {/* <TextInputField name="noteTitle" value={title} onChange={handleTitleChange} /> */}
          {/* <TextInputField name="noteBody" value={body} onChange={handleBodyChange} /> */}
        </div>
          <TextInputField name="noteColor" value={color} onChange={handleColorChange} />
        <div className="flex py-2">
          <ColorPicker />
          <GenericButton type="submit" onClick={() => {}} buttonText="Add" />
        </div>
      </form>
    </div>
  );
};

export default AddNoteForm;
