import React from "react";
import FillForm from "./FillForm";
import AnimatedPage from "../Animated/AnimatedPage";

type ContactProps = {
  blackColor: React.CSSProperties;
  LightBlue: React.CSSProperties;
};

export default function Index(props: ContactProps) {
  return (
    <AnimatedPage>
      <div className="container-fluid" style={props.blackColor}>
        <div className="row">
          <div className="col-md-3 offset-md-2 text-center">
            <div style={props.LightBlue} className="text-3xl mt-5">
              {" "}
              Get in{" "}
            </div>
            <div style={props.LightBlue} className="text-3xl my-2">
              {" "}
              Touch{" "}
            </div>
            <div className="text-white text-justify my-4">
              I am available on almost every social media. You can message me, I
              will definitely reply as fast as possible. I can help you you with
              Web Development.
            </div>
            <div className=" flex justify-around my-7">
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

          <div className="col-md-3 offset-md-1">
            <div className="text-center">
              {" "}
              <div style={props.LightBlue} className="md:my-10 text-2xl">
                TALK TO ME
              </div>
              <div className="text-white">
                Do you have a project for me or a job?
              </div>
              <div className="text-white">
                Feel free to contact me by filing the form below
              </div>
              <div>
                <FillForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
