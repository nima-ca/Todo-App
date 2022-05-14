import { configureStore } from "@reduxjs/toolkit";
import ModalToggleReducer from "./ModalToggleSlice";
import dataHandlerReducer from "./DataHandlerSlice";

const store = configureStore({
  reducer: {
    modal: ModalToggleReducer,
    data: dataHandlerReducer,
  },
});

export default store;
