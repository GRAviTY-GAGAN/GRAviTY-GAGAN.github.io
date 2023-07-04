import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Resume from "../assets/Gagan-BN-Resume.pdf";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div id="home" name="home" className="w-full  h-screen  bg-transparent ">
      {/* Container */}
      <div
        id="user-detail-intro"
        className="max-w-[1000px]  mx-auto px-8 flex flex-col justify-center h-full"
      >
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          GAGAN BN
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Full Stack Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]"></p>
        <div>
          <Link to="work" smooth={true} duration={1000}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
      {/* <a
        id="resume-link-2"
        className="md:w-[160px] xs:w-[100px] h-[60px] p-9 flex mt-4 justify-between items-center  hover: duration-300 bg-[#565f69]"
        href={Resume}
        download={"Gagan-BN-Resume"}
      >
        <div
          className="flex flex-col justify-between items-center w-full text-gray-300 hover:scale-110 duration-300"
          id="resume-button-2"
        >
          <BsFillPersonLinesFill size={30} /> Resume
        </div>
      </a> */}
    </div>
  );
};

export default Home;
