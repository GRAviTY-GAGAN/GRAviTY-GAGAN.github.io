import React from "react";
import { blogs } from "../data/data";

const Blogs = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-4  w-full h-full xs:pb-0  xl:pb-40 xs:h-full xs:pt-[100px] md:pt-[200px] lg:pt-40 lg:pb-40 xl:pt-0 bg-[#030519]">
      <div className="pb-8 text-gray-300">
        <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
          Blogs
        </p>
        <p className="py-6">Here are some of my blogs.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {blogs.map((blog) => {
          return (
            <div
              key={blog.name}
              className=" text-white p-2 w-[230px] flex justify-center items-center flex-col h-[250px]  rounded-xl text-center ease-in-out duration-300 hover:scale-105"
            >
              <img className=" w-[70px]" src={blog.img} alt={blog.name} />
              <a className=" font-bold pt-6" href={blog.link} target="_blank">
                {blog.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
