import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./useRedux.ts";
import { fetchProducts } from "../store/slices/allProductsSlice.ts";

const useAllCategories = () => {
  const getAllProducts = useAppSelector(
    (store) => store.storeProducts.products
  );

  const dispatchProduct = useAppDispatch();

  useEffect(() => {
    dispatchProduct(fetchProducts());
  }, [dispatchProduct]);
  return { getAllProducts };
};

export default useAllCategories;
