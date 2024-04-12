import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cat: []
};

const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    setCatInfo: (state, action) => {
      state.cat = action.payload;
    },
  },
});

export const { setCatInfo } = catSlice.actions;
export default catSlice.reducer;