import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const char_limit = 12

export const fetchCharacters = createAsyncThunk('characters/getCharacters', async (page) => {
  const res = await axios(`${import.meta.env.VITE_API_BASE_ENDPOINT}/characters?_page=${page}&_limit=${char_limit}`)
  return res.data
})

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    people: [],
    status: "idle",
    error: null,
    page: 1,
    hasNextPage: true,
  },
  reducers: {
    clearCharactersState: (state) => {
      state.people = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      if (action.payload.length < 12) {
        state.hasNextPage = false
      }
      state.people = [...state.people, ...action.payload]
      state.status = "succeeded"
      state.page += 1
    });
    builder.addCase(fetchCharacters.pending, (state, action) => {
      state.isLoading = "loading"
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.isLoading = "failed"
      state.error = action.error.message
    });

  }

});
export const { clearCharactersState } = charactersSlice.actions;
export default charactersSlice.reducer;