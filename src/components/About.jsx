import React from "react";
import Resume from "../assets/Gagan-BN-Resume.pdf";
import Gagan from "../assets/Gagan.jpeg";
import { BsFillPersonLinesFill } from "react-icons/bs";

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="w-full xl:h-screen md:h-30   bg-[#030519] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p
              id="about"
              className="about section text-4xl font-bold inline border-b-4 border-pink-600"
            >
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Gagan , nice to meet you. Please take a look around.</p>
          </div>

          <div>
            <p id="user-detail-intro">
              A dedicated and ambitious Full Stack Web Developer with experience
              in designing and developing web applications using React.js,
              Next.js, and Angular on the front end, and Node.js, Express,
              MongoDB, Socket.io, and Redis on the back end. Skilled in building
              responsive, scalable applications, optimizing performance, and
              implementing real-time functionalities. Eager to work in a
              collaborative and innovative environment.
            </p>
          </div>
        </div>
        {/* UNCOMMENT BELOW */}

        <div style={{ marginTop: "5rem" }}>
          <img
            style={{ objectFit: "contain" }}
            className="home-img object-fill rounded-full xs:w-[200px] xs:h-[200px] md:w-[400px] md:h-[400px] bg-white"
            src={Gagan}
            alt=""
          />
        </div>
        {/* UNCOMMENT BELOW */}
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
    </div>
  );
};

export default About;
