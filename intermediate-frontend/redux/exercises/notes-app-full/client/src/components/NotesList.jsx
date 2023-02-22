import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

const NotesList = () => {
  const notes = useSelector((state) => state.notes.items);
  const filterText = useSelector((state) => state.notes.filterText);
  const filteredNotes = notes
    .filter(
      (item) =>
        item.body.toLowerCase().includes(filterText.toLowerCase()) ||
        item.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .slice(0)
    .reverse();

  return (
    <div className="grid grid-cols-3 gap-4 ">
      {filteredNotes.map((item) => (
        <Note key={item.id} {...item} />
      ))}
    </div>
  );
};

export default NotesList;

