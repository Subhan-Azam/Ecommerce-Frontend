import React from "react";
import { images } from "../../constants/images.ts";

export default function LogosSec() {
  return (
    <div className="container mx-auto">
      <div className="bg-[#E2F4FF] flex items-center lg:py-0 py-10 w-full min-h-[136px]">
        <div className="mx-auto flex flex-wrap justify-center lg:justify-around gap-10">
          <img src={images.logosImg1} alt="" className="my-1 sm:my-3" />
          <img src={images.logosImg2} alt="" className="my-1 sm:my-3" />
          <img src={images.logosImg3} alt="" className="my-1 sm:my-3" />
          <img src={images.logosImg4} alt="" className="my-1 sm:my-3" />
          <img src={images.logosImg5} alt="" className="my-1 sm:my-3" />
        </div>
      </div>
    </div>
  );
}
