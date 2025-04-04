import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authSlice";
import moviesReducer from "../reducers/moviesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
  },
});
