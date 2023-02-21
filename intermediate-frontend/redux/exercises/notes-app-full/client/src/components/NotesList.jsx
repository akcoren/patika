import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { destroyNote } from "../redux/notes/notesSlice";

const NotesList = () => {
  const dispatch = useDispatch(); // will be used for destroy note
  const notes = useSelector((state) => state.notes.items);

  const handleDestroy = (id) => {
    dispatch(destroyNote(id))
  }

  return (
    <div>
      {notes.map((item) => (
        <li key={item.id}>
          {item.title} {item.color}
          <button 
          className="m-1 rounded-lg border-2 border-slate-900 bg-slate-100 p-1"
          onClick={() => handleDestroy(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default NotesList;
