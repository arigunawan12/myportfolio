import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 bg-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam doloremque error reprehenderit, aperiam recusandae unde tempora ullam eius iste dolores incidunt quam nulla, voluptas pariatur optio accusamus! Nostrum, provident
          eligendi!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos assumenda officia accusamus odit ducimus dolorum id suscipit aut eveniet voluptatum vel nobis explicabo est, saepe aperiam. Exercitationem rerum atque neque?
        </p>
      </div>
    </div>
  );
};

export default About;
