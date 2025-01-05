import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";



export default function NavbarSec3() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 py-4 md:py-0 md:px-10  bg-[#F4F4F4]">
      {/* Left Section */}
      <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-5 md:gap-10">
        <Link to="/allCategories">
          <button className="bg-[#EDA415] flex items-center justify-center text-white gap-2 w-full md:w-[210px] h-12 md:h-[70px]">
            All Categories <IoIosArrowDown size={20} />
          </button>
        </Link>
        <nav className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-sm">
          <Link to="/" className="">
            <div className="flex items-center gap-1 hover:text-[#EDA415]">
              Home
              <IoIosArrowDown size={20} />
            </div>
          </Link>
          <Link to="/single-product" className="">
            <div className="flex items-center gap-1 hover:text-[#EDA415]">
              Single Product
              <IoIosArrowDown size={20} />
            </div>
          </Link>
          <Link to="#" className="">
            <div className="flex items-center gap-1 hover:text-[#EDA415]">
              Blog
            </div>
          </Link>
          <Link to="#" className="">
            <div className="flex items-center gap-1 hover:text-[#EDA415]">
              Pages
              <IoIosArrowDown size={20} />
            </div>
          </Link>
          <Link to="/about" className="">
            <div className="flex items-center gap-1 hover:text-[#EDA415]">
              About Us
            </div>
          </Link>
        </nav>
      </div>

      {/* Right Section */}
      <div className="mt-4 md:mt-0">
        <h3 className="font-bold text-center md:text-left">
          30 Days Free Returns
        </h3>
      </div>
    </div>
  );
}
