import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/heroImage.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-san-juan-800 via-san-juan-900 to-san-juan-950">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">Front-End React Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">Hy, I'm Wahyu Gunawan. A passionate front-end React developer. </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-san-juan-600 to-san-juan-800 cursor-pointer drop-shadow-md ">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className=" rounded-md mx-auto w-2/3 transition-all duration-300 md:w-full filter grayscale hover:grayscale-0" />
        </div>
      </div>
    </div>
  );
};

export default Home;
