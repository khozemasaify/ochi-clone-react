import React, { useEffect, useRef, useState } from "react";

function Eyes() {
  const video = document.querySelector("video")
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
//   const handleVideoPlay = () => {
//     if (  ) {
//         videoRef.current.play();
//     } else {
//         videoRef.current.pause();
//     }
// };
  return (
    <div className="eyes relative w-full min-h-screen  overflow-hidden">
      <div data-scroll data-scroll-section data-scroll-speed = "-.7" className=' w-full relative h-screen bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div data-scroll data-scroll-section data-scroll-speed = ".1" className="top-1/4  left-1/4 flex items-center justify-evenly absolute w-1/2 h-1/3 ">
          <div className=" w-1/3 rounded-full h-full bg-zinc-100 flex items-center justify-center">
            <div className=" w-1/2 h-1/2 bg-[#212121] items-center relative rounded-full">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full   absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  h-10 ">
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className=" w-1/3 rounded-full h-full bg-zinc-100 flex items-center justify-center">
            <div className=" w-1/2 h-1/2 bg-[#212121] relative rounded-full">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full   absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  h-10 ">
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
      <video className=" absolute z-[-999] top-0 "  autoPlay loop muted src="https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4"></video>
    </div>
  );
}

export default Eyes;
