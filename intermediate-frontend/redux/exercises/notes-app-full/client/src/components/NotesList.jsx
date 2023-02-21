import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

const NotesList = () => {
  const notes = useSelector((state) => state.notes.items);
  const filterText = useSelector((state) => state.notes.filterText);
  const filteredNotes = notes.filter(
    (item) => item.body.includes(filterText) || item.title.includes(filterText)
  );

  return (
    <div>
      {filteredNotes.map((item) => (
        <Note key={item.id} {...item} />
      ))}
    </div>
  );
};

export default NotesList;
