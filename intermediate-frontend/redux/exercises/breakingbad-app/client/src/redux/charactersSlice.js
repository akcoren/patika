import { createSlice, createAsyncThunk, isPending } from '@reduxjs/toolkit'
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
    isLoading: false,
    error: null,
    page: 0,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      if(action.payload.length < 12) {
        state.hasNextPage = false
      }
      state.people = [...state.people, ...action.payload]
      state.isLoading = false
      state.page += 1
    });
    builder.addCase(fetchCharacters.pending, (state, action) => {
      state.isLoading = true
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    });

  }

});

export default charactersSlice.reducer;