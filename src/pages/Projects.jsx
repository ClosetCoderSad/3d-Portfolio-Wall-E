import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import { TechStack } from "../components/TechStack";

export default function Projects() {
  const listProjects = [
    {
      id: 1,
      image: project1,
      title: "HZ MERN Stack",
      demoLink: "https://himmels-zenith.vercel.app/",
    },
    {
      id: 2,
      image: project2,
      title: "Sustainify | HackUTD",
      demoLink: "https://devpost.com/software/greenhouse-hpmoa1",
    },
    {
      id: 3,
      image: project3,
      title: "Netflix Clone",
      demoLink: "https://github.com/ClosetCoderSad/Netflix-Clone",
    },
    {
      id: 4,
      image: project4,
      title: "AI Assistant Mouse",
      demoLink: "https://github.com/ClosetCoderSad/AI_Assistant_Mouse",
    },
  ];
  const settings = {
    dots: false, // Set to false to disable dots for time being
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section
      id="projects"
      className="relative overflow-hidden overscroll-x-none flex flex-col text-white body-font bg-black w-[100vw] h-fit"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white my-12 text-center font-oxanium">
      Build and Inspire
      </h2>
      <div className="container px-8 pt-8 mx-auto" data-aos='fade-up' data-aos-delay='400'>
        <Slider {...settings}>
          {listProjects.map((projects) => {
            return (
              <div key={projects.id} className="p-4">
                <div className="h-full border-2 border-orange-300 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden hover:border-orange-400 hover:translate-y-[-8px] hover:cursor-pointer ease-in-out duration-300">
                  <img
                    src={projects.image}
                    alt={projects.title}
                    className="w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center"
                  />
                  <div className="p-6">
                    <h2 className="text-base title-font font-medium text-white mb-1">
                      {projects.title}
                    </h2>
                    {projects.demoLink && (
                      <a
                        href={projects.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-gray-50"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <TechStack/>
    </section>
  );
}
