import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: "1",
        title: "Note 1",
        color: "#ff0000",
      },
      {
        id: "2",
        title: "Note 2",
        color: "#00ff00",
      },
      {
        id: "3",
        title: "Note 3",
        color: "#0000ff",
      },
      {
        id: "4",
        title: "Note 4",
        color: "#ffff00",
      },
      {
        id: "5",
        title: "Note 5",
        color: "#00ffff",
      },
    ],
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
    }
  },
});

export const { addNote, destroyNote } = notesSlice.actions;
export default notesSlice.reducer;
