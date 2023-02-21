import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";

const AddNoteButton = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.noteText.value)
    dispatch(addNote({
      id: nanoid(),
      title: title,
      color: color,
    }))
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="noteText"
        id="noteText"
        className="block rounded-md border-gray-300 p-2 my-1 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="noteColor"
        id="noteColor"
        className="block rounded-md border-gray-300 p-2 my-1 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 my-1">
        Add
      </button>
    </form>
  );
};

export default AddNoteButton;
