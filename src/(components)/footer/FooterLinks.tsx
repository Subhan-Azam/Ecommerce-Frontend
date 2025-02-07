import React from "react";

const FooterLinks = ({ link }) => {
  return (
    <div className="text-[#1B5A7D] w-[250px] flex flex-wrap lg:pl-10 -mb-8 md:mt-2 mt-10 md:text-left text-center">
      <h2 className="title-font tracking-widest font-[600] text-[19px] mb-3">
        {link.title}
      </h2>
      <nav className="list-none flex flex-col space-y-3">
        <li className="flex items-center gap-3">
          <div className="w-[10px] h-[10px] bg-[#D9D9D9] rounded-full" />
          <a href="#" className="hover:text-gray-800">
            {link.link1}
          </a>
        </li>

        <li className="flex items-center gap-3">
          <div className="w-[10px] h-[10px] bg-[#D9D9D9] rounded-full" />
          <a href="#" className="hover:text-gray-800">
            {link.link2}
          </a>
        </li>

        <li className="flex items-center gap-3">
          <div className="w-[10px] h-[10px] bg-[#D9D9D9] rounded-full" />
          <a href="#" className="hover:text-gray-800">
            {link.link3}
          </a>
        </li>

        <li className="flex items-center gap-3">
          <div className="w-[10px] h-[10px] bg-[#D9D9D9] rounded-full" />
          <a href="#" className="hover:text-gray-800">
            {link.link4}
          </a>
        </li>
      </nav>
    </div>
  );
};

export default FooterLinks;
