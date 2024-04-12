import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = ".09" className=" w-full  rounded-tl-2xl rounded-tr-2xl  py-10  bg-[#004D43]">
      <div className="text uppercase  [word-spacing:20px] items-center gap-10 overflow-hidden  whitespace-nowrap border-b-2 border-t-2 flex">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ease:"linear", repeat:Infinity,duration:15}}
          className='text-[24vw] pt-0 -mb-1 uppercase font-["Roboto"] leading-none  tracking-[-1.2vw] font-[700]'
        >
          we are ochi
        </motion.div>
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ease:"linear", repeat:Infinity,duration:15}}
          className='text-[24vw] pt-0 -mb-1 uppercase font-["Roboto"] leading-none  tracking-[-1.2vw] font-[700]'
        >
          we are ochi
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
