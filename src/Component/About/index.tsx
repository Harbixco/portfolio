import React from "react";
import AnimatedPage from "../Animated/AnimatedPage";
import { about } from "../Utils/data.tsx";

type Colors = {
  blackColor: React.CSSProperties;
};

export default function Index(props: Colors) {
  return (
    <AnimatedPage>
      <div className="font-medium text-black inknut-antiqua-medium text-center text-2xl my-2">
        FEW THINGS ABOUT MYSELF
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 text-white"
        style={props.blackColor}
      >
        {about.map((data, index) => {
          return (
            <div key={index}>
              <div className="text-center text_sm pt-3">{data.question}</div>
              <div className="text-justify mx-3 py-3 text_sm">
                {data.answer}
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </AnimatedPage>
  );
}
