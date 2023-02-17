import { createSlice } from "@reduxjs/toolkit";
import { addTodosAsync, removeTodosAsync, toggleTodosAsync, getTodosAsync, removeCompletedTodosAsync } from "./services";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    activeFilter: localStorage.getItem("activeFilter"),
    addNewTodo: {
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => !item.completed);
      state.items = filtered;
    },
  },
  extraReducers: (builder) => {
    // get todos
    builder.addCase(getTodosAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTodosAsync.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTodosAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // add todo
    builder.addCase(addTodosAsync.pending, (state, action) => {
      state.addNewTodo.isLoading = true;
    });
    builder.addCase(addTodosAsync.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.addNewTodo.isLoading = false;
    });
    builder.addCase(addTodosAsync.rejected, (state, action) => {
      state.addNewTodo.isLoading = false;
      state.addNewTodo.error = action.error.message;
    });

    // toggle todo
    builder.addCase(toggleTodosAsync.fulfilled, (state, action) => {
      const { id, completed } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items[index].completed = completed;
    });

    // remove todo
    builder.addCase(removeTodosAsync.fulfilled, (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items.splice(index, 1);
    });

    // remove completed
    builder.addCase(removeCompletedTodosAsync.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const selectTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  } else {
    return state.todos.items.filter((todo) =>
      state.todos.activeFilter === "active" ? todo.completed === false : todo.completed === true
    );
  }
};

export const { toggleTodo, destroyTodo, changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;
