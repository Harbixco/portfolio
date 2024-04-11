import React from "react";
import AnimatedPage from "../Animated/AnimatedPage";
import { expert } from "../Utils/data.tsx";
import file from "../../Images/file.pdf";
import Experience from "./Experience.tsx";

type Colors = {
  blackColor: React.CSSProperties;
  LightBlue: React.CSSProperties;
};

export default function Index(props: Colors) {
  return (
    <AnimatedPage>
      <div className="dark:text-white text-blue-600 inknut-antiqua-medium text-center text-2xl my-2 font-semibold">
        My Experiences
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded border-gray-600 border-solid my-1 text-center border-2 py-2  mx-1 lg:mx-0 group bg-white dark:bg-[#1a2232]">
          <div className="dark:text-white text-blue-600 text-2xl my-1 ">
            Years of Experience
          </div>
          <div className=" border-solid border-2 my-1 border-gray-600"></div>
          <div className="text-black dark:text-white text-3xl mt-2 lg:text-7xl">
            3
          </div>
        </div>
        <div className="rounded border-gray-600 border-solid my-1 text-center border-2 py-2  mx-1 lg:mx-0 group bg-white dark:bg-[#1a2232]">
          <div className="dark:text-white text-blue-600 text-2xl inknut-antiqua-medium text-center sm:py-1 py-5">
            CV
          </div>
          <div className=" border-solid border-2 my-1 border-gray-600"></div>
          <button className="px-3 rounded border-gray-600 border-solid text-center border-2 py-2 mt-2 mx-1 lg:mx-0 group">
            <a href={expert.download} className="flex">
              <img src={expert.img} alt="" className="mx-2" />
              <span className="dark:text-white text-black"> Download</span>
            </a>
          </button>
        </div>
      </div>
      <Experience
        blackColor={{ backgroundColor: "#151b28" }}
        LightBlue={{ backgroundColor: "#1a2232" }}
      />
    </AnimatedPage>
  );
}
