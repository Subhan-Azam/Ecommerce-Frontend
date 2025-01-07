import { configureStore } from "@reduxjs/toolkit";
import { allProductSlice } from "./slices/allProductsSlice.ts";
import { allReviewsSlice } from "./slices/allReviewsSlice.ts";
import { specificProductSlice } from "./slices/specificProductSlice.ts";
import { allCategoriesSlice } from "./slices/allCategoriesSlice.ts";

export const store = configureStore({
  reducer: {
    storeProducts: allProductSlice.reducer,
    storeReviews: allReviewsSlice.reducer,
    storeCategories: allCategoriesSlice.reducer,
    storeSpecificProduct: specificProductSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
