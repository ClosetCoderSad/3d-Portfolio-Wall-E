import React from "react";
import { ThreeDCanvas } from "../components/ThreeDCanvas";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="h-fit w-[100vw] overflow-hidden overscroll-x-none">
      <div>
        <div className="absolute w-full top-[30%] sm:top-1/4 mx-auto z-10">
          <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl font-extrabold text-center font-oxanium"> 
            <span className="primary-color">I'm a</span>
            <br />
            <TypeAnimation
              sequence={["Full-Stack Developer", 1000, "Machine Learning Engineer", 1000, "Aspiring SWE", 1000]}
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
            <Link to="/contact"><a
              className="ease-in-out duration-500 px-6 py-[11px] w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-red-500 to-red-800 text-white hover:border-none sm:text-base text-sm font-oxanium"
              href="#contact"
            >
              Contact
            </a></Link>
          </div>
        </div>

        <ThreeDCanvas />
      </div>
    </div>
  );
};

export default Landing;
