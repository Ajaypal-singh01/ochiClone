import React from "react";
import fade from "../assets/FydeImg.png";
import viseimg from "../assets/ViseImg.jpg";

function Featured() {
  return (
    <div className="bg-zinc-800 w-full py-10">
      <div className="text-5xl font-montreal px-10 py-10">
        Featured projects
      </div>
      <div className="line border-t-[1px] border-zinc-400 "></div>
      <div className="cards px-20 ">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardContainer relative w-1/2  ">
            <h1 className="z-[9] absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl leading-none tracking-tighter font-semibold font-grotexsk text-[#CDEA68]">
              {"FADE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full ">
              <div className="flex items-center gap-1 pb-2"><div className="w-2 h-2 rounded-full bg-zinc-100"></div>FYDE</div>
              <img className="w-full h-full bg-cover  rounded-lg" src={fade} alt="" />
            </div>
            
          </div>
          <div className="cardContainer relative rounded-lg w-1/2  ">
            <h1 className="z-[9] absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-6xl leading-none tracking-tighter font-semibold font-grotexsk text-[#CDEA68]">
              {"VISE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card  w-full h-full ">
            <div className="flex items-center gap-1 pb-2"><div className="w-2 h-2 rounded-full bg-zinc-100"></div>VISE</div>
              <img className="w-full h-full bg-cover rounded-lg" src={viseimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
