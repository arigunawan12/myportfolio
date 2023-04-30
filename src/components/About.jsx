import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-san-juan-800 via-san-juan-900 to-san-juan-950">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 bg-gray-500">About Me</p>
        </div>
        <p className="text-xl mt-20">As a junior front-end developer, I have a passion for web development. I love to code and learn new things. I possess an impressive arsenal of skill in HTML, CSS, Javascript, React, Tailwind.</p>
        <br />
      </div>
    </div>
  );
};

export default About;
