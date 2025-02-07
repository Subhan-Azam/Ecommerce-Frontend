import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./useRedux.ts";
import { fetchReviews } from "../store/slices/allReviewsSlice.ts";

const useReviewSliderSec = () => {
  const getAllReviews = useAppSelector((store) => store.storeReviews.reviews);
  const dispatchReviews = useAppDispatch();

  useEffect(() => {
    dispatchReviews(fetchReviews());
  }, [dispatchReviews]);
  return { getAllReviews };
};

export default useReviewSliderSec;
