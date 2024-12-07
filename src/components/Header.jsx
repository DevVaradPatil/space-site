import React from "react";
import Navbar from "./Navbar";
import { Meteors } from "./ui/meteors";
import { HyperText } from "./ui/hyperText";
import animationData from "../assets/animations/astronaut.json";
import animationData2 from "../assets/animations/ufo.json";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { cardVariant, textVariant } from "../lib/variants";

const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(animationData)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(animationData2)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="w-full flex flex-col justify-center items-center bg-neutral-950 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle, rgba(0,0,0,0.9) 20%, rgba(0,0,0,1) 100%)",
        minHeight: "100dvh",
      }}
      id="home"
    >
      <Meteors number={20} />
      <Navbar />

      <div className="w-full h-full flex flex-col items-center justify-center text-center">
        <HyperText
          className="text-7xl hidden md:flex font-semibold font-orbitron text-neutral-100 tracking-widest"
          text="Beyond Horizons"
        />
        <HyperText
          className="text-5xl md:hidden font-semibold font-orbitron text-neutral-100 tracking-widest"
          text="Beyond"
        />
        <HyperText
          className="text-5xl md:hidden font-semibold font-orbitron text-neutral-100 tracking-widest"
          text="Horizons"
        />
        <motion.p
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-2xl text-tertiary mt-5"
        >
          Where curiosity meets the cosmos, and dreams turn into discoveries.
        </motion.p>
      </div>

      <motion.div
        variants={cardVariant("left")}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 left-5 hidden md:flex"
      >
        <Lottie options={defaultOptions} width={300} />
      </motion.div>
      <motion.div
      variants={cardVariant("right")}
      initial="hidden"
      animate="visible"
      className="absolute bottom-10 right-5 hidden md:flex">
        <Lottie options={defaultOptions2} width={300} />
      </motion.div>

      <div className="absolute bottom-5 text-white">
        <div className="flex flex-col items-center space-y-2">
          <a href="#about" className="flex flex-col items-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              animate={{
                y: [0, -15, 0], // Moves up and down
              }}
              transition={{
                duration: 2, // 2 seconds for the full cycle
                ease: "easeInOut", // Smooth easing
                repeat: Infinity, // Infinite loop
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
