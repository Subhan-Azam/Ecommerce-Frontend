import React, { useEffect } from "react";
import CategoriesCheckBox from "../(components)/categories/categoriesCheckBox/CategoriesCheckBox.tsx";
import CategoriesHeading from "../(components)/categories/categoriesHeading/CategoriesHeading.tsx";
import ProductCard from "../(components)/productCard/ProductCard.tsx";
import SalesSec from "../(components)/salesSec/SalesSec.tsx";
import Loader from "../(components)/loader/Loader.tsx";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/slices/allProductsSlice.ts";
import { AppDispatch, RootState } from "../store/store.ts";

export default function AllCategories() {
  const getAllProducts = useSelector(
    (store: RootState) => store.storeProducts.products
  );

  const dispatchProduct = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatchProduct(fetchProducts());
  }, [dispatchProduct]);

  return (
    <>
      <div className="font-poppins grid grid-cols-4 gap-5 my-24 mx-10">
        <div className="container mx-auto gap-5 w-full lg:max-w-[315px] lg:w-full col-span-4 lg:col-span-1">
          <div className="py-5">
            <CategoriesHeading />
            <div className="my-3">
              <CategoriesCheckBox title="All Products" />
              <CategoriesCheckBox title="electronics" />
              <CategoriesCheckBox title="jewelery" />
              <CategoriesCheckBox title="men's clothing" />
              <CategoriesCheckBox title="women's clothing" />
            </div>
          </div>
          <hr className="w-full lg:max-w-[314px]" />
          <div className="py-5">
            <CategoriesHeading />
            <div className="my-3">
              <CategoriesCheckBox title="Categories" />
              <CategoriesCheckBox title="Categories" />
            </div>
          </div>
          <hr className="w-full lg:max-w-[314px]" />
          <div className="py-5">
            <CategoriesHeading />
            <div className="my-3">
              <CategoriesCheckBox title="Categories" />
            </div>
          </div>
          <hr className="w-full lg:max-w-[314px]" />
          <div className="py-5">
            <CategoriesHeading />
            <div className="my-3">
              <CategoriesCheckBox title="Categories" />
            </div>
          </div>
          <hr className="w-full lg:max-w-[314px]" />
          <div className="py-5">
            <CategoriesHeading />
            <div className="my-3 flex justify-between">
              <div className="bg-[#EDA415] w-[15px] h-[15px] rounded-full"></div>
              <div className="bg-[#E42424] w-[15px] h-[15px] rounded-full"></div>
              <div className="bg-[#1B5A7D] w-[15px] h-[15px] rounded-full"></div>
              <div className="bg-[#ACACAC] w-[15px] h-[15px] rounded-full"></div>
              <div className="bg-[#1D5F23] w-[15px] h-[15px] rounded-full"></div>
              <div className="bg-[#2E56A3] w-[15px] h-[15px] rounded-full"></div>
              <div className="bg-[#8131A7] w-[15px] h-[15px] rounded-full"></div>
              <div className="bg-[#BC2944] w-[15px] h-[15px] rounded-full"></div>
              <div className="bg-[#9BC14C] w-[15px] h-[15px] rounded-full"></div>
            </div>
          </div>
          <hr className="w-full lg:max-w-[314px]" />
          <div className="py-5">
            <CategoriesHeading />
            <div className="my-3">
              <CategoriesCheckBox title="Categories" />
              <CategoriesCheckBox title="Categories" />
              <CategoriesCheckBox title="Categories" />
              <CategoriesCheckBox title="Categories" />
            </div>
          </div>
          <hr className="w-full lg:max-w-[314px]" />
        </div>

        {/* Section 2 */}
        {!getAllProducts.length ? (
          <div className="mx-auto flex justify-center col-span-4 lg:col-span-3">
            <Loader />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center lg:justify-around col-span-4 lg:col-span-3 gap-5">
            {getAllProducts?.map((product, index) => {
              return (
                <div key={index} className="">
                  <Link to={`/single-product/${product.id}`}>
                    <ProductCard
                      src={product?.image}
                      title={product?.title.slice(0, 20) + "..."}
                      price={product?.price}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <SalesSec />
    </>
  );
}
