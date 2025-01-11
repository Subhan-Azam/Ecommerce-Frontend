import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard.tsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { useSelector, useDispatch } from "react-redux";
import { fetchReviews } from "../../store/slices/allReviewsSlice.ts";
import { AppDispatch, RootState } from "../../store/store.ts";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader.tsx";

export default function ReviewSliderSec() {
  const getAllReviews = useSelector(
    (store: RootState) => store.storeReviews.reviews
  );
  const dispatchReviews = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatchReviews(fetchReviews());
  }, [dispatchReviews]);

  return (
    <>
      <div className="flex justify-center md:mx-0 mx-5 mt-10 mb-20">
        {getAllReviews.length ? (
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
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {getAllReviews?.map((review) => {
              return (
                <SwiperSlide key={review.id}>
                  <Link to={`/single-product/${review.id}`}>
                    <ReviewCard
                      src={review?.image}
                      title={review?.title.slice(0, 10) + "..."}
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}
