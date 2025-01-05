// import React from "react";
// import { useState } from "react";
// import SearchBtn from "../buttons/SearchBtn.tsx";
// import HeroImg1 from "../../assets/hero img.png";
// import HeroImg2 from "../../assets/dslr 3.png";
// import HeroImg3 from "../../assets/dslr 2.png";

// export default function HeroSection() {
//   const [activeButton, setActiveButton] = useState(1);
//   const [activeImage, setActiveImage] = useState(HeroImg1);

//   const images = {
//     1: HeroImg1, // Image for button 1
//     2: HeroImg2, // Image for button 2
//     3: HeroImg3, // Image for button 3
//   };

//   const handleButtonClick = (buttonNumber) => {
//     setActiveButton(buttonNumber);
//     setActiveImage(images[buttonNumber]);
//   };
//   return (
//     <div>
//       <div className="relative container flex flex-wrap-reverse justify-between items-center mx-auto px-32 h-full min-h-[400px]">
//         <div className="space-y-5">
//           <div className="w-[178px]">
//             <h1 className="text-[43px] font-[700] text-[#1B5A7D]">
//               Canon Camera
//             </h1>
//           </div>
//           <div className="flex gap-7">
//             <SearchBtn
//               content={"Shop Now"}
//               style="bg-[#EDA415] text-white w-[132px] h-[45px] rounded-2xl"
//             />
//             <SearchBtn
//               content={"View More"}
//               style="text-[#316887] w-[132px] h-[45px] rounded-2xl border border-[#316887]"
//             />
//           </div>

//           {/* change image by radio btn */}
//           <div className="flex justify-center gap-3">
//             {/* Buttons */}
//             <button
//               onClick={() => handleButtonClick(1)}
//               className={
//                 activeButton === 1
//                   ? "bg-[#EDA415] w-[16px] h-[16px] rounded-full"
//                   : "border border-[#ADADAD] w-[16px] h-[16px] rounded-full"
//               }
//             />

//             <button
//               onClick={() => handleButtonClick(2)}
//               className={
//                 activeButton === 2
//                   ? "bg-[#EDA415] w-[16px] h-[16px] rounded-full"
//                   : "border border-[#ADADAD] w-[16px] h-[16px] rounded-full"
//               }
//             />

//             <button
//               onClick={() => handleButtonClick(3)}
//               className={
//                 activeButton === 3
//                   ? "bg-[#EDA415] w-[16px] h-[16px] rounded-full"
//                   : "border border-[#ADADAD] w-[16px] h-[16px] rounded-full"
//               }
//             />
//           </div>
//         </div>

//         {/* image changes */}
//         <div className="relative">
//           <div className="">
//             {activeImage ? (
//               <img
//                 src={activeImage}
//                 alt="Active"
//                 className="w-[331px] h-[350px] aspect-auto object-contain"
//               />
//             ) : (
//               <p>Please click a button to see an image</p>
//             )}
//           </div>
//           <div className="absolute bottom-5 -right-5 bg-[#EDA415] flex items-center justify-center w-[110px] h-[104px] rounded-full">
//             <p className="font-[600] text-[21px] w-[48px] text-center text-white">
//               only $89
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import SearchBtn from "../buttons/SearchBtn.tsx";
import HeroImg1 from "../../assets/hero img.png";
import HeroImg2 from "../../assets/dslr 3.png";
import HeroImg3 from "../../assets/dslr 2.png";

export default function HeroSection() {
  const [activeButton, setActiveButton] = useState(1);
  const [activeImage, setActiveImage] = useState(HeroImg1);

  const images = {
    1: HeroImg1, // Image for button 1
    2: HeroImg2, // Image for button 2
    3: HeroImg3, // Image for button 3
  };

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    setActiveImage(images[buttonNumber]);
  };

  return (
    <div>
      <div className="relative container flex flex-col-reverse lg:flex-row justify-between items-center mx-auto px-6 lg:px-32 py-8 min-h-[400px]">
        {/* Text and Buttons Section */}
        <div className="space-y-5 lg:w-[45%] text-center lg:text-left">
          <h1 className="text-[28px] lg:text-[43px] font-bold text-[#1B5A7D]">
            Canon Camera
          </h1>

          <div className="flex flex-col lg:flex-row gap-5 justify-center lg:justify-start">
            <SearchBtn
              content={"Shop Now"}
              style={
                "bg-[#EDA415] text-white w-[300px] lg:w-[132px] h-[45px] rounded-2xl"
              }
            />
            <SearchBtn
              content={"View More"}
              style={
                "text-[#316887] w-[300px] lg:w-[132px] h-[45px] rounded-2xl border border-[#316887]"
              }
            />
          </div>

          {/* Change image by radio btn */}
          <div className="flex justify-center lg:justify-start gap-3 mt-4">
            {[1, 2, 3].map((number) => (
              <button
                key={number}
                onClick={() => handleButtonClick(number)}
                className={
                  activeButton === number
                    ? "bg-[#EDA415] w-[16px] h-[16px] rounded-full"
                    : "border border-[#ADADAD] w-[16px] h-[16px] rounded-full"
                }
              />
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative lg:w-[45%] mt-8 lg:mt-0 flex justify-center">
          <div className="w-full max-w-[400px]">
            {activeImage ? (
              <img
                src={activeImage}
                alt="Active"
                className="w-full h-auto object-contain"
              />
            ) : (
              <p>Please click a button to see an image</p>
            )}
          </div>

          <div className="absolute bottom-5 -right-5 bg-[#EDA415] flex items-center justify-center w-[110px] h-[104px] rounded-full">
            <p className="font-[600] text-[18px] lg:text-[21px] text-center text-white">
              only $89
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
