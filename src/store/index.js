import { configureStore } from "@reduxjs/toolkit";
import ModalToggleReducer from "./ModalToggleSlice";
import dataHandlerReducer from "./DataHandlerSlice";
import PanelDataReducer from "./PanelDataSlice";

const store = configureStore({
  reducer: {
    modal: ModalToggleReducer,
    data: dataHandlerReducer,
    panelData: PanelDataReducer,
  },
});

export default store;
