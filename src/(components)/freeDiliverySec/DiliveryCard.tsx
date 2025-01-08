import React from "react";
interface FreeDiliveryPropsTypes {
  src: String;
  title: String;
  text: String;
}


const DiliveryCard: React.FC<FreeDiliveryPropsTypes> = ({
  src,
  title,
  text,
}) => {
  return (
    <>
      <div className="flex items-center p-2">
        <img
          undefinedhidden="true"
          alt="1 year warranty icon"
          src={src}
          className="mr-2"
        />
        <div>
          <h3 className="font-semibold text-[22px] text-[#003F62]">{title}</h3>
          <p className="text-[18px] font-[400] text-[#003F62]">{text}</p>
        </div>
      </div>
    </>
  );
};

export default DiliveryCard;
