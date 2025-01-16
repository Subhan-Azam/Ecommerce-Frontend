import React from "react";
import SearchBtn from "../buttons/SearchBtn.tsx";

export default function SalesSec() {
  const bgImg = require("../../assets/bgImg.png");
  return (
    <>
      <div
        className="relative container mx-auto w-full h-[417px] rounded-none md:rounded-[20px] flex flex-col justify-center items-center pr-0 lg:items-end lg:pr-[130px] mt-10 my-0 md:my-16"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full md:bg-transparent bg-black opacity-50 rounded-none md:rounded-[20px] "></div>
        <div className="text-center flex flex-col gap-7 z-10">
          <SearchBtn
            content={"New Laptop"}
            style="bg-[#EDA415] text-white w-[134px] h-[45px] rounded-[20px]"
          />
          <div>
            <h1 className="text-[#2E8FC5] font-[700] text-[41px] sm:w-full w-[260px]">
              Sale up to 50% off
            </h1>
            <p className="text-[18px] font-[500] text-white mt-3">
              12 inch hd display
            </p>
          </div>
          <SearchBtn
            content={"Shop Now"}
            style="bg-[#EDA415] text-white w-[134px] h-[45px] rounded-[20px]"
          />
        </div>
      </div>
    </>
  );
}
