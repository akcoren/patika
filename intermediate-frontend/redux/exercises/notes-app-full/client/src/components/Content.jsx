import React from "react";
import AddNoteForm from "./AddNoteForm";
import NoteSearchBox from "./NoteSearchBox";
import NotesList from "./NotesList";

const Content = () => {
  return (
    <div>
      Content
      <NoteSearchBox />
      <AddNoteForm />
      <NotesList />
    </div>
  );
};

export default Content;
