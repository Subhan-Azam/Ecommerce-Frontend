import React from "react";
import StarsImg from "../../assets/stars.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiEye } from "react-icons/fi";

export default function ProductCard({ src, title, price }) {
  return (
    <>
      <div
        className="w-[300px] h-[313px] cursor-pointer group relative border border-[#B6B6B6] rounded-[20px] hover:shadow-md p-4 ">
        <div className="flex items-center justify-center py-2">
          <img
            // className="w-[100px] h-[100px] object-cover rounded"
            className="w-[160px] h-[160px] aspect-[3/2] object-contain"
            src={src}
            alt="Camera"
          />
        </div>

        {/* Default content */}
        <div className="">
          <div className="absolute flex flex-col space-y-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <h3 className="text-[#003F62] text-[17px] font-[500] mt-2">
              {title}
            </h3>
            <p className="text-[#4A4A4A] font-[600] text-[17px]">$ {price}</p>

            <div className="flex justify-between items-center mt-2"> 
              <img src={StarsImg}  alt="image not fount" />
            </div>
          </div>

          {/* Hover content */}
          <div className="absolute bottom-5 left-[6px] flex gap-3 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="border flex items-center justify-around rounded-[19px] bg-[#87BCD9] w-[204px] h-[60px] cursor-pointer">
              <button className="font-[600] text-[15px]">Add to cart</button>
              <div className="bg-[#EDA415] rounded-[490px] w-[30px] h-[30px] flex items-center justify-center">
                <MdOutlineShoppingCart color="white" />
              </div>
            </div>
            <div className="bg-[#87BCD9] w-[70px] h-[60px] rounded-[19px] flex items-center justify-center cursor-pointer">
              <FiEye size={23} />
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </>
  );
}
