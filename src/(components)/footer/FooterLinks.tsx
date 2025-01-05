import React from "react";

export default function FooterLinks() {
  return (
    <>
      <div className="text-[#1B5A7D] lg:w-1/4 md:w-1/2 w-full ">
        <h2 className="title-font tracking-widest font-[600] text-[19px] mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none flex flex-col space-y-3">
          <li>
            <a href="#" className="hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </>
  );
}
