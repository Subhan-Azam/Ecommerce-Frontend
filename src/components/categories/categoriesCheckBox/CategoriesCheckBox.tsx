import React from "react";
import { titleProp } from "../../../types/types";

const CategoriesCheckBox: React.FC<titleProp> = ({ title }) => {
  return (
    <>
      <div className="flex items-center my-3">
        <div className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="w-[20px] h-[20px] text-[#B3D4E5] mr-2 rounded-[8px]"
            name=""
            id=""
          />
          <span className="text-[16px]">{title}</span>
        </div>
        <span className="text-[16px] ml-auto">10</span>
      </div>
    </>
  );
};

export default CategoriesCheckBox;
