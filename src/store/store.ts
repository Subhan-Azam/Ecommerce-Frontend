import { configureStore } from "@reduxjs/toolkit";
import { allProductSlice } from "./slices/allProductsSlice.ts";
import { allReviewsSlice } from "./slices/allReviewsSlice.ts";
import { allCategoriesSlice } from "./slices/allCategoriesSlice.ts";

export const store = configureStore({
  reducer: {
    storeProducts: allProductSlice.reducer,
    storeReviews: allReviewsSlice.reducer,
    storeCategories: allCategoriesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
