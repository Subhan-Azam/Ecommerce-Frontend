import React from "react";

export default function LogosSec() {
  const logosImg1 = require("../../assets/brand-8.png");
  const logosImg2 = require("../../assets/brand-7.png");
  const logosImg3 = require("../../assets/brand-6.png");
  const logosImg4 = require("../../assets/brand-5.png");
  const logosImg5 = require("../../assets/brand-4.png");

  return (
    <div className="my-16 mx-5">
      <div className="container mx-auto flex items-center justify-around bg-[#E2F4FF] w-full min-h-[136px]">
        <div className="flex flex-wrap justify-center lg:justify-around gap-10 p-5">
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
