import React from "react";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import "../images.d.ts";
import slide1 from "../Images/slide1.png";

type EmojiProps = {
  emoji: string;
  blackColor: React.CSSProperties;
  LightBlue: React.CSSProperties;
};

export default function Home(props: EmojiProps) {
  return (
    <>
      <div id="Home">
        <div className="container-fluid" style={props.blackColor}>
          <div className="row">
            <div className="col-md-4 offset-md-1 text-center mt-20">
              <div>
                <span className="text-white text-2xl">Hi there </span>
                <span>{props.emoji}</span>
              </div>
              <div className="text-white text-justify mt-3">
                🚀 Greetings, tech enthusiasts! I'm{" "}
                <span className="text-1xl" style={props.LightBlue}>
                  ABIODUN
                </span>
                , a wizard of the web and a maestro of pixels, dancing at the
                intersection of creativity and functionality. As a Frontend
                Developer, I transform lines of code into captivating user
                experiences that leave an indelible mark on the digital
                landscape. Join me on a journey where innovation meets seamless
                design, and let's redefine the way the world interacts with the
                web! 💻✨
                <div className="my-5">#AbiodunTheFrontend #CodeCraftsman</div>
              </div>
            </div>
            <div className="col-md-4 offset-md-1">
              <img src={slide1} alt="" className="my-10 hidden md:flex" />
            </div>
          </div>
        </div>
      </div>

      <div id="About">
        <About />
      </div>

      <div id="Education">
        <Education />
      </div>

      <div id="Skills">
        <Skills />
      </div>

      <div id="Contact">
        <Contact
          blackColor={{ backgroundColor: "#1a2232" }}
          LightBlue={{ color: "#368ae1" }}
        />
      </div>
    </>
  );
}
