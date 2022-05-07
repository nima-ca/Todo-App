import { createSlice } from "@reduxjs/toolkit";

const initialState = { isToggled: false, type: null };

const modalToggleSlice = createSlice({
  name: "modalToggle",
  initialState,
  reducers: {
    toggleModal: (state, actions) => {
      state.isToggled = !state.isToggled;
      state.type = actions.payload;
    },
  },
});

export const toggleModalActions = modalToggleSlice.actions;
export default modalToggleSlice.reducer;
