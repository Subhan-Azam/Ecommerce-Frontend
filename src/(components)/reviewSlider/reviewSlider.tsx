import React from "react";

export default function ReviewSlider({src, title}) {
  return (
    <div className="">
      <div className="flex justify-around items-center border w-[380px] h-[147px] rounded-[20px]">
        <img src={src} className="w-[100px] h-[100px] aspect-[3/2] object-contain" alt="" />
        <div className="text-[#1B5A7D]">
          <h3 className="font-[600] text-[23px]">{title}</h3>
          <p className="font-[500] text-[18px]">(6 items)</p>
        </div>
      </div>
    </div>
  );
}
