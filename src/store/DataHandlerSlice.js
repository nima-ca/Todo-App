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
    editTask: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.description = action.payload.description;
          item.status = action.payload.status;
          item.id = action.payload.id;
          state.panelData = [{ ...item }];
        }
        return item;
      });
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
