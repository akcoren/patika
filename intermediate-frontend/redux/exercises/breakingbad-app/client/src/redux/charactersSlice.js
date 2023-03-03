import { createSlice, createAsyncThunk, isPending } from '@reduxjs/toolkit'
import axios from 'axios'

const char_limit = 12

export const fetchCharacters = createAsyncThunk('characters/getCharacters', async () => {
  const res = await axios(`${import.meta.env.VITE_API_BASE_ENDPOINT}/characters?_page=1&_limit=${char_limit}`)
  return res.data
})

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    people: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.people = action.payload
      state.isLoading = false
    });
    builder.addCase(fetchCharacters.pending, (state, action) => {
      state.isLoading = true
    });
    builder.addCase(fetchCharacters.rejected, (state,action) => {
      state.isLoading = false
      state.error = action.error.message
    });

  }

});

export default charactersSlice.reducer;