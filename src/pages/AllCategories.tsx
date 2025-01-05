import React, { useEffect } from "react";
import CategoriesCheckBox from "../(components)/categories/categoriesCheckBox/CategoriesCheckBox.tsx";
import CategoriesHeading from "../(components)/categories/categoriesHeading/CategoriesHeading.tsx";
import ProductCard from "../(components)/productCard/ProductCard.tsx";
import SalesSec from "../(components)/salesSec/SalesSec.tsx";
import categoriesImg from "../assets/game pad.png";

import { useSelector, useDispatch } from "react-redux";
// import { store } from "../store/store.ts";
import { fetchAllCategories } from "../store/slices/allCategoriesSlice.ts";

export default function AllCategories() {
  const getAllCategories = useSelector(
    (store) => store.storeCategories.categories
  );
  // console.log("getAllCategories from component", getAllCategories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <>
      <div className="font-poppins grid grid-cols-4 gap-5 my-24 mx-10">
        {/* Section 1 */}
        <div className="container mx-auto gap-5 w-full lg:max-w-[315px] lg:w-full col-span-4 lg:col-span-1">
          {/*  */}
          <div className="py-5">
            <CategoriesHeading />
            <div className="my-3">
              <CategoriesCheckBox />
              <CategoriesCheckBox />
              <CategoriesCheckBox />
              <CategoriesCheckBox />
              <CategoriesCheckBox />
              <CategoriesCheckBox />
            </div>
          </div>
          <hr className="w-full lg:max-w-[314px]" />
          {/*  */}
          <div className="py-5">
            <CategoriesHeading />
            <div className="my-3">
              <CategoriesCheckBox />
              <CategoriesCheckBox />
            </div>
          </div>
          <hr className="w-full lg:max-w-[314px]" />
          {/*  */}
          <div className="py-5">
            <CategoriesHeading />
            <div className="my-3">
              <CategoriesCheckBox />
            </div>
          </div>
          <hr className="w-full lg:max-w-[314px]" />
          {/*  */}
          <div className="py-5">
            <CategoriesHeading />
            <div className="my-3">
              <CategoriesCheckBox />
            </div>
          </div>
          <hr className="w-full lg:max-w-[314px]" />
          {/*  */}
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
              <CategoriesCheckBox />
              <CategoriesCheckBox />
              <CategoriesCheckBox />
              <CategoriesCheckBox />
            </div>
          </div>
          <hr className="w-full lg:max-w-[314px]" />
        </div>

        {/* Section 2 */}
        <div className="flex flex-wrap justify-center lg:justify-around col-span-4 lg:col-span-3 gap-5">
          {getAllCategories?.map((category, index) => {
            return (
                <ProductCard
                  src={category.image}
                  title={category.title.slice(0, 20) + "..."}
                  price={category.price}
                />
            );
          })}
          
          {/* <ProductCard src={categoriesImg} title="Game Pad" price="$34235" />
          <ProductCard src={categoriesImg} title="Game Pad" price="$34235" />
          <ProductCard src={categoriesImg} title="Game Pad" price="$34235" />
          <ProductCard src={categoriesImg} title="Game Pad" price="$34235" />
          <ProductCard src={categoriesImg} title="Game Pad" price="$34235" />
          <ProductCard src={categoriesImg} title="Game Pad" price="$34235" />
          <ProductCard src={categoriesImg} title="Game Pad" price="$34235" /> */}
        </div>
      </div>
      <SalesSec />
    </>
  );
}
