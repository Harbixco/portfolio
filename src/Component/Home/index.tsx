import React from "react";
import Skills from "../Skills";
import Contact from "../Contact";
import slide1 from "../../Images/slide1.png";
import About from "../About";
import Education from "../Education";
import AnimatedPage from "../Animated/AnimatedPage";
import { motion } from "framer-motion";

type EmojiProps = {
  emoji: string;
  blackColor: React.CSSProperties;
  LightBlue: React.CSSProperties;
};

export default function Index(props: EmojiProps) {
  return (
    <AnimatedPage>
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
                <motion.span
                  className="text-2xl"
                  style={props.LightBlue}
                  animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                  transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                >
                  ABIODUN
                </motion.span>
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
    </AnimatedPage>
  );
}
