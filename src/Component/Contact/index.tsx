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
      <div className="grid grid-cols-1 lg:grid-cols-2 dark:bg-black bg-white">
        <div className="sm:pb-0 pb-5">
          <FillForm />
        </div>
        <div className="">
          <div className="text-3xl inknut-antiqua-medium text-center py-1 dark:text-white text-blue-600 font-semibold">
            Get in Touch
          </div>

          <div className="dark:text-white text-blue-600">
            <div className="text-justify mx-3 py-5">
              I am available on almost every social media. You can message me, I
              will definitely reply as fast as possible. I can help you you with
              Web Development.
            </div>
            <div className=" flex justify-around py-10 lg:py-36">
              <div>
                <a
                  href="https://agbajeabiodunkay@gmail.com"
                  className="icon-[mdi--gmail] text-3xl"
                ></a>
              </div>

              <div>
                <a
                  href="https://github.com/Harbixco"
                  className="icon-[bi--github] text-3xl"
                ></a>
              </div>

              <div>
                <a
                  href="https://x.com/KayusdMan?t=OjQWGO6eRnsqkFmSgWVKZQ&s=08 "
                  className="icon-[ri--twitter-x-line] text-3x1"
                ></a>
              </div>

              <div>
                <a
                  href="https://wa.me/+2349039415354?text=Hello,+I+want+to+give+you+a+project."
                  className="icon-[ic--baseline-whatsapp] text-3xl"
                ></a>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/agbaje-abiodun/"
                  className="icon-[akar-icons--linkedin-box-fill] text-3xl"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
