import React from "react";
import { FaArrowUp } from "react-icons/fa";
import ochibrandImg from "../../assets/ochi_brand_heroimg.jpg"


function Landingpage() {
  return (
    <div className="w-full h-screen  bg-zinc-900 pt-1">
      <div className="textstructure mt-36 px-10 ">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker   ">
              <div className="w-fit flex items-center overflow-hidden "> 
              {index === 1 && (<div className="w-[8vw] h-[5vw] bg-green-500 rounded"><img src={ochibrandImg} alt="" className="rounded" /></div>)}
              <h1 className="uppercase text-[6vw] leading-[6vw] tracking-tighter font-grotexsk font-semibold ">
                {item}
              </h1></div>
             
            </div>
          );
        })}
      </div>

      <div className="font-montreal  border-t-[1px] border-zinc-600 mt-24 flex justify-between items-center mx-8 p-4">
        <div>For public and private companies</div>
        <div>From the first pitch to IPO</div>
        <div className="start flex items-center gap-2">
          <button className="py-2 px-5 font-light text-xs rounded-full border-[2px] border-zinc-500 hover:bg-zinc-500 ">
            START THE PROJECT
          </button>
          <div className="w-9 h-9 border-[2px] border-zinc-500 rounded-full hover:bg-zinc-500 flex items-center justify-center">
            <span className="rotate-[45deg] text-xs font-light">
              <FaArrowUp />
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
