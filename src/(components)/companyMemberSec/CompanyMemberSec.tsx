import React from "react";
import CompanyMemberCard from "./CompanyMemberCard.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

export default function CompanyMemberSec() {
  const CompanyMember1 = require("../../assets/Frame 61.png");
  const CompanyMember2 = require("../../assets/Frame 61 (1).png");
  const CompanyMember3 = require("../../assets/Frame 61 (2).png");
  return (
    <>
      <div className="container mx-auto flex my-16">
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
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {[`${CompanyMember1}`, `${CompanyMember2}`, `${CompanyMember1}`].map(
            (company, index) => {
              return (
                <SwiperSlide key={index}>
                  <CompanyMemberCard src={company} />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </>
  );
}
