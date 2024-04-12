import React from "react";
import Navbar from "./Components/Navbar";
import Landingpage from "./Components/Landingpage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
import Client from "./Components/Client";
import Eyes2 from "./Components/Dass";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Video from "./Components/Video";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="h-screen text-white w-full bg-zinc-900">
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Client />
      <Eyes2 />
      <Footer />
    </div>
  );
}

export default App;
