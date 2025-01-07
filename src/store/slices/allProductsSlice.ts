// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Define the product type
// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   category: string;
//   description: string;
// }

// // Define the state shape
// interface ProductState {
//   products: Product[]; // Array of products
// }

// export const fetchProducts = createAsyncThunk<Product[]>(
//   "product/fetchProducts",
//   async () => {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     return response.data; // Ensure we return the correct shape of data
//   }
// );

// export const allProductSlice = createSlice({
//   name: "product",
//   initialState: {
//     products: [], // Set initial state with an empty array of products
//   } as ProductState, // Type the initial state as ProductState

//   reducers: {
//     setProducts: (state, action) => {
//       state.products = action.payload;
//     },
//   },

//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       state.products = action.payload;
//     });
//   },
// });

// export const { setProducts } = allProductSlice.actions;

// export default allProductSlice.reducer;






// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchProducts = createAsyncThunk(
//   "product/fetchProducts",
//   async () => {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     console.log("response in fetchProducts", response.data);
//     return response.data;
//   }
// );
// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   category: string;
// }

// export const allProductSlice = createSlice({
//   name: "product",
//   initialState: {
//     products: [],
//   },

//   reducers: {
//     setProducts: (state, action) => {
//       state.products = action.payload;
//     },
//   },

//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       console.log("fetch products in extra reducer", action.payload);
//       state.products = action.payload;
//     });
//   },
// });

// export const { setProducts } = allProductSlice.actions;
// // export const { singleProduct } = allProductSlice.actions;
// // export default allProductSlice.reducer;







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

// Define the product type
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

// Define the state shape
interface ProductState {
  products: Product[]; // All products
  filteredProducts: Product[]; // Products filtered by category
  loading: boolean; // Loading state
  error: string | null; // Error state
  status: "idle" | "loading" | "succeeded" | "failed"; // Status
}

// Fetch all products
export const fetchProducts = createAsyncThunk<Product[]>(
  "product/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data; // Ensure the response matches the Product[] type
  }
);

// Fetch products by category
export const fetchProductsByCategory = createAsyncThunk<Product[], string>(
  "product/fetchProductsByCategory",
  async (category) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const filteredProducts = response.data.filter(
      (product: Product) => product.category === category
    );
    return filteredProducts;
  }
);

// Create the slice
export const allProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [], // Initialize as an empty array
    filteredProducts: [], // Initialize as an empty array
    loading: false, // Initialize as false
    error: null, // Initialize as null
    status: "idle", // Initial status
  } as ProductState, // Type the initial state as ProductState

  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload; // Set the products
    },
  },

  extraReducers: (builder) => {
    // Fetch all products
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.status = "succeeded";
      state.products = action.payload; // Payload is an array of products
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.status = "failed";
      state.error = action.error.message || "Failed to fetch products";
    });

    // Fetch products by category
    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.loading = true;
      state.status = "loading";
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.status = "succeeded";
      state.filteredProducts = action.payload; // Payload is an array of products
    });
    builder.addCase(fetchProductsByCategory.rejected, (state, action) => {
      state.loading = false;
      state.status = "failed";
      state.error = action.error.message || "Failed to fetch products by category";
    });
  },
});

export const { setProducts } = allProductSlice.actions;
export default allProductSlice.reducer;
