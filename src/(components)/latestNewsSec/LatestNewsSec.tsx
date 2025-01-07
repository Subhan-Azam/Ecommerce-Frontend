import React from "react";
import LatestNewsCard from "./LatestNewsCard.tsx";
import LatestNewsImg from "../../assets/ear bird.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

export default function LatestNewsSec() {
  return (
    <>
      <section className="text-gray-600 body-font my-20 mx-5">
        <div className="container mx-auto flex justify-between items-center text-[#1B5A7D]">
          <h2 className="text-[25px] font-[600]">Latest news</h2>
          <p className="text-[20px] font-[500]">View all</p>
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap justify-between -m-5">
            <Swiper
              loop={true}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <LatestNewsCard src={LatestNewsImg} />
              </SwiperSlide>
              <SwiperSlide>
                <LatestNewsCard src={LatestNewsImg} />
              </SwiperSlide>
              <SwiperSlide>
                <LatestNewsCard src={LatestNewsImg} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
