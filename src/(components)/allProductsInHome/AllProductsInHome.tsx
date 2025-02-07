import React from "react";
import ProductCard from "../productCard/ProductCard.tsx";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader.tsx";
import useAllProductHome from "../../hooks/useAllProductHome.ts";

const AllProductsInHome = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    getAllCategories,
    filteredProducts,
  } = useAllProductHome();

  return (
    <>
      <div className="flex justify-center items-center lg:justify-between flex-wrap my-8 mb-10">
        <h2 className="mb-5 md:mb-0 text-center text-[27px] font-[600] text-[#1B5A7D]">
          Popular Products
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`w-[139px] h-[45px] rounded-[20px] ${
              selectedCategory === null
                ? "bg-[#003F62] text-white"
                : "border border-[#003F62] text-[#003F62]"
            }`}
          >
            All Products
          </button>
          {getAllCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-[139px] h-[45px] rounded-[20px] ${
                selectedCategory === category
                  ? "bg-[#003F62] text-white"
                  : "border border-[#003F62] text-[#003F62]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-[26.56px]">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="cursor-pointer">
              <Link to={`/single-product/${product.id}`}>
                <ProductCard
                  src={product.image}
                  title={product.title.slice(0, 20) + "..."}
                  price={product.price}
                />
              </Link>
            </div>
          ))
        ) : (
          <div className="flex justify-center w-full col-span-4 ">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};

export default AllProductsInHome;
