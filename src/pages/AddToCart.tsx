import React from "react";
import AddToCartComp from "../(components)/addToCartComp/AddToCartComp.tsx";
import SearchBtn from "../(components)/buttons/SearchBtn.tsx";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function AddToCart() {
  const greenGamePad = "../assets/green game pad.png";

  return (
    <section className="font-poppins bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6 w-full mt-6">
              <div className="grid grid-cols-5 bg-[#E2F4FF] min-h-[56px]">
                <h2 className="flex items-center col-span-2 pl-8 font-[500] text-[20px]">
                  jfnefn
                </h2>
                <h2 className="flex justify-center items-center  font-[500] text-[20px]">
                  jfnefn
                </h2>
                <h2 className="flex justify-center items-center  font-[500] text-[20px]">
                  jfnefn
                </h2>
                <h2 className="flex justify-center items-center  font-[500] text-[20px]">
                  jfnefn
                </h2>
              </div>
              <AddToCartComp src={greenGamePad} />
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="bg-[#E2F4FF] min-h-[56px] flex items-center justify-center text-xl font-semibold text-gray-900 dark:text-white">
                Order summary
              </p>
              <div className="flex justify-between items-center">
                <h3 className="font-[500] text-[19px]">Subtotal</h3>
                <h3 className="font-[500] text-[22px]">$ 23,20</h3>
              </div>
              <hr />
              <div className="border rounded-[20px] h-[52px] flex items-center justify-between px-6">
                <input type="text" className="outline-none -ml-3" />
                <p className="text-[#003F62]">Apply</p>
              </div>
              <hr />
              <div className="border rounded-[20px] h-[52px] flex items-center justify-between px-6">
                <input type="text" className="outline-none -ml-3" />
                <RiArrowDropDownLine size={30} />
              </div>

              <div className="flex justify-between items-center">
                <h3 className="text-[18px]">Total amount</h3>
                <h3 className="text-[18px]">$ 23,20</h3>
              </div>
              <SearchBtn
                style={
                  "w-full bg-[#EDA415] text-white font-[600] text-[20px] rounded-[32px] h-[52px]"
                }
                content="Proceed to ckeckout"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
