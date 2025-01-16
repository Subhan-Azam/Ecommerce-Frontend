import React from "react";
interface companyMemberCardPropsTypes {
  src: String;
}

const companyMemberCard: React.FC<companyMemberCardPropsTypes> = ({ src }) => {
  return (
    <div className="flex justify-center cursor-pointer">
      <div className="group border border-[#B6B6B6] rounded-[20px] bg-card p-4 my-5 max-w-[432px] w-full">
        <div className="flex items-center gap-[37px]">
          <img
            className="w-[100px] h-[100px] rounded-full transition-transform duration-300 group-hover:scale-110"
            src={src}
            alt="Savannah Nguyen"
          />
          <h2 className="text-[15px] text-[#003F62] font-semibold text-primary-foreground">
            Savannah Nguyen
          </h2>
        </div>
        <p className=" text-[#003F62] px-5 py-[9px] mt-7 bg-[#E2F4FF] rounded-[18px] text-[13px]">
          Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
          bibendum ullamcorper. Phasellus tristique aenean at lorem sed
          scelerisque.
        </p>
      </div>
    </div>
  );
};

export default companyMemberCard;
