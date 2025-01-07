// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchReviews = createAsyncThunk(
//   "review/fetchReviews",
//   async () => {
//     const response = await axios.get(
//       "https://fakestoreapi.com/products?limit=5"
//     );
//     // console.log("fetch fetchReviews from api", response.data);
//     return response.data;
//   }
// );

// export const allReviewsSlice = createSlice({
//   name: "review",
//   initialState: {
//     reviews: [],
//   },
//   reducers: {
//     setReviews: (state, action) => {
//       state.reviews = action.payload;
//     },
//   },

//   extraReducers: (builder) => {
//     builder.addCase(fetchReviews.fulfilled, (state, action) => {
//     // console.log("fetch categories in extra reducer", action.payload);

//       state.reviews = action.payload;
//     });
//   },
// });

// export const {setReviews} = allReviewsSlice.actions;



import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Review {
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

interface ReviewState {
  reviews: Review[];
}

export const fetchReviews = createAsyncThunk<Review[]>(
  "review/fetchReviews",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=5"
    );
    return response.data;
  }
);

export const allReviewsSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
  } as ReviewState,

  reducers: {
    setReviews: (state, action: PayloadAction<Review[]>) => {
      state.reviews = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
  },
});

export const { setReviews } = allReviewsSlice.actions;

export default allReviewsSlice.reducer;
