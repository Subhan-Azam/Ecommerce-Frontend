import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { TiHeartOutline } from "react-icons/ti";
import SearchBtn from "../(components)/buttons/SearchBtn.tsx";
import ProductCard from "../(components)/productCard/ProductCard.tsx";
import mainImg from "../assets/6456332_sd 1.png";
import gamePad3 from "../assets/game pad (2).png";
import { SlSocialGoogle } from "react-icons/sl";
import { PiWhatsappLogoLight, PiFacebookLogo } from "react-icons/pi";

// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
// import { singleProduct } from "../store/slices/allProductsSlice.ts";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

export default function SingleProduct() {
  // const params = useParams()
  // console.log('params', params)

  // const getSingleProduct = useSelector((store) => store.storeProducts.products);
  // console.log("getSingleProduct dynamic", getSingleProduct);

  // let dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(singleProduct());
  // }, []);

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <section className="py-8 md:py-16 dark:bg-gray-900 antialiased">
        <div className="mx-10 px-4 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-[800px] w-full mx-auto">
              <div className="flex justify-center">
                <img className=" max-w-[650px] w-full" src={mainImg} alt="" />
              </div>
              <div className="flex flex-wrap justify-center items-center gap-6 mt-5">
                <div className="border rounded-[20px]">
                  <img
                    src={gamePad3}
                    className="w-[110px] sm:w-[300px]"
                    alt=""
                  />
                </div>
                <div className="border rounded-[20px]">
                  <img
                    src={gamePad3}
                    className="w-[110px] sm:w-[300px]"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="font-[600] text-[30px] text-[#003F62]">
                Play game
              </h1>
              <div className="mt-4">
                <p className="text-[30px] font-[600] text-[#4A4A4A] sm:text-3xl dark:text-white">
                  $11,70
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
                <div className="flex flex-wrap gap-7 my-4 ">
                  <SearchBtn
                    style={
                      "bg-[#EDA415] text-white w-[300px] h-[55px] md:w-[240px] md:h-[70px] rounded-[32px] text-[22px] font-[600]"
                    }
                    content="Add to cart"
                  />
                  <SearchBtn
                    style={
                      "bg-[#EDA415] text-white w-[300px] h-[55px] md:w-[240px] md:h-[70px] rounded-[32px] text-[22px] font-[600]"
                    }
                    content="Buy it now"
                  />
                  {/* <div className="w-[74px] h-[73px] bg-[#EEEEEE] rounded-full flex justify-center items-center">
                    <TiHeartOutline size={36} />
                  </div> */}
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
              "bg-[#003F62] text-white w-[300px] md:w-[187px] h-[60px] rounded-[20px] text-[20px] font-[500]"
            }
            content="Description"
          />
          <SearchBtn
            style={
              "border border-[003F62] text-[003F62] w-[300px] md:w-[187px] h-[60px] rounded-[20px] text-[20px] font-[500]"
            }
            content="Reviews"
          />
        </div>

        <div className="mx-10 mt-10 border py-8 rounded-[20px] text-center px-0 md:px-10 md:text-start">
          <h2 className="font-[600] text-[22px]">Customer reviews</h2>
          <p className="py-3">No reviews yet</p>
          <button className="bg-[#003F62] underline text-white py-2 px-5">
            Write a review
          </button>
        </div>

        <div className="container mx-auto">
          {/* <div className="flex flex-wrap justify-center items-center mx-10 mb-10 mt-20"> */}
          <div className="mx-10 flex gap-7 flex-wrap justify-center lg:justify-between mb-10 mt-20">
            <h1 className="text-[#1B5A7D] font-[600] text-[27px]">
              Related product
            </h1>
            <Swiper
              loop={true}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              navigation
              pagination={{ clickable: true }}
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
                1024: {
                  slidesPerView: 4,
                },
                1440: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <ProductCard
                  src={gamePad3}
                  title="jdasd dafusafusauf"
                  price="$1234"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  src={gamePad3}
                  title="jdasd dafusafusauf"
                  price="$1234"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  src={gamePad3}
                  title="jdasd dafusafusauf"
                  price="$1234"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  src={gamePad3}
                  title="jdasd dafusafusauf"
                  price="$1234"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  src={gamePad3}
                  title="jdasd dafusafusauf"
                  price="$1234"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
