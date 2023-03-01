import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: "1",
        title: "Note 1",
        body: "Note_1_body",
        color: "1",
      },
      {
        id: "2",
        title: "Note 2",
        body: "Note_2_body",
        color: "2",
      },
      {
        id: "3",
        title: "Note 3",
        body: "Note_3_body",
        color: "3",
      },
      {
        id: "4",
        title: "Note 4",
        body: "Note_4_body",
        color: "4",
      },
      {
        id: "5",
        title: "Note 5",
        body: "Note_5_body",
        color: "5",
      },
      {
        id: "6",
        title: "Note 6",
        body: "Note_6_body",
        color: "6",
      },
      {
        id: "7",
        title: "Note 7 Title",
        body: "Note_7_body Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque hic, voluptates voluptas minus quasi aperiam. Quas, sed aliquam! Voluptates voluptas adipisci quo velit recusandae, accusamus voluptatem dolore labore quas voluptatibus suscipit laboriosam officia quasi? Quisquam, sit reprehenderit. Modi error, asperiores reiciendis nulla eos repudiandae, eligendi omnis officiis praesentium molestias ipsa?",
        color: "7",
      },
      {
        id: "8",
        title: "Note 8",
        body: "Note_8_body",
        color: "8",
      },
      {
        id: "9",
        title: "Note 9",
        body: "Note_9_body",
        color: "9",
      },
      {
        id: "10",
        title: "Note 10",
        body: "Note_10_body",
        color: "10",
      },
      {
        id: "11",
        title: "Note 11",
        body: "Note_11_body",
        color: "11",
      },
    ],
    filterText: "",
    error: null,
    theme: "theme-dark",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    changeNote: (state, action) => {
      const { id, title, body, color } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.title = title;
      item.body = body;
      item.color = color;
    },
    destroyNote: (state, action) => {
      const id = action.payload;
      const indexToRemove = state.items.findIndex((note) => note.id === id);
      state.items.splice(indexToRemove, 1);
    },
    changeFilterText: (state, action) => {
      state.filterText = action.payload;
    },
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { addNote, destroyNote, changeNote, changeFilterText, changeTheme } =
  notesSlice.actions;
export default notesSlice.reducer;

// colors are in the screenshot folder
