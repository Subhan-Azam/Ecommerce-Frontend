import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "../../types/types";
import { axiosInstance } from "../../utils/utils.ts";

export const fetchProducts = createAsyncThunk<Product[]>(
  "product/fetchProducts",
  async () => {
    const response = await axiosInstance.get("/");
    return response.data;
  }
);

export const allProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    filteredProducts: [],
    loading: false,
    error: null,
    status: "idle",
  } as ProductState,

  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setProducts } = allProductSlice.actions;
export default allProductSlice.reducer;
