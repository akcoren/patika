import React from "react";
import AddNoteButton from "./AddNoteButton";
import Note from "./Note";
import NotesList from "./NotesList";

const Content = () => {
  return (
    <div>
      Content
      <AddNoteButton />
      <NotesList />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default Content;
