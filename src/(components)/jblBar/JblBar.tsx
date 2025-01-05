// import React from "react";
// import JblBarMiniCard from "./JblBarMiniCard.tsx";
// import largeSpeaker from "../../assets/large speaker.png";
// import gamePadImg from "../../assets/game pad (2).png";
// import laptopImg from "../../assets/laptop.jpeg";
// import starsImg from '../../assets/stars.png'


// export default function JblBar() {
//   return (
//     <div className="container mx-auto">
//       <div className=" flex flex-wrap lg:flex-nowrap justify-between items-center gap-7">
//         <div className="max-w-[800px] w-full h-[505px] flex justify-center items-center border border-[#B6B6B6] rounded-[20px] ">
//           <div className=" flex justify-center items-center my-5 p-4 lg:w-[700px] min-h-[400px]">
//             <div className="h-full flex sm:flex-row flex-col items-center md:justify-between justify-center text-center sm:text-left">
//               <img
//                 alt="speaker"
//                 className="flex-shrink-0 rounded-lg max-w-[345px] w-full min-h-[380px] object-cover object-center sm:mb-0 mb-4"
//                 src={largeSpeaker}
//               />
//               <div className="flex-grow space-y-4 sm:pl-8">
//                 <h2 className="title-font font-[#003F62] text-[17px] text-[#003F62]">
//                 JBL bar 2.1 deep bass
//                 </h2>
//                 <h3 className="text-[#4A4A4A] font-[600] text-[17px] mb-3">
//                 $11,70
//                 </h3>
//                 <div>

//                 <img src={starsImg} alt="" />
//                 </div>
//                 <div className="flex gap-3 text-[#EDA415] font-[700] text-[22px] mt-11">
//                   <h2 className="bg-[#E2F4FF] rounded-full w-[77px] h-[78px] flex justify-center items-center">57</h2>
//                   <h2 className="bg-[#E2F4FF] rounded-full w-[77px] h-[78px] flex justify-center items-center">11</h2>
//                   <h2 className="bg-[#E2F4FF] rounded-full w-[77px] h-[78px] flex justify-center items-center">33</h2>
//                   <h2 className="bg-[#E2F4FF] rounded-full w-[77px] h-[78px] flex justify-center items-center">59</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-wrap flex-col items-center justify-center">
//           <JblBarMiniCard src={gamePadImg} />
//           <JblBarMiniCard src={laptopImg} />
//         </div>
//       </div>
//     </div>
//   );
// }






import React from "react";
import JblBarMiniCard from "./JblBarMiniCard.tsx";
import largeSpeaker from "../../assets/large speaker.png";
import gamePadImg from "../../assets/game pad (2).png";
import laptopImg from "../../assets/laptop.jpeg";
import starsImg from "../../assets/stars.png";

export default function JblBar() {
  return (
    <div className="container mx-auto p-4 hidden md:block">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-7">
        {/* Main Speaker Section */}
        <div className="max-w-full w-full lg:w-[60%] min-h-[505px] flex justify-center items-center border border-[#B6B6B6] rounded-[20px] p-4">
          <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left space-y-5 sm:space-y-0">
            <img
              alt="speaker"
              className="flex-shrink-0 rounded-lg max-w-full sm:max-w-[345px] w-full object-cover object-center"
              src={largeSpeaker}
            />
            <div className="flex-grow space-y-4 sm:pl-8">
              <h2 className="title-font font-bold text-[#003F62] text-lg md:text-xl">
                JBL bar 2.1 deep bass
              </h2>
              <h3 className="text-[#4A4A4A] font-semibold text-lg md:text-xl">
                $11,70
              </h3>
              <div>
                <img src={starsImg} alt="stars" />
              </div>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start text-[#EDA415] font-bold text-lg mt-5">
                {["57", "11", "33", "59"].map((num, idx) => (
                  <div
                    key={idx}
                    className="bg-[#E2F4FF] rounded-full w-[65px] h-[65px] flex justify-center items-center"
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mini Card Section */}
        <div className="flex flex-col gap-5 items-center justify-center w-full lg:w-[35%]">
          <JblBarMiniCard src={gamePadImg} />
          <JblBarMiniCard src={laptopImg} />
        </div>
      </div>
    </div>
  );
}
