import { createSlice } from "@reduxjs/toolkit";

const initialState = { panelData: [] };

const PanelDataHandler = createSlice({
  name: "PanelDataHandler",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.panelData = [action.payload];
    },
    clearPanel: (state) => {
      state.panelData.pop();
    },
  },
});

export const panelDataActions = PanelDataHandler.actions;
export default PanelDataHandler.reducer;
