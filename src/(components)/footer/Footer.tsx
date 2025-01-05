import React from "react";
import logo from "../../assets/logo (1).png";
import FooterLinks from "./FooterLinks.tsx";
import { SlSocialGoogle } from "react-icons/sl";
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiWhatsappLogo } from "react-icons/pi";
import sendImg from "../../assets/send-2.png";
import headPhone from "../../assets/headphone.png";

export default function Footer() {
  return (
    <>
      <footer className="text-[#1B5A7D] py-12 px-5 bg-[#E2F4FF] body-font">
        {/*  */}
        <div className="container mx-auto px-16 min-h-[130px] flex flex-col md:flex-row items-center justify-between flex-wrap p-4 bg-white rounded-[20px]">
          <div className="mb-4 md:mb-0">
            <h2 className="text-[29px] font-[700] text-[#1B5A7D] text-center">
              Subscribe newsletter
            </h2>
            {/* <p className="text-muted-foreground">Email address</p> */}
          </div>
          <div className="flex justify-between px-3 mx-3 items-center bg-[#EDA415] max-w-[338px] w-full h-[63px] rounded-[20px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="placeholder-white bg-transparent outline-none text-[14px] text-white rounded-l-md p-2"
            />
            <button>
              <img src={sendImg} alt="" />
            </button>
            {/* <button className="bg-accent text-accent-foreground p-2 rounded-r-md hover:bg-accent/80">
              Subscribe
              </button> */}
          </div>
          <div className="flex items-center gap-5 mt-4 md:mt-0">
            <img src={headPhone} alt="" />
            <div className="flex flex-col">
              <span className="text-muted-foreground mr-2">Call us 24/7:</span>
              <span className="text-primary font-semibold">
                (+62) 0123 567 789
              </span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="container px-5 py-12 mx-auto flex justify-center items-center md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 space-y-8 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src={logo} alt="" />
            </a>
            <p className="w-[190px] ml-8 md:ml-0 mt-2 text-sm text-[#1B5A7D]">
              64 st james boulevard hoswick , ze2 7zj
            </p>
            <hr className="w-[250px] h-[1px] bg-[#9D9D9D] border-none" />

            <div className="flex justify-center md:justify-normal gap-[37px]">
              <SlSocialGoogle size={24} />
              <RiFacebookCircleLine size={24} />
              <PiWhatsappLogo size={24} />
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <FooterLinks />
            <FooterLinks />
            <FooterLinks />
          </div>
        </div>
      </footer>
    </>
  );
}
