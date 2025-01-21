import React from "react";
import Navbar from "../components/Navbar";
import { ThreeDCanvas } from "../components/ThreeDCanvas";
import { TypeAnimation } from 'react-type-animation';

const Landing = () => {
  return (
    <div className="h-fit w-[100vw] overflow-hidden overscroll-x-none">
      <Navbar />
      <div>
        <div className="absolute w-full top-[30%] sm:top-1/4 mx-auto z-10">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold text-center font-oxanium"> 
            <span className="primary-color">I'm an</span>
            <br />
            <TypeAnimation
              sequence={["Aspiring SWE", 1000, "Full-Stack Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-sm sm:text-lg my-6 lg:text-xl text-center text-wrap px-6 font-oxanium">
          Hey, I'm Md Abrar Al Zabir, and like Wall-E, I create something beautiful—one line of code at a time!
          </p>

          <div className="my-8 text-center flex-row space-x-4">
            <a
              className="px-6 py-3 w-full rounded-xl bg-gradient-to-br from-red-500 to-red-800 text-white font-oxanium sm:text-base text-sm"
              href="/Resume.pdf"
              target="_blank"
            >
              Resume
            </a>
            <a
              className="ease-in-out duration-500 px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-red-500 to-red-800 text-white hover:border-none sm:text-base text-sm font-oxanium"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>

        <ThreeDCanvas />
      </div>
    </div>
  );
};

export default Landing;
