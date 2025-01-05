import { configureStore } from "@reduxjs/toolkit";
import { allProductSlice } from "./slices/allProductsSlice.ts";
import { allCategoriesSlice } from "./slices/allCategoriesSlice.ts";
import { allReviewsSlice } from "./slices/allReviewsSlice.ts";

export const store = configureStore({
  reducer: {
    storeProducts: allProductSlice.reducer,
    storeCategories: allCategoriesSlice.reducer,
    storeReviews: allReviewsSlice.reducer,
  },
});
