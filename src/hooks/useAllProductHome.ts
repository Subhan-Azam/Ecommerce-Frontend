import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./useRedux.ts";
import { fetchProducts } from "../store/slices/allProductsSlice.ts";
import { fetchAllCategories } from "../store/slices/allCategoriesSlice.ts";

const useAllProductHome = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getAllProducts = useAppSelector(
    (store) => store.storeProducts.products
  );
  const getAllCategories = useAppSelector(
    (store) => store.storeCategories.allCategories
  );

  const dispatchProduct = useAppDispatch();
  const dispatchCategories = useAppDispatch();

  useEffect(() => {
    dispatchProduct(fetchProducts());
    dispatchCategories(fetchAllCategories());
  }, [dispatchProduct, dispatchCategories]);

  const filteredProducts = selectedCategory
    ? getAllProducts.filter((product) => product.category === selectedCategory)
    : getAllProducts;

  return {
    selectedCategory,
    setSelectedCategory,
    getAllProducts,
    getAllCategories,
    filteredProducts,
  };
};

export default useAllProductHome;
