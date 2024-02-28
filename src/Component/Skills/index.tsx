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
      <div
        className="text-2xl font-medium py-3 pl-2 text-white"
        style={props.blackColor}
      >
        The technologies I'm currently using are :
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div style={props.blackColor} className="grid grid-cols-4 group">
          {data.map((data, index) => {
            return (
              <div
                className="border-solid my-1 text-center border-2 py-2  mx-1 lg:mx-0 group"
                style={props.LightBlue}
                key={index}
              >
                <div className="flex justify-center lg:my-5">
                  <img src={data.img} alt="" />
                </div>
                <div className="text-white text-xs">{data.name}</div>
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
