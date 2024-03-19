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
              <div className="text-white text-justify mt-3 mx-2">
                🚀 Greetings, I'm
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
                  <span className="ml-2">ABIODUN</span>
                </motion.span>
                , Welcome to my corner of the digital realm! I'm a passionate
                and innovative front-end developer dedicated to crafting
                immersive and user-friendly web experiences. With a keen eye for
                design and a knack for turning ideas into pixel-perfect reality,
                I bring a blend of creativity and technical expertise to every
                project. Join me on a journey where innovation meets seamless
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
        <About blackColor={{ backgroundColor: "#1a2232" }} />
      </div>

      <div id="Education">
        <Education
          blackColor={{ backgroundColor: "#151b28" }}
          LightBlue={{ backgroundColor: "#1a2232" }}
        />
      </div>

      <div id="Skills">
        <Skills
          blackColor={{ backgroundColor: "#151b28" }}
          LightBlue={{ backgroundColor: "#1a2232" }}
        />
      </div>

      <div id="Contact">
        <Contact
          LightBlue={{ backgroundColor: "#1a2232" }}
          blackColor={{ backgroundColor: "#151b28" }}
        />
      </div>
    </AnimatedPage>
  );
}
