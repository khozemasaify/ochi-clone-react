import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React, { useState } from "react";


function Featured() {
 const [ishovering, setishovering] = useState(false)
 const [ishover, setishover] = useState(false)
 const [ishoverr, setishoverr] = useState(false)
 const [ishove, setishove] = useState(false)
  return (
    <div className=" w-full relative z-[999] min-h-screen bg-white">
      <div className="heading w-full h-[30vh] px-[7vh] flex flex-col-reverse pb-8 border-b-2 border-solid border-black/25 text-[#292929] ">
        <h1 className="font-['Neue_Montreal'] text-[3.5vw]">
          Featured projects
        </h1>
      </div>
      <div className="image-section flex items-center justify-between pl-9 gap-3 w-full min-h-screen ">
        <div className="inner   w-1/2 h-full pt-8  flex flex-col">
          <h1 className=" pb-3 font-[400] text-[#212121] gap-2 flex items-center text-[16px]">
            {" "}
            <div className="w-[10px] h-[10px] bg-black rounded-full"></div> FYDE
          </h1>
          <motion.div onMouseEnter={()=>{
            setishovering(true)
            }} onMouseLeave={()=>setishovering(false)} animate= {ishovering ? ({scale:.95,zIndex:[99]}) : ({scale:1,zIndex:0})} transition={{ease:[0.61, 1, 0.88, 1], duration:.4}}  className=" relative bg-cover  bg-center h-[600px] w-[700px] rounded-xl   bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png')] ">
            <h1 className="absolute flex overflow-hidden z-[999] top-1/2 -right-3 uppercase translate-x-1/2 font-['Neue_Montreal'] leading-none tracking-tight font-extrabold text-[#CDEA68]  -translate-y-1/2 text-8xl ">
              {"FYDE".split("").map((item, index) => (
                <motion.span initial={{ y: "100%" }} animate= {ishovering ? ({y:"0"}) : ({y:"100%"})} transition={{ease:Power4.easeInOut,delay:index*.07}} key={index} className="inline-block z-[999]">
                  {item}
                </motion.span>
              ))}
            </h1>
          </motion.div>
          <div className=" flex gap-3 font-['Neue_Montreal'] py-4">
            <button className="border-[1px] text-[1vw] border-black/80 text-black/85 bg-white px-4 rounded-full py-1 uppercase">
              audit
            </button>
            <button className="border-[1px] text-[1vw] border-black/80 text-black/85 bg-white px-4 rounded-full py-1 uppercase">
              copywriting
            </button>
            <button className="border-[1px] text-[1vw] border-black/80 text-black/85 bg-white px-4 rounded-full py-1 uppercase">
              sales deck
            </button>
            <button className="border-[1px] text-[1vw] border-black/80 text-black/85 bg-white px-4 rounded-full py-1 uppercase">
              slides design
            </button>
          </div>
        </div>
        <div className="inner w-1/2 h-full pt-8  flex flex-col">
          <h1 className=" pb-3 font-[400] text-[#212121] gap-2 flex items-center text-[16px]">
            {" "}
            <div className="w-[10px] h-[10px] bg-black rounded-full"></div> FYDE
          </h1>
          <motion.div onMouseEnter={()=>{
            setishover(true)
            }} onMouseLeave={()=>setishover(false)} animate= {ishover ? ({scale:.95,zIndex:[99]}) : ({scale:1,zIndex:0})} transition={{ease:[0.61, 1, 0.88, 1], duration:.4}} className=" relative  bg-cover bg-center h-[600px] w-[700px] rounded-xl   bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg')] ">
            <h1 className="absolute flex overflow-hidden top-1/2 -left-5 uppercase -translate-x-1/2 font-['Neue_Montreal'] leading-none tracking-tight font-extrabold text-[#CDEA68]  -translate-y-1/2 text-8xl ">
              {"VISE".split("").map((item, index) => (
                <motion.span initial={{ y: "100%" }} animate= {ishover ? ({y:"0"}) : ({y:"100%"})} transition={{ease:[0.37, 0, 0.63, 1],delay:index*.06}} key={index} className="inline-block  ">
                {item}
              </motion.span>
              ))}
            </h1>
          </motion.div>
          <div className=" flex gap-3 font-['Neue_Montreal'] py-4">
            <button className="border-[1px] text-[1vw] border-black/80 text-black/85 bg-white px-4 rounded-full py-1 uppercase">
              agency
            </button>
            <button className="border-[1px] text-[1vw] border-black/80 text-black/85 bg-white px-4 rounded-full py-1 uppercase">
              company presentation
            </button>
          </div>
        </div>
      </div>

      <div className="image-section z-50 flex items-center justify-between pl-9 gap-3 w-full min-h-screen ">
        <div className="inner w-1/2 h-full pt-8  flex flex-col">
          <h1 className=" pb-3 font-[400] text-[#212121] gap-2 flex items-center text-[16px]">
            {" "}
            <div className="w-[10px] h-[10px] bg-black rounded-full"></div> FYDE
          </h1>
          <motion.div onMouseEnter={()=>{
            setishoverr(true)
            }} onMouseLeave={()=>setishoverr(false)} animate= {ishoverr ? ({scale:.95,zIndex:[99]}) : ({scale:1,zIndex:0})} transition={{ease:[0.61, 1, 0.88, 1], duration:.4}} className=" bg-cover relative bg-center h-[600px] w-[700px] rounded-xl   bg-[url('https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg')] ">
            <h1 className="absolute flex  overflow-hidden z-10 top-1/2 -right-3 uppercase translate-x-1/2 font-['Neue_Montreal'] leading-none tracking-tight font-extrabold text-[#CDEA68]  -translate-y-1/2 text-8xl ">
            {"TRAWA".split("").map((item, index) => (
                <motion.span initial={{ y: "100%" }} animate= {ishoverr ? ({y:"0"}) : ({y:"100%"})} transition={{ease:[0.37, 0, 0.63, 1],delay:index*.03}} key={index} className="inline-block">
                {item}
              </motion.span>
              ))}
            </h1>
          </motion.div>
          <div className=" flex gap-3 font-['Neue_Montreal'] py-4">
            <button className="border-[1px] text-[1vw] border-black/80 text-black/85 bg-white px-4 rounded-full py-1 uppercase">
              brand identity
            </button>
            <button className="border-[1px] text-[1vw] border-black/80 text-black/85 bg-white px-4 rounded-full py-1 uppercase">
              design research
            </button>
            <button className="border-[1px] text-[1vw] border-black/80 text-black/85 bg-white px-4 rounded-full py-1 uppercase">
              investor deck
            </button>
          </div>
        </div>
        <div className="inner w-1/2 h-full pt-8  flex flex-col">
          <h1 className=" pb-3 font-[400] text-[#212121] gap-2 flex items-center text-[16px]">
            {" "}
            <div className="w-[10px] h-[10px] bg-black rounded-full"></div> FYDE
          </h1>
          <motion.div onMouseEnter={()=>{
            setishove(true)
            }} onMouseLeave={()=>setishove(false)} animate= {ishove ? ({scale:.95,zIndex:[99]}) : ({scale:1,zIndex:0})} transition={{ease:[0.61, 1, 0.88, 1], duration:.4}} className=" bg-cover relative bg-center h-[600px] w-[700px] rounded-xl   bg-[url('https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png')] ">
            <h1 className="absolute flex overflow-hidden top-1/2 -left-5 uppercase -translate-x-1/2 font-['Neue_Montreal'] leading-none tracking-tight font-extrabold text-[#CDEA68]  -translate-y-1/2 text-8xl ">
            {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span initial={{ y: "100%" }} animate= {ishove ? ({y:"0"}) : ({y:"100%"})} transition={{ease:[0.37, 0, 0.63, 1],delay:index*.03}} key={index} className="inline-block">
                {item}
              </motion.span>
              ))}
            </h1>
          </motion.div>
          <div className=" flex gap-3 font-['Neue_Montreal'] py-4">
            <button className="border-[1px] text-[1vw] border-black/80 text-black/85 bg-white px-4 rounded-full py-1 uppercase">
              branded template
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full h-[15vh] flex items-end justify-center">
        <button className=" whitespace-nowrap py-4  w-1/6 flex items-center  rounded-full uppercase bg-[#212121] justify-center text-white font-semibold gap-6 ">
          <h1>view all case studies</h1>
          <div className="h-3 w-3 bg-white rounded-full"></div>
          {/* < MdOutlineArrowOutward className=' h-10 w-10 px-2 border-[1px] border-white rounded-full' /> */}
        </button>
      </div>
    </div>
  );
}

export default Featured;
