import React from "react";

export default function CategoriesCheckBox() {
  return (
    <>
      <div className="flex items-center my-3">
        <input type="checkbox" className="w-[20px] h-[20px] text-[#B3D4E5] mr-2 rounded-[8px]" name="" id="" />
        <span className="text-[16px]">All categories</span>
        <span className="text-[16px] ml-auto">10</span>
      </div>
    </>
  );
}
