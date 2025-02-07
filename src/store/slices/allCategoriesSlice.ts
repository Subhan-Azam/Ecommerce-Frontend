import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CategoryState, Category } from "../../types/types";
import { axiosInstance } from "../../utils/utils.ts";

export const fetchAllCategories = createAsyncThunk<Category[]>(
  "category/fetchAllCategories",
  async () => {
    const response = await axiosInstance.get("/categories");
    return response.data;
  }
);

export const allCategoriesSlice = createSlice({
  name: "category",
  initialState: {
    allCategories: [],
    status: "idle",
    loading: false,
    error: null,
  } as CategoryState,

  reducers: {
    setAllCategories: (state, action: PayloadAction<Category[]>) => {
      state.allCategories = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.allCategories = action.payload;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setAllCategories } = allCategoriesSlice.actions;

export default allCategoriesSlice.reducer;
