import React from "react";
import HeroSection from "../(components)/heroSection/HeroSection.tsx";
import SalesSec from "../(components)/salesSec/SalesSec.tsx";
import FreeDiliverySec from "../(components)/freeDiliverySec/FreeDiliverySec.tsx";
import LogosSec from "../(components)/logosSec/LogosSec.tsx";
import JblBar from "../(components)/jblBar/JblBar.tsx";
import AllProductsInHome from "../(components)/allProductsInHome/AllProductsInHome.tsx";
import LatestNewsSec from "../(components)/latestNewsSec/LatestNewsSec.tsx";
import CompanyMemberSec from "../(components)/companyMemberSec/CompanyMemberSec.tsx";
import ReviewSlider from "../(components)/reviewSlider/ReviewSlider.tsx";

// FreeDiliverySec
import icon1 from "../assets/box-tick.png";
import icon2 from "../assets/crown.png";
import icon3 from "../assets/shield-security.png";

// CompanyMemberSec
// import CompanyMember1 from "../assets/Frame 61.png";
// import CompanyMember2 from "../assets/Frame 61 (1).png";
// import CompanyMember3 from "../assets/Frame 61 (2).png";
import "swiper/swiper-bundle.css";

export default function Home() {
  // const getAllProducts = useSelector(
  //   (store: RootState) => store.storeProducts.products
  // );

  // const status = useSelector((store: RootState) => store.storeProducts.status);
  // const dispatchProduct = useDispatch();

  // useEffect(() => {
  //   dispatchProduct(fetchProducts());
  // }, [dispatchProduct]);


  return (
    <div className="font-poppins">
      <HeroSection />
      <ReviewSlider />
      <AllProductsInHome />
      <SalesSec />
      <JblBar />

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

      <CompanyMemberSec />
      <LogosSec />
      <LatestNewsSec />
    </div>
  );
}
