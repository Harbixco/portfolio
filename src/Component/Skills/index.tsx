import React from "react";
import AnimatedPage from "../Animated/AnimatedPage";
import { data, image } from "../Utils/data.tsx";

export default function Index() {
  return (
    <AnimatedPage>
      <div className="text-2xl font-medium mx-5">
        The technologies I'm currently using are:
      </div>
      <div>
        <div className=" gap-2 group sm:gap-4 px-5 w-[100%] items-center justify-center grid grid-cols-4">
          {data.map((data, index) => {
            return (
              <div
                key={index}
                className="bg-tertiary p-2 sm:p-4 text-center rounded-sm"
              >
                <img src={data.img} alt="" className="" />
                <h1 className="">{data.name}</h1>
              </div>
            );
          })}
        </div>

        <div>
          <img src={image.slide} alt="" />
        </div>
      </div>
    </AnimatedPage>
  );
}
