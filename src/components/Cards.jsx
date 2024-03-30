import React from "react";
import ochiimg1 from "../assets/ochilogo002.svg";
import ochiimg2 from "../assets/ochilogo003.png";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";

function Cards() {
  const [Top, setTop] = useState(7);
  return (
    <div className="w-full h-screen flex gap-5 items-center bg-zinc-800  px-10 font-grotexsk">
      <div className="cardcontainer     w-1/2 h-[60vh]">
        <div className="card w-full relative h-full rounded-xl bg-[#004D43]  flex justify-center items-center text-[#CDEA68] ">
          <span className="text-6xl font-semibold">ochi</span>
          <div className="absolute bottom-5  left-5 ">
            <button className="btn border-[1px]  border-[#CDEA68] rounded-full px-2  ">
              &copy; 2019-2022
            </button>
          </div>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[60vh]">
        <div className="card w-1/2 relative h-full rounded-xl bg-zinc-900 flex justify-center items-center">
          <img className="" src={ochiimg1} alt="" />
          <div className="absolute bottom-5  left-5 ">
            <motion.button
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="btn border-[1px]  text-xs rounded-full px-3 py-1 hover:bg-zinc-100 hover:text-zinc-900 "
            >
              RATING 5.0 ON CLUTCH
            </motion.button>
          </div>
        </div>
        <div className="card w-1/2 relative h-full rounded-xl bg-zinc-900 flex justify-center items-center">
          <img className=" bg-cover size-20" src={ochiimg2} alt="" />

          <div className="absolute bottom-5  left-5 ">
            <motion.button
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" btn border-[1px]   text-xs rounded-full px-3 py-1 hover:bg-zinc-100 hover:text-zinc-900  "
            >
              BUSINESS BOOTCAMP ALUMNI
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
