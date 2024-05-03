import React from "react";
import AnimatedPage from "../Animated/AnimatedPage";
import { data, image } from "../Utils/data.tsx";

type Colors = {
  blackColor: React.CSSProperties;
  LightBlue: React.CSSProperties;
};

export default function Index(props: Colors) {
  return (
    <AnimatedPage>
      <div className="text-2xl py-3 pl-2 pt-4 dark:text-white text-blue-600 font-semibold">
        The technologies I'm currently using are :
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="grid grid-cols-4 group pb-3">
          {data.map((data, index) => {
            return (
              <div
                className="rounded border-gray-600 border-solid my-1 text-center border-2 py-2  mx-1 lg:mx-0 group dark:bg-black bg-white "
                key={index}
              >
                <div className="flex justify-center lg:my-5">
                  <img src={data.img} alt="" className="my-2" />
                </div>
                <div className="text-xs dark:text-white text-black">{data.name}</div>
              </div>
            );
          })}
        </div>
        <div>
          <img src={image.slide} alt="" className="hidden lg:block" />
        </div>
      </div>
    </AnimatedPage>
  );
}
