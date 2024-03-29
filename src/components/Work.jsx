import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      id="projects"
      name="work"
      className="w-full  sm:pt-10 md:pt-0 xl:pb-20 text-gray-300 bg-[#030519]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">
            I like to showcase my work and thus, you can see my projects hosted
            online. Each project is briefly described with links to code
            repositories and live demos in it.
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[1.5rem]">
          {/* Gird Item */}
          {project.map((item, index) => (
            // <div
            //   key={index}
            //   style={{
            //     backgroundImage: `url(${item.image})`,
            //     backgroundSize: "contain",
            //   }}
            //   className="project-card shadow-lg object-fit shadow-[#040c16] group container rounded-md
            //   flex justify-center text-center items-center mx-auto content-div "
            // >
            //   {/* <div>.project-description</div> */}
            //   {/* Hover effect for images */}
            //   <img src="" alt="" />
            //   <div className="opacity-0 group-hover:opacity-100 ">
            //     <span className="project-title text-2xl font bold text-white tracking-wider ">
            //       {item.name}
            //     </span>
            //     <div className="pt-8 text-center ">
            //       {/* eslint-disable-next-line */}
            //       <a href={item.github} target="_blank">
            //         <button
            //           className="text-center rounded-lg px-4 py-3 m-2
            //            bg-white text-gray-700 font-bold text-lg"
            //         >
            //           Code
            //         </button>
            //       </a>
            //       {/* eslint-disable-next-line */}
            //       <a href={item.live} target="_blank">
            //         <button
            //           className="text-center rounded-lg px-4 py-3 m-2
            //            bg-white text-gray-700 font-bold text-lg"
            //         >
            //           Live
            //         </button>
            //       </a>
            //     </div>
            //   </div>
            // </div>
            //
            <div
              className="project-card ease-in-out bg-[#131B30] duration-300 hover:scale-105 rounded-lg"
              key={item.id}
              // style={{
              //   backgroundImage:
              //     "linear-gradient(to right,rgba(26, 37, 60, 0.8),hsla(243, 81%, 10%, 0.8))",
              // }}
              // className="border-red-500  border-2 "
            >
              <div className="p-4 bg-[#131B30]">
                <img className="rounded-md" src={item.image} alt="" />
              </div>
              <div
                className="p-4 bg-[#131B30]"
                // style={{
                //   backgroundImage:
                //     "linear-gradient(to right,rgba(26, 37, 60, 0.8),hsla(243, 81%, 10%, 0.8))",
                // }}
              >
                <h3 className="project-title font-extrabold">{item.pName}</h3>
                <p className="project-description text-justify">
                  {item.pDesc.length > 150
                    ? item.pDesc.substring(0, 130) + "..."
                    : item.pDesc}
                </p>
                <div className="flex gap-2">
                  {item.tech.map((techStack, index) => {
                    return (
                      <p
                        key={techStack.color}
                        style={{ color: techStack.color }}
                        className={`mt-4 text-sm `}
                      >
                        {techStack.name}
                      </p>
                    );
                  })}
                </div>
                <div className="pt-4 text-center">
                  {/* eslint-disable-next-line */}
                  <a
                    className="project-github-link"
                    href={item.github}
                    target="_blank"
                  >
                    <button
                      className="text-center rounded-[4px] px-[16px] py-[4px] m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a
                    className="project-deployed-link"
                    href={item.live}
                    target="_blank"
                  >
                    <button
                      className="text-center rounded-[4px] px-[16px] py-[4px] m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
