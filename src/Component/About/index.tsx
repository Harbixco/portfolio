import React from "react";
import AnimatedPage from "../Animated/AnimatedPage";
import { about } from "../Utils/data.tsx";

type Colors = {
  blackColor: React.CSSProperties;
};

export default function Index(props: Colors) {
  return (
    <AnimatedPage>
      <div className="">
        <div className="text-center text-2xl my-2 dark:text-white text-blue-600 font-semibold">
          FEW THINGS ABOUT MYSELF
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-[#1a2232]">
          {about.map((data, index) => {
            return (
              <div key={index} className="">
                <div className="text-center text_sm pt-3 dark:text-white text-blue-600">
                  {data.question}
                </div>
                <div className="text-justify mx-3 py-3 text_sm dark:text-white text-black">
                  {data.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedPage>
  );
}
