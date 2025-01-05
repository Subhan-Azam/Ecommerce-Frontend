import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCategories = createAsyncThunk(
  "category/fetchAllCategories",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    // console.log("fetchCategories bu api", response.data);
    return response.data;
  }
);

export const allCategoriesSlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      // console.log("fetch categories in extra reducer", action.payload);
      state.categories = action.payload;
    });
  },
});

export const { setCategories } = allCategoriesSlice.actions;
// export default allCategoriesSlice.reducer;
