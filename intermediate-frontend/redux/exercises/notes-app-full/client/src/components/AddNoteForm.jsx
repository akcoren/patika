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
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        ADD NOTE FORM
        <div className="w-1/2 rounded-md shadow-md shadow-skin-primary border-2 border-skin-primary">
          <input
            type="text"
            name="noteTitle"
            id="noteTitle"
            className="text-md block w-full rounded-t-md border-b-2 border-b-skin-seperator p-3 placeholder:text-skin-placeholder focus:outline-none bg-skin-primary"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
          <textarea
            type="text"
            name="noteBody"
            id="noteBody"
            className="block h-64 w-full rounded-b-md px-3 pt-3 pb-0 text-sm placeholder:text-skin-placeholder focus:outline-none bg-skin-primary"
            value={body}
            onChange={handleBodyChange}
            placeholder="What's on your mind?"
          />
          {/* <TextInputField name="noteTitle" value={title} onChange={handleTitleChange} /> */}
          {/* <TextInputField name="noteBody" value={body} onChange={handleBodyChange} /> */}
        </div>
        {/* <TextInputField name="noteColor" value={color} onChange={handleColorChange} /> */}
        <div className="flex py-2">
          <ColorPicker color={color} setColor={setColor} />
          <GenericButton type="submit" onClick={() => {}} buttonText="Add" />
        </div>
      </form>
    </div>
  );
};

export default AddNoteForm;
