import React from "react";
import { BsFillPersonLinesFill, BsPhone } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Resume from "../assets/resume.pdf";

const Contact = () => {
  return (
    <div
      id="contact"
      name="contact"
      className=" max-w-[1000px] mx-auto  p-4 w-full h-screen xs:h-full xs:pt-[100px] md:pt-[200px] lg:pt-0 lg:pb-40 bg-[#030519] lg:flex justify-center items-center "
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
          Contact
        </p>
        {/* <p className="text-gray-300 py-4">You can reach me here</p> */}
        <div className="mt-10">
          <ul className="flex">
            <li className="lg:w-[160px] md:w-[160px] xs:w-[10px] h-[60px] p-9 flex justify-between items-center  hover: duration-300 bg-blue-600">
              <a
                id="contact-linkedin"
                className="flex flex-col justify-between items-center w-full text-gray-300 hover:scale-110 duration-300"
                href="https://www.linkedin.com/in/gagan-bn/"
              >
                <FaLinkedin size={30} /> Linkedin
              </a>
            </li>
            <li className="md:w-[160px] xs:w-[10px] h-[60px] p-9 flex justify-between items-center  hover: duration-300 bg-[#333333]">
              <a
                id="contact-github"
                className="flex flex-col justify-between items-center w-full text-gray-300 hover:scale-110 duration-300"
                href="https://github.com/GRAviTY-GAGAN"
              >
                <FaGithub size={30} /> Github
              </a>
            </li>
            <li className="md:w-[160px] xs:w-[10px] h-[60px] p-9 flex  justify-between items-center  hover: duration-300 bg-[#6fc2b0]">
              <a
                id="contact-email"
                className="flex flex-col  justify-between items-center w-full text-gray-300 hover:scale-110 duration-300"
                href="mailto:gaganbn1999@gmail.com"
              >
                <HiOutlineMail size={30} /> Email
              </a>
            </li>
            <li
              id="resume-button-2"
              className="md:w-[160px] xs:w-[10px] h-[60px] p-9 flex  justify-between items-center  hover: duration-300 bg-[#565f69]"
            >
              <a
                className="flex flex-col justify-between items-center w-full text-gray-300 hover:scale-110 duration-300"
                href={Resume}
                download={Resume}
              >
                <BsFillPersonLinesFill size={30} /> Resume
              </a>
            </li>
            <li className="md:w-[160px] xs:w-[10px] h-[60px] p-9 flex  justify-between items-center  hover: duration-300 bg-[#f87171]">
              <a
                className="flex flex-col justify-between items-center w-full text-gray-300 hover:scale-110 duration-300"
                href="tel:9110613725"
              >
                <BsPhone size={30} /> Call
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form> */}
    </div>
  );
};

export default Contact;
