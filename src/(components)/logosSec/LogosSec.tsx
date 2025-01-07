import React from "react";
import logosImg1 from "../../assets/brand-8.png";
import logosImg2 from "../../assets/brand-7.png";
import logosImg3 from "../../assets/brand-6.png";
import logosImg4 from "../../assets/brand-5.png";
import logosImg5 from "../../assets/brand-4.png";

export default function LogosSec() {
  return (
    <div className="my-16 mx-5">
      <div className="container mx-auto flex items-center justify-around bg-[#E2F4FF] max-w-[1317px] w-full min-h-[136px]">
        <div className="flex flex-wrap justify-around gap-14 py-5">
          <img src={logosImg1} alt="" className="my-1 sm:my-3" />
          <img src={logosImg2} alt="" className="my-1 sm:my-3" />
          <img src={logosImg3} alt="" className="my-1 sm:my-3" />
          <img src={logosImg4} alt="" className="my-1 sm:my-3" />
          <img src={logosImg5} alt="" className="my-1 sm:my-3" />
        </div>
      </div>
    </div>
  );
}
