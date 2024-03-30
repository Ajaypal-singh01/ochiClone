import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import ochibrandImg from "../assets/ochi_brand_heroimg.jpg";
import { motion } from "framer-motion";

function Landingpage() {
  const [hovering, sethovering] = useState(false);
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full h-screen  bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-36 px-10 ">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker   ">
              <div className="w-fit flex items-center overflow-hidden ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: "0" }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
                    className="w-[8vw] h-[5vw] rounded"
                  >
                    <img src={ochibrandImg} alt="" className="rounded" />
                  </motion.div>
                )}
                <h1 className="uppercase text-[6vw] leading-[6vw] tracking-tighter font-grotexsk font-semibold ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="font-montreal  border-t-[1px] border-zinc-600 mt-24 flex justify-between items-center mx-8 p-4">
        <div>For public and private companies</div>
        <div>From the first pitch to IPO</div>
        <div className="start flex items-center gap-2">
          <button onMouseEnter={() => {
              sethovering(true);
            }}
            onMouseLeave={() => {
              sethovering(false);
            }} className="py-2 px-5 font-light text-xs rounded-full border-[2px] border-zinc-500 hover:bg-zinc-500 ">
            START THE PROJECT
          </button>
          <div
            onMouseEnter={() => {
              sethovering(true);
            }}
            onMouseLeave={() => {
              sethovering(false);
            }}
            className="relative w-9 h-9 border-[2px] border-zinc-500 rounded-full  flex items-center justify-center z-10"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={hovering ? { scale: 1 } : { scale: 0 }}
              transition={{ ease: "easeIn", duration: 0.2 }}
              className="absolute bg-zinc-500 w-full h-full rounded-full "
            ></motion.span>
            <span className="rotate-[45deg] text-xs font-light ">
              <FaArrowUp />
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
