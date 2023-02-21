import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: "1",
        title: "Note 1",
        body: "Note_1_body",
        color: "#ff0000",
      },
      {
        id: "2",
        title: "Note 2",
        body: "Note_2_body",
        color: "#00ff00",
      },
      {
        id: "3",
        title: "Note 3",
        body: "Note_3_body",
        color: "#0000ff",
      },
      {
        id: "4",
        title: "Note 4",
        body: "Note_4_body",
        color: "#ffff00",
      },
      {
        id: "5",
        title: "Note 5",
        body: "Note_5_body",
        color: "#00ffff",
      },
    ],
    filterText: "",
    error: null,
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    destroyNote: (state, action) => {
      const id = action.payload
      const indexToRemove = state.items.findIndex((note) => note.id === id)
      state.items.splice(indexToRemove, 1);
    },
    changeFilterText: (state, action) => {
      state.filterText = action.payload
    }
  },
});

export const { addNote, destroyNote, changeFilterText } = notesSlice.actions;
export default notesSlice.reducer;



// colors are in the screenshot folder

