import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import SearchBtn from "../(components)/buttons/SearchBtn.tsx";
import ProductCard from "../(components)/productCard/ProductCard.tsx";

import { SlSocialGoogle } from "react-icons/sl";
import { PiWhatsappLogoLight, PiFacebookLogo } from "react-icons/pi";

// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";

export default function SingleProduct() {
  const gamePad3 = require("../assets/game pad (2).png");

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const { id } = useParams();
  const allProduct = useSelector(
    (store: RootState) => store.storeProducts.products
  );

  const product = allProduct.find((p) => p.id === Number(id));
  if (!product) {
    return <p>Data not found</p>;
  }

  return (
    <div className="font-poppins container mx-auto max-w-[1320px] w-full">
      <section className="mx-5 md:mx-10">
        <div className="mx-5 md:mx-10 py-0 md:py-16 dark:bg-gray-900 antialiased">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-[500px] min-h-4 w-full mt-10 mx-auto flex justify-center">
              <img className="w-full p-10" src={product.image} alt="" />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="font-[600] text-[29px] md:text-[30px] text-[#003F62]">
                {product.title}
              </h1>
              <div className="mt-4">
                <p className="text-[30px] font-[600] text-[#4A4A4A] sm:text-3xl dark:text-white">
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
                <div className="flex justify-center md:justify-start gap-7 my-10 ">
                  <SearchBtn
                    style={
                      "bg-[#EDA415] text-white w-[187px] md:w-[240px] h-[70px] rounded-[32px] text-[22px] font-[600]"
                    }
                    content="Add to cart"
                  />
                  <SearchBtn
                    style={
                      "bg-[#EDA415] text-white w-[187px] md:w-[240px] h-[70px] rounded-[32px] text-[22px] font-[600]"
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

        <div className="flex flex-wrap justify-center gap-5 md:gap-10 mt-16 md:mt-28">
          <SearchBtn
            style={
              "border border-[003F62] text-[003F62] w-[187px] h-[60px] rounded-[20px] text-[20px] font-[500]"
            }
            content="Description"
          />
          <SearchBtn
            style={
              "bg-[#003F62] text-white w-[187px] h-[60px] rounded-[20px] text-[20px] font-[500]"
            }
            content="Reviews"
          />
        </div>

        <div className="container mx-auto mt-10 border py-8 rounded-[20px] text-center px-0 md:px-10 md:text-start">
          <h2 className="font-[600] text-[22px]">Customer reviews</h2>
          <p className="py-3">No reviews yet</p>
          <button className="bg-[#003F62] underline text-white py-2 px-5">
            Write a review
          </button>
        </div>
        {/* 
        <div className="container mx-auto mt-10">
          <h1 className="text-[#1B5A7D] font-[600] text-[27px] my-8">
            Related product
          </h1>
          <div className="flex justify-center">
            <Swiper
              loop={true}
              modules={[Autoplay]}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1020: {
                  slidesPerView: 3,
                },
                1080: {
                  slidesPerView: 4,
                },
              }}
            >
              {[
                {
                  src: require("../assets/camera card.png"),
                  title: "Camera",
                  price: "$321",
                },
                {
                  src: require("../assets/camera card.png"),
                  title: "Wireless headphones",
                  price: "$11,70",
                },
                {
                  src: require("../assets/camera card.png"),
                  title: "Play game",
                  price: "$11,70",
                },
                {
                  src: require("../assets/camera card.png"),
                  title: "Tablet as a laptop",
                  price: "$11,70",
                },
                {
                  src: require("../assets/camera card.png"),
                  title: "Wireless headphones",
                  price: "$11,70",
                },
              ].map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center gap-5">
                    <ProductCard
                      src={card.src}
                      title={card.title}
                      price={card.price}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div> */}
      </section>
    </div>
  );
}
