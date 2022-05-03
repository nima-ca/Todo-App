import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };

const dataHandler = createSlice({
  name: "DataHandler",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const dataHandlerActions = dataHandler.actions;
export default dataHandler.reducer;
