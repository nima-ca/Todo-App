import { createSlice } from "@reduxjs/toolkit";

const initialState = { isShown: false };

const modalToggleSlice = createSlice({
  name: "modalToggle",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isShown = !state.isShown;
    },
  },
});

export const toggleModalActions = modalToggleSlice.actions;
export default modalToggleSlice.reducer;
