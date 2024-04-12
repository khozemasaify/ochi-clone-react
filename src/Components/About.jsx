import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, useScroll } from "framer-motion"


function About() {
 const [ishove, setishove] = useState(false)
 const [isHovered, setIsHovered] = useState(false);
  return (
    <div data-scroll data-scroll-section data-scroll-speed = "-.2.4" className=" w-full   min-h-screen rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68]">
      <div className=" pt-10  pl-14 flex items-center text-black rounded-tr-3xl rounded-tl-3xl w-full h-[40%]   border-b-[2px] border-[#37373753]">
        <h1 onMouseEnter={()=>setishove(true)} onMouseLeave={()=>setishove(false)} className=' font-["Neue_Montreal"]  pb-8 text-[3.6vw] w-[90%] tracking-widest leading-[3.4vw]'>
          {"Ochi , is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people".split(" ").map((item, index) => (
          <motion.span  animate={ishove ? ({ opacity: 1, }) : ({ opacity:0.5 })} transition={{ ease: [0.37, 0, 0.63, 1], delay: index * .02 }} key={index} className="pb-2 tracking-wider inline-block">
            {item}
          </motion.span>
              ))}
        </h1>
      </div>
      <div className="  pb-28 border-b-[2px] border-[#37373753] py-10 text-black text-[1.1vw] font-['Neue_Montreal']  ">
        <div className="flex  justify-between px-8">
          <h1>What you can expect:</h1>
          <div className=" w-[20%]  flex flex-col gap-4 ml-52">
            <h1>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </h1>
            <h1>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </h1>
          </div>
          <div className="flex flex-col-reverse">
            <div>
              <h1>S:</h1>
              <h1>Instagram</h1>
              <h1>Behance </h1>
              <h1>Facebook</h1>
              <h1>Linkedin</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  flex mt-4 h-[80vh] text-black/85 pl-14">
        <div className="w-[45%]">
          <h1 className="text-6xl">Our approach:</h1>
          <button
      className=" flex items-center mt-4 rounded-full uppercase px-2 py-4 w-48 justify-center text-white font-semibold gap-6 bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1>read more</h1>
      <div className={`h-3 w-3 bg-white rounded-full ${isHovered ? 'hidden' : ''}`}></div>
      <MdOutlineArrowOutward
        className={`h-9 w-9 px-2 border-[1px] border-white rounded-full ${isHovered ? '' : 'hidden'}`}
      />
    </button>
        </div>
        <div className="w-[55%] flex  items-center justify-center relative ">
          <div className=" relative mx-10  w-full h-[93%] ">
            <img className=" overflow-hidden w-full rounded-2xl h-full object-cover object-center" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
