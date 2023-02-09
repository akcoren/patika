import counterReducer from "./counter/counterSlice";

const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});




