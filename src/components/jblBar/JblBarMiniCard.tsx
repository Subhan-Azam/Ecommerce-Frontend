import React from "react";
import { PropsTypes } from "../../types/types";
import { images } from "../../constants/images.ts";

const JblBarMiniCard: React.FC<PropsTypes> = ({ src }) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center border rounded-[20px] border-[#B6B6B6] max-w-[493px] w-full min-h-[195px] p-4">
      <div className="flex items-center justify-center w-full sm:w-[40%]">
        <img
          alt="product"
          className="rounded-lg max-w-full h-auto object-cover aspect-[3/2]"
          src={src}
        />
      </div>

      <div className="flex-grow space-y-3 text-center sm:text-left sm:pl-6">
        <h2 className="font-bold text-[#003F62] text-lg md:text-xl">
          Play Game
        </h2>
        <h3 className="text-[#4A4A4A] font-semibold text-lg md:text-xl">
          $11.70
        </h3>
        <img
          src={images.stars2Img}
          alt="Rating Stars"
          className="mx-auto sm:mx-0"
        />
      </div>
    </div>
  );
};

export default JblBarMiniCard;
