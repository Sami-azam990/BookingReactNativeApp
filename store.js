import { configureStore } from "@reduxjs/toolkit";
import SavedReducer from "./savedReducer";

export default configureStore({
  reducer: {
    booking: SavedReducer,
  },
});
