import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReviews = createAsyncThunk(
  "review/fetchReviews",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=5"
    );
    console.log("fetch fetchReviews from api", response.data);
    return response.data;
  }
);

export const allReviewsSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
  },
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
    console.log("fetch categories in extra reducer", action.payload);

      state.reviews = action.payload;
    });
  },
});


export const {setReviews} = allReviewsSlice.actions;