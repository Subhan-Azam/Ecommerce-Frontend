import React, { useEffect } from "react";
import HeroSection from "../(components)/heroSection/HeroSection.tsx";
import ProductLinks from "../(components)/productLinks/ProductLinks.tsx";
import ProductCard from "../(components)/productCard/ProductCard.tsx";
import ProductCardLoading from "../(components)/productCard/ProductCardLoading.tsx";
import SalesSec from "../(components)/salesSec/SalesSec.tsx";
import FreeDiliverySec from "../(components)/freeDiliverySec/FreeDiliverySec.tsx";
import CompanyMemberSec from "../(components)/companyMemberSec/CompanyMemberSec.tsx";
import LogosSec from "../(components)/logosSec/LogosSec.tsx";
import JblBar from "../(components)/jblBar/JblBar.tsx";
import LatestNews from "../(components)/latestNews/LatestNews.tsx";

// FreeDiliverySec
import icon1 from "../assets/box-tick.png";
import icon2 from "../assets/crown.png";
import icon3 from "../assets/shield-security.png";

// CompanyMemberSec
import CompanyMember1 from "../assets/Frame 61.png";
import CompanyMember2 from "../assets/Frame 61 (1).png";
import CompanyMember3 from "../assets/Frame 61 (2).png";

// LatestNews
import LatestNewsImg1 from "../assets/ear bird.png";
import LatestNewsImg2 from "../assets/spiker.png";

// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/slices/allProductsSlice.ts";
import ReviewSlider from "../(components)/reviewSlider/reviewSlider.tsx";
import { fetchReviews } from "../store/slices/allReviewsSlice.ts";

export default function Home() {
  const getAllProducts = useSelector((store) => store.storeProducts.products);
  // console.log("products in component", getAllProducts);

  const dispatchProduct = useDispatch();

  useEffect(() => {
    dispatchProduct(fetchProducts());
  }, [dispatchProduct]);

  const onClickHandler = (id) => {
    console.log("All products id", id);
  };

  // getAllReviews store
  const getAllReviews = useSelector((store) => store.storeReviews.reviews);
  console.log("getAll Reviews in component", getAllReviews);

  const dispatchReviews = useDispatch();

  useEffect(() => {
    dispatchReviews(fetchReviews());
  }, [dispatchReviews]);

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <HeroSection />

      {/* Speaker Slider Section */}
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
                  <ReviewSlider src={review.image} title={review.title.slice(0,10) +"..."} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Latest Product Section */}
      <div className="container mx-auto my-10">
        <div className="flex justify-center -mb-3">
          <ProductLinks />
        </div>
        <div>
          {!getAllProducts.length ? (
            <div className="flex justify-center items-center">
              <ProductCardLoading />
            </div>
          ) : (
            <div className="mt-14 flex flex-wrap justify-center mx-auto gap-6">
              {getAllProducts?.map((product, index) => {
                return (
                  <div key={index} onClick={() => onClickHandler(product.id)}>
                    <ProductCard
                      src={product?.image}
                      title={product.title.slice(0, 20) + "..."}
                      price={product.price}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* <ProductCard src={CartImg2} title="Wireless headphones" />
          <ProductCard src={CartImg3} title="Play game" />
          <ProductCard src={CartImg4} title="Tablet as a laptop" />
          <ProductCard src={CartImg5} title="Wireless headphones" />
          <ProductCard src={CartImg6} title="Play game" />
          <ProductCard src={CartImg7} title="Tablet as a laptop" />
          <ProductCard src={CartImg8} title="Play game" /> */}
      </div>

      {/* Sales Section */}
      <SalesSec />

      {/* JblBar after Sales Section */}
      <div className="mx-5">
        <JblBar />
      </div>

      {/* Free Dilivery Section */}
      <div className="mx-5">
        <div className="container mx-auto my-8  bg-[#E2F4FF] p-4 rounded-[20px]">
          <div className="max-w-[1000px] w-full mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
            <FreeDiliverySec
              src={icon1}
              title="Free delivery"
              text="on order above $50,00"
            />
            <FreeDiliverySec
              src={icon2}
              title="Best quality"
              text="best quality in low price"
            />
            <FreeDiliverySec
              src={icon3}
              title="1 year warranty"
              text="Avaliable warranty"
            />
          </div>
        </div>
      </div>

      {/* CompanyMemberSec */}
      <div className="container mx-auto flex my-16">
        {/* <div className="flex flex-col md:flex-row justify-center space-x-4 mx-4 my-16 p-4"> */}
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
            <CompanyMemberSec src={CompanyMember1} />
          </SwiperSlide>

          <SwiperSlide>
            <CompanyMemberSec src={CompanyMember2} />
          </SwiperSlide>

          <SwiperSlide>
            <CompanyMemberSec src={CompanyMember3} />
          </SwiperSlide>
          <SwiperSlide>
            <CompanyMemberSec src={CompanyMember3} />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <div className="flex flex-col md:flex-row justify-center space-x-4 mx-4 my-16 p-4">
        <CompanyMemberSec src={CompanyMember1} />
        <CompanyMemberSec src={CompanyMember2} />
        <CompanyMemberSec src={CompanyMember3} />
      </div> */}

      {/* Logos Section */}
      <div className="my-16 mx-5">
        <LogosSec />
      </div>

      {/* LatestNews Section */}
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
                <LatestNews src={LatestNewsImg1} />
              </SwiperSlide>
              <SwiperSlide>
                <LatestNews src={LatestNewsImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <LatestNews src={LatestNewsImg1} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
