import React from "react";
import { FreeDeliveryPropsTypes } from "../../types/types";

const ReviewCard: React.FC<FreeDeliveryPropsTypes> = ({ src, title }) => {
  return (
    <>
      <div className="group flex justify-around items-center border border-[#B6B6B6] w-full min-h-[147px] rounded-[20px]">
        <img
          src={src}
          className="w-[100px] h-[100px] aspect-[3/2] object-contain transition-transform duration-300 group-hover:scale-110"
          alt=""
        />
        <div className="text-[#1B5A7D]">
          <h3 className="font-[600] text-[23px]">{title}</h3>
          <p className="font-[500] text-[18px]">(6 items)</p>
        </div>
      </div>
    </>
  );
};
export default ReviewCard;
