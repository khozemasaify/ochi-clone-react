import { easeInOut, motion } from 'framer-motion';
import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = "-.5" className='w-full h-screen bg-zinc-950 pt-[.7vw]'>
      <div className='textstructure overflow-hidden flex flex-col mt-[10vw] px-[5vw]'>
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div key={index} className='masker flex'>
              {index === 1 && (
                <motion.img initial = {{width:0}} animate={{width:150,height:110}} transition={{ease:[0.45, 0, 0.55, 1], duration:1}}
                  className="rounded-lg w-[10vw] mr-4 object-cover object-center h-[6.5vw]"
                  src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                  alt=""
                />
              )}
              <motion.h1 initial = {{x:200}} animate={{x:0}}    transition={{ease:[0.45, 0, 0.55, 1], duration:1}} className="uppercase text-[7.2vw] leading-none font-['gilroy'] font-semibold tracking-tighter">{item}</motion.h1>
            </div>
          );
        })}
      </div>

      <div className='border-t-[.1vw] overflow-hidden flex justify-between items-center border-zinc-600 py-[.5vw] px-[3.5vw] mt-[6vw]'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <motion.p initial = {{y:200}} animate={{y:0}}    transition={{ease:easeInOut,delay:index*.6, duration:1}} key={index} className='font-light tracking-tight leading-none text-[1vw]'>{item}</motion.p>
        ))}
        <motion.div initial =  {{scale:0}} animate={{scale:1}}   transition={{ease:easeInOut, duration:1}}  className='start flex items-center gap-[.8vw]'>
          <div className='border-[1px] border-white bg-black px-4 rounded-full py-1 uppercase'>start the project</div>
          <MdOutlineArrowOutward className='h-10 w-10 px-2 border-[1px] border-white rounded-full' />
        </motion.div>
      </div>
    </div>
  );
}

export default Landingpage;
