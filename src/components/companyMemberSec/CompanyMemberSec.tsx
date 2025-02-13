import React from "react";
import CompanyMemberCard from "./CompanyMemberCard.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { images } from "../../constants/images.ts";

export default function CompanyMemberSec() {
  return (
    <>
      <div className="container mx-auto my-16">
        <div className="md:mx-0 mx-5">
          <Swiper
            loop={true}
            modules={[Autoplay]}
            spaceBetween={50}
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
            {[
              `${images.CompanyMember1}`,
              `${images.CompanyMember2}`,
              `${images.CompanyMember3}`,
              `${images.CompanyMember2}`,
            ].map((company, index) => {
              return (
                <SwiperSlide key={index}>
                  <CompanyMemberCard src={company} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
