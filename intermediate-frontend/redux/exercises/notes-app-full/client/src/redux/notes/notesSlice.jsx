import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        title: "Note 1",
        color: "#ff0000",
      },
      {
        title: "Note 2",
        color: "#00ff00",
      },
      {
        title: "Note 3",
        color: "#0000ff",
      },
      {
        title: "Note 4",
        color: "#ffff00",
      },
      {
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
  },
});

export default notesSlice.reducer;
