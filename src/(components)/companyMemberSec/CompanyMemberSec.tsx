import React from "react";
import CompanyMemberCard from "./CompanyMemberCard.tsx";

import CompanyMember1 from "../../assets/Frame 61.png";
import CompanyMember2 from "../../assets/Frame 61 (1).png";
import CompanyMember3 from "../../assets/Frame 61 (2).png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

export default function CompanyMemberSec() {
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
          <SwiperSlide>
            <CompanyMemberCard src={CompanyMember1} />
          </SwiperSlide>

          <SwiperSlide>
            <CompanyMemberCard src={CompanyMember2} />
          </SwiperSlide>

          <SwiperSlide>
            <CompanyMemberCard src={CompanyMember3} />
          </SwiperSlide>
          <SwiperSlide>
            <CompanyMemberCard src={CompanyMember3} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
