import React from "react";
import tailwindIcon from "../assets/tailwindcss-original.svg"
const techStack = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Three.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  },
  {
    name: "OpenCV",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "Matplotlib",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
  },
  {
    name: "Scikit-learn",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "Keras",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
  },
];

export function TechStack() {
  return (
    <div className="w-full h-fit px-8 py-12">
      <main className="max-w-4xl mx-auto">
        <h1 className="sm:text-3xl text-xl font-bold text-center sm:mb-12 mb-6 text-white font-oxanium">
        Forged Skills
        </h1>
        <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-6 gap-8" data-aos="fade-down" data-aos-delay="400">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2"
              title={tech.name}
            >
              <div className="sm:w-16 sm:h-16 w-[52px] h-[52px] rounded-full bg-gray-50 p-3 flex items-center justify-center transition-transform hover:scale-110">
                <img
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="sm:text-sm text-xs text-white text-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
