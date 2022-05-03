import { configureStore } from "@reduxjs/toolkit";
import ModalToggleReducer from "./ModalToggleSlice";

const store = configureStore({
  reducer: { modal: ModalToggleReducer },
});

export default store;
