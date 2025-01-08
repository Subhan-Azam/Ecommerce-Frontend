import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";

export default function NavbarSec1() {
  return (
    <div className="container mx-auto py-1">
      <div className="text-center flex flex-wrap md:flex-row flex-col items-center justify-center md:justify-between min-h-[40px]">
        <p className="text-[14px]">Need help? Call us: (+98) 0234 456 789</p>

        <div className="flex mt-2 sm:mt-0">
          <div className="flex gap-2 items-center w-[109px] mr-4 md:mr-[36px]">
            <CiLocationOn size={24} />
            <p className="text-[14px]">Our Store</p>
          </div>
          <div className="flex gap-2 items-center w-[158px]">
            <CiDeliveryTruck size={24} />
            <p className="text-[14px]">Track Your Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}
