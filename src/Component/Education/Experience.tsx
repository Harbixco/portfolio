import React from "react";
import { resume, imageTwo } from "../Utils/data";

type Colors = {
  blackColor: React.CSSProperties;
  LightBlue: React.CSSProperties;
};

export default function Experience(props: Colors) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="dark:text-white text-black sm:pt-10 sm:pl-10">
          {resume.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-wrap justify-start border-solid border-1 border-gray-600 py-3"
              >
                <div className="ml-3 mr-6">
                  <div className="my-2">{data.start}</div>
                  <div>{data.end}</div>
                </div>

                <div className="mx-3">
                  <div className="my-2">{data.role}</div>
                  <div>{data.company}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <img src={imageTwo.img} alt="" className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
