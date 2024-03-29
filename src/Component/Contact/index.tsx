import React from "react";
import FillForm from "./FillForm.jsx";
import AnimatedPage from "../Animated/AnimatedPage";

type Colors = {
  LightBlue: React.CSSProperties;
  blackColor: React.CSSProperties;
};

export default function Index(props: Colors) {
  return (
    <AnimatedPage>
      <div  style={props.blackColor}>
        <div>
          <div className="text-3xl bg-white inknut-antiqua-medium text-center py-1">
            Get in Touch
          </div>

          <div style={props.LightBlue}>
            <div className="text-white text-justify mx-3 py-5">
              I am available on almost every social media. You can message me, I
              will definitely reply as fast as possible. I can help you you with
              Web Development.
            </div>
            <div className=" flex justify-around py-10 lg:py-36">
              <div>
                <a
                  href="https://agbajeabiodunkay@gmail.com"
                  className="icon-[mdi--gmail] text-3xl text-white"
                ></a>
              </div>

              <div>
                <a
                  href="https://github.com/Harbixco"
                  className="icon-[bi--github] text-3xl text-white"
                ></a>
              </div>

              <div>
                <a
                  href="https://x.com/KayusdMan?t=OjQWGO6eRnsqkFmSgWVKZQ&s=08 "
                  className="icon-[ri--twitter-x-line] text-3xl text-white"
                ></a>
              </div>

              <div>
                <a
                  href="https://wa.me/+2349039415354?text=Hello,+I+want+to+give+you+a+project."
                  className="icon-[ic--baseline-whatsapp] text-3xl text-white"
                ></a>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/agbaje-abiodun/"
                  className="icon-[akar-icons--linkedin-box-fill] text-3xl text-white"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
