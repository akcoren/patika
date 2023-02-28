import React from "react";
import AddNoteForm from "./AddNoteForm";
import Heading from "./Heading";
import NoteSearchBox from "./NoteSearchBox";
import NotesList from "./NotesList";
const Content = () => {
  return (
    <div className="flex flex-col items-center bg-skin-primary">
      <Heading />
      <NoteSearchBox />
      <AddNoteForm />
      <NotesList />
    </div>
  );
};

export default Content;
