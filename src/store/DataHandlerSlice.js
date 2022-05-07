import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [], panelData: [] };

const dataHandler = createSlice({
  name: "DataHandler",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteTask: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    addPanelTask: (state, action) => {
      state.panelData = [action.payload];
    },
    clearPanel: (state) => {
      state.panelData.pop();
    },
  },
});

export const dataHandlerActions = dataHandler.actions;
export default dataHandler.reducer;
