import React from "react";
import { useDispatch } from "react-redux";
import { destroyNote } from "../redux/notes/notesSlice";
import GenericButton from "./GenericButton";

const Note = ({ id, title, body, color }) => {
  const dispatch = useDispatch();

  const handleDestroy = (id) => {
    dispatch(destroyNote(id));
  };

  return (
    <div className="flex min-w-[330px] max-w-[330px] flex-col rounded-md border p-2">
      <p className="overflow-hidden break-words bg-slate-300 rounded p-1">{title}</p>
      <p className="flex-grow break-words bg-slate-400 rounded p-1 my-1">{body}</p>
      <div className="flex justify-between items-center">
        <p>{color}</p>
        <GenericButton
          className=""
          type="button"
          onClick={() => handleDestroy(id)}
          buttonText="Delete"
        />
      </div>
    </div>
  );
};

export default Note;
