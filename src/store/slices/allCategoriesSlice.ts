// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchAllCategories = createAsyncThunk(
//   "category/fetchAllCategories",
//   async () => {
//     const response = await axios.get("https://fakestoreapi.com/products/categories");
//     return response.data;
//   }
// );

// export const allCategoriesSlice = createSlice({
//   name: "category",
//   initialState: {
//     allCategories: [],
//   },
//   reducers: {
//     setAllCategories: (state, action) => {
//       state.allCategories = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
//       state.allCategories = action.payload;
//     });
//   },
// });

// export const { setAllCategories } = allCategoriesSlice.actions;



import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type Category = string;

interface CategoryState {
  allCategories: Category[];
}

export const fetchAllCategories = createAsyncThunk<Category[]>(
  "category/fetchAllCategories",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response.data;
  }
);

export const allCategoriesSlice = createSlice({
  name: "category",
  initialState: {
    allCategories: [],
  } as CategoryState,

  reducers: {
    setAllCategories: (state, action: PayloadAction<Category[]>) => {
      state.allCategories = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.allCategories = action.payload;
    });
  },
});

export const { setAllCategories } = allCategoriesSlice.actions;

export default allCategoriesSlice.reducer;
