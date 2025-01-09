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
import { Link } from "react-router-dom";
import Loader from "../loader/Loader.tsx";

export default function ReviewSlider() {
  const getAllReviews = useSelector(
    (store: RootState) => store.storeReviews.reviews
  );
  const dispatchReviews = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatchReviews(fetchReviews());
  }, [dispatchReviews]);

  return (
    <div className="mx-3 md:mx-10">
      <div className="flex justify-center mt-10 mb-20">
        {getAllReviews.length ? (
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
                    <div className="flex justify-center items-center ">
                      <ReviewCard
                        src={review?.image}
                        title={review?.title.slice(0, 10) + "..."}
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
