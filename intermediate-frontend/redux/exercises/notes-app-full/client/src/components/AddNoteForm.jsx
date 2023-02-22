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
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        ADD NOTE FORM
        <div >
          <TextInputField name="noteTitle" value={title} onChange={handleTitleChange} />
          <TextInputField name="noteBody" value={body} onChange={handleBodyChange} />
          <TextInputField name="noteColor" value={color} onChange={handleColorChange} />
        </div>
        <div className="flex py-2">
          <ColorPicker />
          <GenericButton type="submit" onClick={() => {}} buttonText="Add" />
        </div>
      </form>
    </div>
  );
};

export default AddNoteForm;
