import React from "react";
import SearchBtn from "../buttons/SearchBtn.tsx";

export default function ProductLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-5 md:mx-auto lg:justify-between md:items-center 
    max-w-[340px] md:max-w-[600px] lg:max-w-[1310px] lg:w-full">
        <h2 className="text-[27px] leading-[41px] font-[600] text-[#1B5A7D] ">
          Popular products
        </h2>
      <div className="flex flex-wrap justify-center gap-3">
        <SearchBtn
          content={"Cameras"}
          style="border border-[#003F62] text-[#003F62] w-[139px] h-[45px] rounded-[20px]"
        />
        <SearchBtn
          content={"Laptop"}
          style="border border-[#003F62] text-[#003F62] w-[139px] h-[45px] rounded-[20px]"
        />
        <SearchBtn
          content={"Tablets"}
          style="border border-[#003F62] text-[#003F62] w-[139px] h-[45px] rounded-[20px]"
        />
        <SearchBtn
          content={"Mouse"}
          style="border border-[#003F62] text-[#003F62] w-[139px] h-[45px] rounded-[20px]"
        />
      </div>
    </div>
  );
}
