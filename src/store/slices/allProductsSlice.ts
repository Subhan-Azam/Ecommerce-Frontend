// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Fetch all products
// export const fetchProducts = createAsyncThunk(
//   "product/fetchProducts",
//   async () => {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     return response.data;
//   }
// );

// // Fetch products by category
// export const fetchProductsByCategory = createAsyncThunk(
//   "product/fetchProductsByCategory",
//   async (category) => {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     const filteredProducts = response.data.filter(
//       (product) => product.category === category
//     );
//     return filteredProducts;
//   }
// );

// export const allProductSlice = createSlice({
//   name: "product",
//   initialState: {
//     products: [], // All products
//     filteredProducts: [], // Products filtered by category
//     loading: false,
//     error: null,
//     status: "idle",
//   },

//   reducers: {
//     setProducts: (state, action) => {
//       state.products = action.payload;
//     },
//   },

//   extraReducers: (builder) => {
//     // Fetch all products
//     builder.addCase(fetchProducts.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       state.loading = false;
//       state.products = action.payload;
//     });
//     builder.addCase(fetchProducts.rejected, (state, action) => {
//       state.loading = false;
//       // state.error = action.error.message;
//     });

//     // Fetch products by category
//     builder.addCase(fetchProductsByCategory.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
//       state.loading = false;
//       state.filteredProducts = action.payload;
//     });
//     builder.addCase(fetchProductsByCategory.rejected, (state, action) => {
//       state.loading = false;
//       // state.error = action.error.message;
//     });
//   },
// });

// export const { setProducts } = allProductSlice.actions;
// export default allProductSlice.reducer;



import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

export const fetchProducts = createAsyncThunk<Product[]>(
  "product/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

// export const fetchProductsByCategory = createAsyncThunk<Product[], string>(
//   "product/fetchProductsByCategory",
//   async (category) => {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     const filteredProducts = response.data.filter(
//       (product: Product) => product.category === category
//     );
//     return filteredProducts;
//   }
// );

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
    // builder.addCase(fetchProducts.pending, (state) => {
    //   state.loading = true;
    //   state.status = "loading";
    // });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.status = "succeeded";
      state.products = action.payload;
    });
    // builder.addCase(fetchProducts.rejected, (state, action) => {
    //   state.loading = false;
    //   state.status = "failed";
    //   state.error = action.error.message || "Failed to fetch products";
    // });

    // builder.addCase(fetchProductsByCategory.pending, (state) => {
    //   state.loading = true;
    //   state.status = "loading";
    // });
    // builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.status = "succeeded";
    //   state.filteredProducts = action.payload;
    // });
    // builder.addCase(fetchProductsByCategory.rejected, (state, action) => {
    //   state.loading = false;
    //   state.status = "failed";
    //   state.error =
    //     action.error.message || "Failed to fetch products by category";
    // });
  },
});

export const { setProducts } = allProductSlice.actions;
export default allProductSlice.reducer;
