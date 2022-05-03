import { createSlice } from "@reduxjs/toolkit";

const initialState = { isToggled: false };

const modalToggleSlice = createSlice({
  name: "modalToggle",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isToggled = !state.isToggled;
    },
  },
});

export const toggleModalActions = modalToggleSlice.actions;
export default modalToggleSlice.reducer;
