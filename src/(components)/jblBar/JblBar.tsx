import React from "react";
import JblBarMiniCard from "./JblBarMiniCard.tsx";

export default function JblBar() {
  const largeSpeaker = require("../../assets/large speaker.png");
  const gamePadImg = require("../../assets/game pad (2).png");
  const laptopImg = require("../../assets/laptop.jpeg");
  const starsImg = require("../../assets/stars.png");

  return (
    <div className="mx-5">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-7">
          {/* ✅ Large Speaker Card (Main Product) */}
          <div className="w-full lg:w-[60%] border border-[#B6B6B6] rounded-[20px] p-4 flex flex-col items-center lg:flex-row">
            <img
              alt="speaker"
              className="rounded-lg w-full sm:w-[345px] max-w-full h-auto object-cover"
              src={largeSpeaker}
            />
            <div className="flex-grow space-y-4 text-center lg:text-left">
              <h2 className="title-font font-bold text-[#003F62] text-lg md:text-xl">
                JBL bar 2.1 deep bass
              </h2>
              <h3 className="text-[#4A4A4A] font-semibold text-lg md:text-xl">
                $11,70
              </h3>
              <img src={starsImg} alt="stars" className="mx-auto lg:mx-0" />
              <div className="flex gap-3 justify-center lg:justify-start text-[#EDA415] font-bold text-lg mt-5">
                {["57", "11", "33", "59"].map((num, idx) => (
                  <div
                    key={idx}
                    className="bg-[#E2F4FF] rounded-full w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] flex justify-center items-center"
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ✅ Mini Cards (Smaller Products) */}
          <div className="w-full lg:w-[35%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            <JblBarMiniCard src={gamePadImg} />
            <JblBarMiniCard src={laptopImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
