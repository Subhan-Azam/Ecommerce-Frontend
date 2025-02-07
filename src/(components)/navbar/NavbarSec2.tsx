import React from "react";
import SearchBtn from "../buttons/SearchBtn.tsx";
import { AiOutlineUser } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { images } from "../../constants/images.ts";


export default function NavbarSec2() {


  return (
    <div className="flex flex-wrap items-center justify-between bg-[#003F62] px-4 md:px-10 min-h-[90px]">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <Link to={"/"}>
          <img
            src={images.NavLogo}
            className="w-[140px] h-[39px] mr-5"
            alt="Logo"
          />
        </Link>
        <div className="hidden lg:flex bg-white rounded-[20px] w-full md:w-auto items-center">
          <input
            className="outline-none px-4 py-2 rounded-l-2xl w-full md:w-[200px] lg:w-[300px] text-sm"
            type="text"
            placeholder="Search anything"
          />
          <SearchBtn
            content={"Search"}
            style={
              "bg-[#EDA415] text-white w-[100px] md:w-[132px] h-[40px] md:h-[45px] rounded-[20px]"
            }
          />
        </div>
      </div>

      <div className="flex justify-center md:justify-be gap-4 md:gap-6 text-white">
        <Link to="#" className="flex items-center gap-2">
          <AiOutlineUser size={24} />
          <p className="text-[14px] hidden sm:block">Sign in</p>
        </Link>
        <Link to="#" className="flex items-center gap-2">
          <GoHeart size={24} />
          <p className="text-[14px] hidden sm:block">Like</p>
        </Link>
        <Link to="/addtocart" className="flex items-center gap-2">
          <MdOutlineShoppingCart size={24} />
          <p className="text-[14px] hidden sm:block">Cart</p>
        </Link>
      </div>
    </div>
  );
}
