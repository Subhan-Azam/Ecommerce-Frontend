import React, { useState } from "react";
import SearchBtn from "../buttons/SearchBtn.tsx";
import { images as imageAssets } from "../../constants/images.ts";

export default function HeroSection() {
  const [activeButton, setActiveButton] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string | undefined>(
    imageAssets.HeroImg1 as string
  );

  const images: Record<number, string> = {
    1: imageAssets.HeroImg1,
    2: imageAssets.HeroImg2,
    3: imageAssets.HeroImg3,
  };

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    setActiveImage(images[buttonNumber]);
  };

  return (
    <div>
      <div className="relative container flex flex-col-reverse lg:flex-row justify-between items-center mx-auto px-6 lg:px-32 py-8 min-h-[400px]">
        <div className="space-y-5 lg:w-[45%] text-center lg:text-left">
          <h1 className="text-[28px] lg:text-[43px] font-bold text-[#1B5A7D]">
            Canon Camera
          </h1>

          <div className="flex flex-col lg:flex-row gap-5 justify-center lg:justify-start">
            <SearchBtn
              content={"Shop Now"}
              style={
                "bg-[#EDA415] text-white w-full md:w-[300px] lg:w-[132px] h-[45px] rounded-2xl"
              }
            />
            <SearchBtn
              content={"View More"}
              style={
                "text-[#316887] w-[300px] lg:w-[132px] h-[45px] rounded-2xl border border-[#316887]"
              }
            />
          </div>

          <div className="flex justify-center lg:justify-start gap-3 mt-4">
            {[1, 2, 3].map((number) => (
              <button
                key={number}
                onClick={() => handleButtonClick(number)}
                className={
                  activeButton === number
                    ? "bg-[#EDA415] w-[16px] h-[16px] rounded-full"
                    : "border border-[#ADADAD] w-[16px] h-[16px] rounded-full"
                }
              />
            ))}
          </div>
        </div>

        <div className="relative lg:w-[45%] mt-8 lg:mt-0 flex justify-center">
          <div className="w-full max-w-[400px]">
            {activeImage ? (
              <img
                src={activeImage}
                alt="Active"
                className="w-full h-auto object-contain"
              />
            ) : (
              <p>Please click a button to see an image</p>
            )}
          </div>

          <div className="absolute bottom-5 -right-5 bg-[#EDA415] flex items-center justify-center w-[110px] h-[104px] rounded-full">
            <p className="font-[600] text-[18px] lg:text-[21px] text-center text-white">
              only $89
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
