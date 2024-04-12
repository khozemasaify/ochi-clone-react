import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function Client() {
  return (
    <div className=' w-full text-[#212121]/90 font-["Neue_Montreal"] min-h-screen  bg-white '>
      <div className=" border-b-2 border-solid border-black/25 flex flex-col-reverse px-[3vw] pb-[3vw] head w-full h-[30vh]">
        <h1 className=" capitalze text-6xl">Clients’ reviews</h1>
      </div>
      <div className="middle flex w-full h-[60vh]">
        <div className=" text-[#212121] left px-[3vw] w-1/2 flex h-full ">
          <div className="left1 w-1/2 h-full ">
            <h1 className="pt-3 text-[#212121]/90 text-[1.1vw]">
              Karman Ventures
            </h1>
          </div>
          <div className="left2 w-1/2 h-full ">
            <h1 className="pt-3 text-[#212121]/90 text-[1.1vw]">Services:</h1>
            <div className=" flex flex-col gap-2 mt-16 px-1">
              <div className="start  flex items-center gap-[.8vw]">
                <div className="border-[1px] border-[#212121]/90 text-black bg-white px-4 py-1.5 text-sm rounded-full  uppercase">
                  investor deck
                </div>
                {/* <MdOutlineArrowOutward className=" h-8 w-8 px-2 border-[1px] border-[#212121]/90 rounded-full" /> */}
              </div>
              <div className="start  flex items-center gap-[.8vw]">
                <div className="border-[1px] border-[#212121]/90 text-black bg-white px-4 py-1.5 text-sm rounded-full  uppercase">
                  sales deck
                </div>
                {/* <MdOutlineArrowOutward className=" h-8 w-8 px-2 border-[1px] border-[#212121]/90 rounded-full" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="right flex justify-between pr-12 w-1/2 h-full ">
          <div className="right1 h-full w-3/4 pt-3 ">
            <h1>William Barnes</h1>
            <div className="h-28 mt-16  rounded-lg w-28 overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                alt=""
              />
            </div>
            <div className="w-[78%] mt-6">
              <h1>
                They were transparent about the time and the stages of the
                project. The end product is high quality, and I feel confident
                about how they were handholding the client through the process.
                I feel like I can introduce them to someone who needs to put a
                sales deck together from scratch, and they would be able to
                handhold the client experience from 0 to 100 very effectively
                from story to design. 5/5
              </h1>
            </div>
          </div>
          <div className="pt-3">
            <h1 className=" text-[#C8C8C8] text-[17px]">READ</h1>
          </div>
        </div>
      </div>
      <div className="last w-full h-2/3 bg-red-500/0">
        <div className="rows flex flex-col justify-center bg-green-600/0 w-full h-auto">
          <div className=" text-[17px] border-y-2 border-black/15 text-[#212121] py-4 px-12 flex items-center justify-between">
            <h1>Planetly</h1>
            <h1>Nina Walloch</h1>
            <h1>READ</h1>
          </div>
          <div className=" text-[17px] border-b-2 border-black/15 text-[#212121] py-4 pl-10 pr-12 flex items-center justify-between">
            <h1>Premium Blend</h1>
            <h1>Ellen Kim</h1>
            <h1>READ</h1>
          </div>
          <div className=" text-[17px] border-b-2 border-black/15 text-[#212121] py-4 pl-10 pr-12 flex items-center justify-between">
            <h1>Hypercare Systems</h1>
            <h1>Brendan Goss</h1>
            <h1>READ</h1>
          </div>
          <div className=" text-[17px] border-b-2 border-black/15 text-[#212121] py-4 px-12 flex items-center justify-between">
            <h1>Officevibe</h1>
            <h1>Raff Labrie</h1>
            <h1>READ</h1>
          </div>

          <div className=" text-[17px] border-b-2 border-black/15 text-[#212121] py-4 px-12 flex items-center justify-between">
            <h1>Orderlion</h1>
            <h1>Stefan Strohmer</h1>
            <h1>READ</h1>
          </div>
          <div className=" text-[17px] border-b-2 border-black/15 text-[#212121] py-4 px-12 flex items-center justify-between">
            <h1>Black Book</h1>
            <h1>Jaci Smith</h1>
            <h1>READ</h1>
          </div>
          <div className=" text-[17px] border-b-2 border-black/15 text-[#212121] py-4 px-12 flex items-center justify-between">
            <h1>Trawa Energy</h1>
            <h1>David Budde</h1>
            <h1>READ</h1>
          </div>
        </div>
      </div>
      <div className="lastcard w-full px-12 ">
        <div className=" w-full  flex  mt-16 gap-4 px-6 ">
           <div className=" relative card1 rounded-xl  w-[43vw] h-[380px] bg-[#004D43]">
           <div className="w-full  h-2/4 flex  justify-center  pt-40 ">
           <svg
          width="150"
          height="65"
          viewBox="0 0 72 30"
          fill="none"
          color="#CDEA68"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
            fill="currentColor"
          ></path>
          <path
            d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
            fill="currentColor"
          ></path>
          <path
            d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
            fill="currentColor"
          ></path>
          <path
            d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
            fill="currentColor"
          ></path>
          <path
            d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
            fill="currentColor"
          ></path>
          </svg> 
           </div>
           <button className=" bottom-8 left-8 rounded-full  border border-[#CDEA68] py-1 px-3 absolute text-[#CDEA68] ">©2019–2022</button>
           </div>
          <div className="cards flex w-[46vw] gap-4   h-[380px]">
         <div className="card1 relative flex items-center justify-center rounded-xl w-[23vw]    h-full bg-[#212121]">
         <img className=" scale-[1.3]" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
         <button className=" bottom-8 left-8 rounded-full  border border-[#fff] py-1 uppercase px-3 absolute text-[#fff] ">rating 5.0 on clutch</button>
         </div>
         <div className="card2 flex items-center justify-center relative w-[22vw] gap-4   h-[380px] rounded-xl  bg-[#212121]">
          <img  className=" scale-[.5]" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className=" bottom-8 left-8 rounded-full  border border-[#fff] py-1 px-3 absolute text-[#fff] uppercase ">buissness bootcamp alumni</button>
         </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
