import React from "react";
interface AddToCartCompPropsTypes {
  src: String;
}

const AddToCartComp: React.FC<AddToCartCompPropsTypes> = ({ src }) => {
  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-5">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 col-span-2">
            <img src={src} alt="" />
            <div className="">
              <h4 className="">Play Game</h4>
              <p className="">Color: Green</p>
              <p className="">Size: 30</p>
            </div>
          </div>
          <h2 className=" flex justify-center items-center">$ 11,70</h2>
          <div className=" flex justify-center items-center ">
            <button className="border w-[35px] text-center bg-[#F2F2F2]">
              -
            </button>
            <p className="border w-[63px] text-center bg-[#F2F2F2]">1</p>
            <button className="border w-[35px] text-center bg-[#F2F2F2]">
              -
            </button>
          </div>
          <div className=" flex justify-center items-center">$ 11,70</div>
        </div>
      </div>
    </>
  );
};

export default AddToCartComp;
