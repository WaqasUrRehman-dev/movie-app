import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    loadPeople: (state, action) => {
      state.info = action.payload;
    },
    removePeople: (state, action) => {
      state.info = null;
    },
  },
});

export const { loadPeople, removePeople } = peopleSlice.actions;
export default peopleSlice.reducer;
