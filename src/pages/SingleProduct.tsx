import React from "react";
import { CiStar } from "react-icons/ci";
import SearchBtn from "../components/buttons/SearchBtn.tsx";
import { SlSocialGoogle } from "react-icons/sl";
import { PiWhatsappLogoLight, PiFacebookLogo } from "react-icons/pi";
import Loader from "../components/loader/Loader.tsx";
import useCounter from "../hooks/useCounter.ts";
import useSingleProduct from "../hooks/useSingleProduct.ts";

export default function SingleProduct() {
  const { count, increment, decrement } = useCounter();
  const { isImageLoaded, setIsImageLoaded, product } = useSingleProduct();

  if (!product) {
    return <p className="text-center text-red-500 font-bold">Data not found</p>;
  }

  return (
    <section className="font-poppins container mx-auto px-5 max-w-[1360px] w-full">
      <div className="mx-5 md:mx-10 py-0 md:py-16 antialiased">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-[500px] min-h-4 w-full mt-10 mx-auto flex items-start justify-center">
            {!isImageLoaded && <Loader />}
            <img
              className="w-full p-10"
              src={product.image}
              alt="Product Image"
              onLoad={() => setIsImageLoaded(true)}
              style={{ display: isImageLoaded ? "block" : "none" }}
            />
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="font-[600] text-[30px] text-[#003F62]">
              {product.title}
            </h1>
            <div className="mt-4">
              <p className="md:text-[30px] text-[23px] font-[600] text-[#4A4A4A] sm:text-3xl dark:text-white">
                ${product.price}
              </p>

              <div className="flex items-center gap-2 mt-2 sm:mt-3">
                <div className="flex items-center gap-1">
                  <CiStar size={29} color="#EDA415" />
                  <CiStar size={29} color="#EDA415" />
                  <CiStar size={29} color="#EDA415" />
                  <CiStar size={29} color="#EDA415" />
                </div>

                <a
                  href="#"
                  className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                >
                  No Reviews
                </a>
              </div>
              <div className="flex gap-3 mt-3">
                <h4 className="font-[500] text-[18px]">Availability:</h4>
                <span className="text-[#30BD57] font-[500] text-[18px] ">
                  In Stock
                </span>
              </div>
              <p className="text-[#5D5D5D] mt-3">
                Hurry up! only 34 product left in stock!
              </p>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <div className="">
              <div className="flex items-center gap-5">
                <h4 className="font-[500] text-[18px]">Color:</h4>
                <div className="bg-[#D0EC48] w-[18px] h-[18px] rounded-full cursor-pointer"></div>
              </div>
              <div className="flex gap-5 my-5">
                <h4 className="font-[500] text-[18px]">Size:</h4>
                <div className="flex flex-wrap items-center gap-5">
                  <div className="bg-[#EEEEEE] w-[63px] h-[32px] text-center pt-1">
                    30
                  </div>
                  <div className="bg-[#EEEEEE] w-[63px] h-[32px] text-center pt-1">
                    30
                  </div>
                  <div className="bg-[#EEEEEE] w-[63px] h-[32px] text-center pt-1">
                    30
                  </div>
                  <div className="bg-[#EEEEEE] w-[63px] h-[32px] text-center pt-1">
                    30
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 my-2">
                <h4 className="font-[500] text-[18px] ">Quantity:</h4>
                <div className="flex text-center">
                  <button
                    onClick={decrement}
                    className="border border-[#BDBDBD] bg-[#EEEEEE] w-[35px] "
                  >
                    -
                  </button>
                  <p className="border border-[#BDBDBD] bg-[#EEEEEE] w-[63px]">
                    {count}
                  </p>
                  <button
                    onClick={increment}
                    className="border border-[#BDBDBD] bg-[#EEEEEE] w-[35px]"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex sm:flex-nowrap flex-wrap justify-center sm:justify-start gap-7 my-10 ">
                <SearchBtn
                  style={
                    "bg-[#EDA415] text-white h-[60px] rounded-[20px] font-[600] w-[150px] text-[18px] sm:w-[187px] sm:text-[20px]"
                  }
                  content="Add to cart"
                />
                <SearchBtn
                  style={
                    "bg-[#EDA415] text-white h-[60px] rounded-[20px] font-[600] w-[150px] text-[18px] sm:w-[187px] sm:text-[20px]"
                  }
                  content="Buy it now"
                />
              </div>

              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

              <div className="font-[500] text-[18px] flex gap-4">
                <h4 className=" ">Sku:</h4>
                <span className="">01133-9-9</span>
              </div>
              <div className="flex items-center gap-5 my-4">
                <h4 className="font-[500] text-[18px]">Category:</h4>
                <div className="flex flex-wrap gap-2 sm:gap-5">
                  <span className="text-[13px]">20% off,</span>
                  <span className="text-[13px]">49% off</span>
                  <span className="text-[13px]">Alex remote</span>
                </div>
              </div>
              <div className="font-[500] text-[18px] flex gap-4">
                <h4 className=" ">Share:</h4>
                <SlSocialGoogle size={24} />
                <PiFacebookLogo size={24} />
                <PiWhatsappLogoLight size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 md:mx-10 flex flex-wrap justify-center gap-5 md:gap-10 mt-16 md:mt-28">
        <SearchBtn
          style={
            "border border-[003F62] text-[003F62]  h-[60px] rounded-[20px] font-[500] w-[150px] text-[18px] sm:w-[187px] sm:text-[20px]"
          }
          content="Description"
        />
        <SearchBtn
          style={
            "bg-[#003F62] text-white text-[003F62]  h-[60px] rounded-[20px] font-[500] w-[150px] text-[18px] sm:w-[187px] sm:text-[20px]"
          }
          content="Reviews"
        />
      </div>

      <div className="container mx-auto">
        <div className="mt-10 border border-[#B6B6B6] py-8 rounded-[20px] text-center px-0 md:px-10 md:text-start">
          <h2 className="font-[600] text-[22px]">Customer reviews</h2>
          <p className="py-3">No reviews yet</p>
          <button className="bg-[#003F62] underline text-white py-2 px-5">
            Write a review
          </button>
        </div>
      </div>
    </section>
  );
}
