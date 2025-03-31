import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMoviesAB } from "../services/movie_api";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMoviesAB",
  async () => {
    return await fetchMoviesAB();
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      });
  },
});

export default moviesSlice.reducer;
