import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// api 처리
export const getPhotos = createAsyncThunk();

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    photos: [],
    isLoading: false,
  },
});

export default gallerySlice.reducer;
