import React from "react";
import DiliveryCard from "./DiliveryCard.tsx";
import { images } from "../../constants/images.ts";

const FreeDiliverySec = () => {
  return (
    <div>
      <div className="container mx-auto my-0 md:my-8 bg-[#E2F4FF] p-4 rounded-none md:rounded-[20px]">
        <div className="px-0 md:px-20 mx-auto flex flex-wrap flex-col md:flex-row justify-center gap-3 lg:justify-between items-center space-y-10 md:space-y-0">
          <DiliveryCard
            src={images.icon1}
            title="Free delivery"
            text="on order above $50,00"
          />
          <DiliveryCard
            src={images.icon2}
            title="Best quality"
            text="best quality in low price"
          />
          <DiliveryCard
            src={images.icon3}
            title="1 year warranty"
            text="Avaliable warranty"
          />
        </div>
      </div>
    </div>
  );
};

export default FreeDiliverySec;
