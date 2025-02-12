import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";

export default function NavbarSec1() {
  return (
    <div className="py-2 px-5 md:px-10">
      <div className="text-center flex flex-wrap md:flex-row flex-col items-center justify-center md:justify-between min-h-[40px]">
        <p className="text-[14px]">Need help? Call us: (+98) 0234 456 789</p>

        <div className="flex mt-2">
          <div className="flex gap-2 items-center justify-end w-[109px] mr-4 md:mr-[36px]">
            <CiLocationOn size={24} />
            <p className="text-[14px]">Our Store</p>
          </div>
          <div className="flex gap-2 items-center justify-end w-[158px]">
            <CiDeliveryTruck size={24} />
            <p className="text-[14px]">Track Your Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}
