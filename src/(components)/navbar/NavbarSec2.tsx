// import React from "react";
// import SearchBtn from "../buttons/SearchBtn.tsx";
// import NavLogo from "../../assets/logo 1.png";
// import { AiOutlineUser } from "react-icons/ai";
// import { GoHeart } from "react-icons/go";
// import { MdOutlineShoppingCart } from "react-icons/md";

// export default function NavbarSec2() {
//   return (
//     <div className="flex flex-wrap items-center justify-end lg:justify-between bg-[#003F62] min-h-[90px] px-[40px] py-3 lg:py-0">
//       <div className="flex  justify-between items-center w-full max-w-[620px]">
//         <img src={NavLogo} className="w-[140px] h-[39px]" alt="Logo" />
//         <div className="bg-white flex rounded-2xl">
//           <input
//             className="outline-none px-4 rounded-2xl opacity-55"
//             type="text"
//             placeholder="Search any thing"
//           />
//           <SearchBtn
//             content={"Search"}
//             style="bg-[#EDA415] text-white w-[132px] h-[45px] rounded-2xl"
//           />
//         </div>
//       </div>
//       <div className="flex gap-6 text-white">
//         <div className="flex justify-between gap-2">
//           <AiOutlineUser size={24} />
//           <p className="text-[14px] hidden sm:block">Sign in</p>
//         </div>
//         <div className="flex justify-between gap-2">
//           <GoHeart size={24} />
//           <p className="text-[14px] hidden sm:block">Like</p>
//         </div>
//         <div className="flex justify-between gap-2">
//           <MdOutlineShoppingCart size={24} />
//           <p className="text-[14px] hidden sm:block">Cart</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import SearchBtn from "../buttons/SearchBtn.tsx";
import NavLogo from "../../assets/logo 1.png";
import { AiOutlineUser } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export default function NavbarSec2() {
  return (
    <div className="flex flex-wrap items-center justify-between bg-[#003F62] px-4 md:px-10 min-h-[90px]">
      {/* Left Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <Link to={"/"}>
          <img
            src={NavLogo}
            className="w-[140px] h-[39px] mr-5"
            alt="Logo"
          />
        </Link>
        <div className="hidden md:flex bg-white rounded-[20px] w-full md:w-auto items-center">
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

      {/* Right Section */}
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
