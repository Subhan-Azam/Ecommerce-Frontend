import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard.tsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { useSelector, useDispatch } from "react-redux";
import { fetchReviews } from "../../store/slices/allReviewsSlice.ts";
import { AppDispatch, RootState } from "../../store/store.ts";

export default function ReviewSlider() {
  const getAllReviews = useSelector(
    (store: RootState) => store.storeReviews.reviews
  );
  const dispatchReviews = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatchReviews(fetchReviews());
  }, [dispatchReviews]);

  return (
    <div className="container mx-auto ">
      <div className="flex justify-center mt-10 mb-20">
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
          {getAllReviews?.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <ReviewCard
                  src={review?.image}
                  title={review?.title.slice(0, 10) + "..."}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
