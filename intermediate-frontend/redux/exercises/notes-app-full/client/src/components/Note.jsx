import { stringify } from "postcss";
import React from "react";
import { useDispatch } from "react-redux";
import { destroyNote } from "../redux/notes/notesSlice";
import MyModal from "./MyModal";

const Note = ({ id, title, body, color }) => {
  const dispatch = useDispatch();

  const handleDestroy = (id) => {
    dispatch(destroyNote(id));
  };

  const noteColors = [
    "bg-skin-primary",
    "bg-skin-note-01",
    "bg-skin-note-02",
    "bg-skin-note-03",
    "bg-skin-note-04",
    "bg-skin-note-05",
    "bg-skin-note-06",
    "bg-skin-note-07",
    "bg-skin-note-08",
    "bg-skin-note-09",
    "bg-skin-note-10",
    "bg-skin-note-11",
  ];

  // you should not create this kind of tailwindcc class
  // let bgColor = "bg-[" + color + "]" + "flex min-w-[330px] max-w-[330px] flex-col rounded-md border p-2";

  return (
    <div
      className={`${noteColors[color]} group flex min-w-[330px] 
      max-w-[330px] flex-col rounded-md border p-2 text-skin-primary
      hover:border-skin-primary hover:shadow-lg hover:shadow-skin-primary`}>
      <MyModal title={title} body={body} id={id} color={color}/>

      <p className={`overflow-hidden break-words rounded p-1`}>{title}</p>
      <p className={`my-1 flex-grow break-words rounded p-1`}>{body}</p>
      <div className="flex items-center justify-between">
        <p className="p-1">{color}</p>
        <button
          className="border-skin-weak invisible rounded-md border bg-skin-button/50 py-2
           px-4 text-sm font-medium text-skin-button 
           shadow-sm hover:border-skin-primary
           hover:bg-skin-button-hover/20 hover:text-skin-button-hover
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
            group-hover:visible"
          onClick={() => handleDestroy(id)}
          type="button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
