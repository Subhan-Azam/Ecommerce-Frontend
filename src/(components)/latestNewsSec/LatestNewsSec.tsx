import React from "react";
import LatestNewsCard from "./LatestNewsCard.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

export default function LatestNewsSec() {
  const LatestNewsImg = require("../../assets/ear bird.png");
  const LatestNewsImg2 = require("../../assets/latesNewSec.png");
  return (
    <>
      <section className="container mx-auto text-gray-600 body-font my-20">
        <div className="flex justify-between items-center text-[#1B5A7D]">
          <h2 className="text-[25px] font-[600]">Latest news</h2>
          <p className="text-[20px] font-[500]">View all</p>
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-10">
          <Swiper
            loop={true}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1280: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide className="">
              <div className="md:flex justify-center items-center">
                <LatestNewsCard src={LatestNewsImg} />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="md:flex justify-center items-center">
                <LatestNewsCard src={LatestNewsImg2} />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="md:flex justify-center items-center">
                <LatestNewsCard src={LatestNewsImg} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
