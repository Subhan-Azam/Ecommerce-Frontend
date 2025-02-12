import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Review, ReviewState } from "../../types/types";
import { axiosInstance } from "../../utils/utils.ts";

export const fetchReviews = createAsyncThunk<Review[]>(
  "review/fetchReviews",
  async () => {
    const response = await axiosInstance.get("?limit=5");
    return response.data;
  }
);

export const allReviewsSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
    loading: false,
    error: null,
  } as ReviewState,

  reducers: {
    setReviews: (state, action: PayloadAction<Review[]>) => {
      state.reviews = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setReviews } = allReviewsSlice.actions;

export default allReviewsSlice.reducer;
