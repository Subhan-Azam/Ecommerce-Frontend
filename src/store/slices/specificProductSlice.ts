import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSpecificProduct = createAsyncThunk(
  "specificProduct/fetchSpecificProduct",
  async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/jewelery`
    );
    console.log("response in fetchSpecificProduct api", response.data);

    return response.data;
  }
);

export const specificProductSlice = createSlice({
  name: "specificProduct",
  initialState: {
    specificProducts: [],
  },
  reducers: {
    setSpecificProduct: (state, action) => {
      state.specificProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSpecificProduct.fulfilled, (state, action) => {
      console.log("fetch specific products in extra reducer", action.payload);

      state.specificProducts = action.payload;
    });
  },
});

export const { setSpecificProduct } = specificProductSlice.actions;