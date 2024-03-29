import React from "react";
import { motion } from "framer-motion";


function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=" sticky top-10   w-full py-10 bg-[#004d43]  rounded-tl-3xl rounded-tr-3xl">
      <div className=" flex  whitespace-nowrap overflow-hidden  font-grotexsk  border-t-[1px] border-zink-400 ">
      <motion.h1
          initial={{x: 0}}
          animate={{x:"-100%"}}
          transition={{repeat:Infinity,ease:"linear",duration:13}}
          className="text-[22vw] leading-none  font-semibold -mb-5 pr-10"
          
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
         initial={{x: 0}}
         animate={{x:"-100%"}}
         transition={{repeat:Infinity,ease:"linear",duration:13}}
          className="text-[22vw] leading-none  font-semibold -mb-5 pr-10 "
        >
          WE ARE OCHI
        </motion.h1>
        
      </div>
    
      
      </div>
  );
}

export default Marquee;
