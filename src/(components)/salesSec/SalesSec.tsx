import React from "react";
import SearchBtn from "../buttons/SearchBtn.tsx";
import bgImg from "../../assets/bgImg.png";

export default function SalesSec() {
  return (
    <div className="mx-5">
      <div
        className="container mx-auto h-[417px] rounded-[20px] flex flex-col justify-center items-center pr-0 lg:items-end lg:pr-[130px] my-16 relative"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center flex flex-col gap-7 z-10">
          {" "}
          {/* z-10 ensures text is above the image */}
          <SearchBtn
            content={"New Laptop"}
            style="bg-[#EDA415] text-white w-[132px] h-[45px] rounded-2xl"
          />
          <div className="">
            <h1 className="text-[#2E8FC5] font-[700] text-[41px]">
              Sale up to 50% off
            </h1>
            <p className="text-[18px] text-white mt-3">12 inch hd display</p>
          </div>
          <SearchBtn
            content={"Shop Now"}
            style="bg-[#EDA415] text-white w-[132px] h-[45px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
