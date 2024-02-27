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
      <div className="text-2xl font-medium mx-5">
        The technologies I'm currently using are :
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div style={props.blackColor} className="grid gap-2 grid-cols-3">
          {data.map((data, index) => {
            return (
              <div className="border-solid my-1 border-2 py-3 text-center" style={props.LightBlue} key={index}>
                <div className="flex justify-center ">
                  <img src={data.img} alt="" className="mx-"  />
                </div>
                <div className="text-white">{data.name}</div>
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
