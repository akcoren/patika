import React from "react";
import AddNoteForm from "./AddNoteForm";
import NoteSearchBox from "./NoteSearchBox";
import NotesList from "./NotesList";

const Content = () => {
  return (
    <div className="flex flex-col items-center">
      Content
      <NoteSearchBox />
      <AddNoteForm />
      <NotesList />
    </div>
  );
};

export default Content;
