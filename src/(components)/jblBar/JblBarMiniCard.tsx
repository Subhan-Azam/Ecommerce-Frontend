import React from "react";
import starsImg from "../../assets/stars.png";

interface JblBarMiniCardPropsTypes {
  src: String;
}


const JblBarMiniCard: React.FC<JblBarMiniCardPropsTypes> = ({ src }) => {
  return (
    <>
      <div className="flex items-center border rounded-[20px] border-[#B6B6B6] lg:w-[493px] min-h-[240px]">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-[282px] h-[168px] object-cover object-center sm:mb-0 mb-4"
            src={src}
          />
          <div className="flex-grow space-y-3 sm:pl-8">
            <h2 className="title-font font-[#003F62] text-[17px] text-[#003F62]">
              Play game
            </h2>
            <h3 className="text-[#4A4A4A] font-[600] text-[17px] mb-3">
              $11,70
            </h3>
            <img src={starsImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default JblBarMiniCard;
