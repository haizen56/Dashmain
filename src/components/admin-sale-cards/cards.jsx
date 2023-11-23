// import React from 'react'
// import { cards } from '../../dates/jummy'

// const Cards = () => {
//     return (
//         <div className=" justify-start w-full items-start flex-wrap xl:flex-nowrap gap-4 inline-flex">
//             {cards.map(({ text, icon, money,  iconColor }, index) => {
//                 return (
//                     <div key={index} className="min-w-[220px] xl:w-full grow shrink basis-0 rounded-xl drop-shadow justify-start items-start gap-4 bg-white flex">
//                         <div className="grow shrink basis-0 bg-white rounded-xl flex-col justify-start items-start inline-flex">
//                             {/* <div className="w-full h-[120px] px-6 pt-6 pb-4 bg-white rounded-xl shadow flex-col justify-start items-start gap-5 flex">
//                                 <div className="self-stretch justify-start items-center gap-3 inline-flex">
//                                     <div className={`w-8 h-6 relative  ${iconColor}`}><i className={icon}></i></div>
//                                     <div className="text-zinc-900 text-[40px] font-semibold leading-[48px]">{money}</div>
//                                     <div className="grow shrink basis-0 text-zinc-900 text-base font-medium leading-normal">{text}</div>

//                                 </div>
                              
//                             </div> */}

// <div className={`w-full h-[120px] px-6 pt-10 pb-4 bg-${iconColor === 'white' ? 'white' : 'blue-600'} rounded-xl shadow flex-col justify-start items-start flex`}>
//       <div className="flex items gap-6">
//         {/* Left Side (Icons) */}
//         <div className={`w-full h-full px-4 pt-4 rounded-xl relative ${iconColor === 'white' ? 'bg-blue-400' : 'bg-white'} text-blue-800`}>
//           <i className={icon}></i>
//         </div>

//         {/* Right Side (Text and Money) */}
//         <div className="flex flex-row shrink-0 basis-0 justify-between w-8 text-white">
//           <div className="text-[40px] font-semibold leading-[48px]">{money}</div>
//           <div className="text-base font-medium leading-normal">{text}</div>
//         </div>
//       </div>
//     </div>
                            
//                             <div className=" w-full px-6 py-4 justify-between items-center gap-4 inline-flex">
//                                 <div className="grow shrink basis-0 text-pink-600 text-sm font-semibold leading-tight">View detail</div>
//                                 <i class="fa-solid fa-chevron-right text-pink-600"></i>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default Cards

import React from 'react';
import { cards } from '../../dates/jummy';

const Cards = () => {
  return (
    <div className="flex justify-start w-full items-start flex-wrap xl:flex-nowrap gap-4 inline-flex">
      {cards.map(({ text, icon, money, iconColor }, index) => {
        return (
          <div
            key={index}
            className="min-w-[220px] xl:w-full grow shrink basis-0 rounded-xl drop-shadow justify-start items-start gap-4 bg-white flex"
          >
            <div className="grow shrink basis-0 bg-white rounded-xl flex-col justify-start items-start inline-flex">
              <div
                className={`w-full h-[120px] px-6 pt-10 pb-4 bg-${
                  iconColor === 'white' ? 'white' : 'blue-600'
                } rounded-xl shadow flex-col justify-start items-start flex`}
              >
                <div className="flex items gap-6">
                  {/* Left Side (Icons) */}
                  <div
                    className={`w-30 h-full px-4 pt-4 rounded-xl relative ${
                      iconColor === 'white' ? 'bg-white' : 'bg-white'
                    } text-blue-600`}
                  >
                    <i className={icon}></i>
                  </div>

                  {/* Right Side (Text and Money) */}
                  <div className="flex flex-row  bg-blue-600 items-center justify-between w-70 space-x-3 text-white ">
                    <div className="text-[40px] font-semibold leading-[48px]">{money}</div>
                    <div className="text-base font-medium leading-normal">{text}</div>
                  </div>
                </div>
              </div>

              <div className="w-full px-6 py-4 justify-between items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 text-pink-600 text-sm font-semibold leading-tight">
                  View detail
                </div>
                <i className="fa-solid fa-chevron-right text-pink-600"></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
