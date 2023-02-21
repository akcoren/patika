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
    <div>
      {title} {body} {color}
      <GenericButton type="button" onClick={() => handleDestroy(id)} buttonText="Delete" />
    </div>
  );
};

export default Note;
