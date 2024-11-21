import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducer/movieSlice";
import tvReducer from "./reducer/tvSlice";
import peopleReducer from "./reducer/peopleSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    people: peopleReducer,
  },
});
