import React, { useState } from "react";
import collegeImg from "../assets/college.jpg";
import presentImg from "../assets/present.jpg";

const timelineData = {
  present: {
    text: "Currently studying at the University of Texas at Dallas majoring in Computer Science in my freshman year. Striving as an international student in the US, trying to be better every day.",
    image: presentImg,
  },
  college: {
    text: "Graduated from Maple Leaf International School in January of 2024 where I completed my International A levels with 3A* and 1A in Chemistry, Physics, Biology, and Mathematics respectively. Served as the Secretary of MLIS Nutrition Club during my A2.",
    image: collegeImg,
  },
  highschool: {
    text: "Completed my IGCSEs with 9A* as a pure science background. Had some of my best memories with my friends during this time.",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixid=2&ixlib=rb-4.0.3",
  },
};

export const About = () => {
  const [selectedYear, setSelectedYear] = useState("present");

  return (
    <div className="w-full min-h-screen bg-black p-8 overflow-x-hidden">
      <div className="container mx-auto max-w-screen-xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-12 text-center font-oxanium">
          Directive: Know Me
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:-mt-10">
          <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-right" data-aos-delay="300">
            <img
              src={timelineData[selectedYear].image}
              alt={`Work environment ${selectedYear}`}
              className="sm:p-24 p-8 w-full max-w-md sm:max-w-full object-cover rounded-lg shadow-lg transition-all duration-300"
            />
          </div>
          <div className="w-full sm:w-1/2" data-aos="fade-left" data-aos-delay="300">
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-8">
              {timelineData[selectedYear].text}
            </p>
            <div className="flex flex-wrap gap-4">
              {["present", "college", "highschool"].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full transition-all duration-200 text-sm sm:text-base ${
                    selectedYear === year
                      ? "bg-white text-gray-900 font-semibold"
                      : "text-white border border-white/30 hover:border-white"
                  }`}
                >
                  {year === "present" ? "Present" : year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
