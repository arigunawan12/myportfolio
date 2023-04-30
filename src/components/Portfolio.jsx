import React from "react";
import arrayDestruct from "../assets/in-progress.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demo: "https://food-final-project.vercel.app/",
      code: "https://github.com/arigunawan12/food-final-project",
    },
    {
      id: 2,
      src: arrayDestruct,
      demo: "https://food-final-project.vercel.app/",
      code: "https://github.com/arigunawan12/food-final-project",
    },
    {
      id: 3,
      src: arrayDestruct,
      demo: "https://food-final-project.vercel.app/",
      code: "https://github.com/arigunawan12/food-final-project",
    },
    {
      id: 4,
      src: arrayDestruct,
      demo: "https://food-final-project.vercel.app/",
      code: "https://github.com/arigunawan12/food-final-project",
    },
    {
      id: 5,
      src: arrayDestruct,
      demo: "https://food-final-project.vercel.app/",
      code: "https://github.com/arigunawan12/food-final-project",
    },
  ];
  return (
    <div name="portfolio" className="w-full bg-gradient-to-b from-san-juan-800 via-san-juan-900 to-san-juan-950 md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 bg-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank">
                  <button className="w-1/2 px-6 py-3 text-white m-4 duration-200 hover:scale-105">Demo</button>
                </a>
                <a href={code} target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
