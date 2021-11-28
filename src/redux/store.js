import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./slices/gallerySlice";

const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});

export default store;
