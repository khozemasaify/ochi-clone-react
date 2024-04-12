import React, { useEffect, useState } from 'react'

function Dass() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;
      let deltax = mousex - window.innerWidth / 2;
      let deltay = mousey - window.innerHeight / 2;
      var angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
      setRotate(angle - 180)
    });
  });
  return (
    <div data-scroll data-scroll-section data-scroll-speed = ".5"   className='  relative w-full min-h-screen bg-[#CDEA68]' >
      <div data-scroll data-scroll-section data-scroll-speed = ".1"  className='text w-full flex flex-col text-[#212121]  font-[500] font-["Founders_Grotesk_X"] items-center justify-center text-[15vw] leading-[.8]  h-[100vh] '>
      <div className='inner-text '>
          <h1>READY</h1>
        </div>
        <div className='inner-text '>
          <h1>TO START</h1>
        </div>
        <div className='inner-text '>
          <h1>THE PROJECT?</h1>
        </div>
      </div>
      <div className="top-1/4  left-1/4 flex items-center justify-evenly absolute w-1/2 h-1/3 ">
          <div className=" w-[10vw] h-[10vw] rounded-full  bg-zinc-100 flex items-center justify-center">
            <div className=" w-[60%] h-[60%] bg-[#212121] relative rounded-full">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full   absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  h-10 ">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className=" w-[10vw] h-[10vw] rounded-full  bg-zinc-100 flex items-center justify-center">
            <div className="  w-[60%] h-[60%] bg-[#212121] relative rounded-full">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full overflow-hidden   absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  h-10 ">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dass