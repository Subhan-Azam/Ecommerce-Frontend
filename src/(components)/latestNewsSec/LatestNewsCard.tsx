import React from "react";

interface LatestNewsCardPropsTypes {
  src: String;
}

const LatestNewsCard: React.FC<LatestNewsCardPropsTypes> = ({ src }) => {
  return (
    <>
      <div className="border rounded-[20px] p-4 lg:w-[650px]">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-[318px] h-[288px] object-cover object-center sm:mb-0 mb-4"
            src={src}
          />
          <div className="flex-grow sm:pl-8 text-[#1B5A7D]">
            <div className="flex justify-center md:justify-start">
              <span className="border rounded-[20px] w-[147px] text-center py-2 px-5">22,oct,2021</span>
            </div>
            <h2 className="title-font font-[600] text-[22px] mt-2 mb-3">
              Who avoids a pain that produces?
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
            <p className="mt-6">spacing</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNewsCard;
