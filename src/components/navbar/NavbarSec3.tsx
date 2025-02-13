import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NavbarSec3() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 py-4 md:py-0 md:px-10 bg-[#F4F4F4]">
      <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-5 md:gap-10">
        <Link to="/allCategories">
          <button className="bg-[#EDA415] flex items-center justify-center w-[218px] h-[70px] text-white text-[16px] font-[500] gap-2">
            All Categories <IoIosArrowDown size={20} />
          </button>
        </Link>
        <nav className="hidden lg:flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-sm">
          <Link to="/">
            <div className="flex items-center gap-1 hover:text-[#EDA415]">
              Home
              <IoIosArrowDown size={20} />
            </div>
          </Link>
          <Link to="#">
            <div className="flex items-center gap-1 hover:text-[#EDA415]">
              Single Product
              <IoIosArrowDown size={20} />
            </div>
          </Link>
          <Link to="#">
            <div className="flex items-center gap-1 hover:text-[#EDA415]">
              Blog
            </div>
          </Link>
          <Link to="#">
            <div className="flex items-center gap-1 hover:text-[#EDA415]">
              Pages
              <IoIosArrowDown size={20} />
            </div>
          </Link>
          <Link to="#">
            <div className="flex items-center gap-1 hover:text-[#EDA415]">
              About Us
            </div>
          </Link>
        </nav>
      </div>

      <div className="mt-4 md:mt-0">
        <h3 className="font-bold text-center md:text-left">
          30 Days Free Returns
        </h3>
      </div>
    </div>
  );
}
