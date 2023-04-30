import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-san-juan-800 via-san-juan-900 to-san-juan-950 text-white">
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/7d7e5d03-7836-4996-8414-fb2786bcf2cf" method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" id="" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />

            <input type="email" name="email" id="" placeholder="Enter Your Email" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-2" />

            <textarea name="message" id="" cols="30" rows="10" placeholder="Enter Your Message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            <button type="submit" className="text-white w-full py-3 my-2 flex text-center rounded-md bg-gradient-to-r from-san-juan-600 to-san-juan-800 cursor-pointer drop-shadow-md">
              <span className="mx-auto">Let's talk</span>
            </button>
          </form>
        </div>
      </div>
      <div className="relative w-full text-center text-black bg-san-juan-950 inline-block">
        Created by Ari Gunawan <span>{new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default Contact;
