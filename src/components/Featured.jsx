import React, { useState } from "react";
import fade from "../assets/FydeImg.png";
import viseimg from "../assets/ViseImg.jpg";
import { easeInOut, motion } from "framer-motion";

function Featured() {
  const [ishovering1, sethovering1] = useState(false);
  const [ishovering2, sethovering2] = useState(false);
  return (
    <div className=" bg-zinc-800 w-full py-10">
      <div className="text-5xl font-montreal px-10 py-10">
        Featured projects
      </div>
      <div className="line border-t-[1px] border-zinc-400 "></div>
      <div className="cards px-20 ">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => {
              sethovering1(true);
            }}
            onMouseLeave={() => {
              sethovering1(false);
            }}
            className="cardContainer relative w-1/2   "
          >
            <h1 className=" overflow-hidden flex z-[9] absolute left-[105%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl leading-none tracking-tighter font-semibold font-grotexsk text-[#CDEA68]">
              {"FADE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={ishovering1 ? { y: 0 } : { y: 100 }}
                  transition={{ transition: easeInOut, delay: index * 0.03 }}
                  className=" inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" card w-full h-full ">
              <div className="flex items-center gap-1 pb-2">
                <div className="w-2 h-2 rounded-full bg-zinc-100"></div>FYDE
              </div>
              <motion.img
                whileHover={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full h-full bg-cover  rounded-xl"
                src={fade}
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => {
              sethovering2(true);
            }}
            onMouseLeave={() => {
              sethovering2(false);
            }}
            className="cardContainer relative rounded-lg w-1/2  "
          >
            <h1 className="z-[9] flex overflow-hidden absolute right-[105%] top-1/2 translate-x-1/2 -translate-y-1/2 text-7xl leading-none tracking-tighter font-semibold font-grotexsk text-[#CDEA68]">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={ishovering2 ? { y: 0 } : { y: 100 }}
                  transition={{ transition: easeInOut, delay: index * 0.03 }}
                  className=" inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card  w-full h-full ">
              <div className="flex items-center gap-1 pb-2">
                <div className="w-2 h-2 rounded-full bg-zinc-100"></div>VISE
              </div>
              <motion.img
              whileHover={{scale:0.96}}
              transition={{ type: "spring", stiffness: 300 }}

                className="w-full h-full bg-cover  rounded-xl"
                src={viseimg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
