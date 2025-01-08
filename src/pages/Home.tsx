import React from "react";
import HeroSection from "../(components)/heroSection/HeroSection.tsx";
import AllProductsInHome from "../(components)/allProductsInHome/AllProductsInHome.tsx";
import ReviewSlider from "../(components)/reviewSlider/ReviewSlider.tsx";
import SalesSec from "../(components)/salesSec/SalesSec.tsx";
import FreeDiliverySec from "../(components)/freeDiliverySec/FreeDiliverySec.tsx";
import LogosSec from "../(components)/logosSec/LogosSec.tsx";
import JblBar from "../(components)/jblBar/JblBar.tsx";
import LatestNewsSec from "../(components)/latestNewsSec/LatestNewsSec.tsx";
import CompanyMemberSec from "../(components)/companyMemberSec/CompanyMemberSec.tsx";
// import "swiper/swiper-bundle.css";

export default function Home() {
  return (
    <div className="font-poppins">
      <HeroSection />
      <ReviewSlider />
      <AllProductsInHome />
      <SalesSec />
      <JblBar />
      <FreeDiliverySec />
      <CompanyMemberSec />
      <LogosSec />
      <LatestNewsSec />
    </div>
  );
}
