import React from "react";
import { motion } from "framer-motion";


function Marquee() {
  const marqueeVariants = {
    initial: {
      x: 0
    },
    animate: {
      x: "-130%",
      transition: {
        ease: "linear",
        repeat: Infinity,
        duration: 13
      }
    }
  };
  return (
    <div className="w-full py-10 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl">
      <div className=" flex whitespace-nowrap overflow-hidden  font-grotexsk  border-t-[1px] border-zink-400 ">
      <motion.h1
          variants={marqueeVariants}
          initial="initial"
          animate="animate"
          className="text-[22vw] leading-none  font-semibold -mb-5"
          
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
         variants={marqueeVariants}
         initial="initial"
         animate="animate"
          className="text-[22vw] leading-none  font-semibold -mb-5 "
        >
          WE ARE OCHI
        </motion.h1>
        
      </div>
    
      
      </div>
  );
}

export default Marquee;
