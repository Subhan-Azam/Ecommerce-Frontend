import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log("response in fetchProducts", response.data);
    return response.data;
  }
);

export const allProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },

  reducers: {
    // singleProduct: (state, action) => {
    //   let id = action.payload;
    //   const filterProduct = state.products.filter(product => product.id !== id);
    //   state.products = filterProduct
    //   // console.log('single product slice', state.products)
    // },

    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // console.log("fetch products in extra reducer", action.payload);
      state.products = action.payload;
    });
  },
});

export const { setProducts } = allProductSlice.actions;
// export const { singleProduct } = allProductSlice.actions;
// export default allProductSlice.reducer;
