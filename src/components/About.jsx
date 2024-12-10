import React from "react";
import { motion } from "framer-motion";
import { cardVariant, textVariant } from "../lib/variants";

const About = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row justify-between items-center px-5 md:px-20 py-20 bg-neutral-950 gap-10 overflow-x-hidden"
      id="about"
    >
      <div className="text-left text-tertiary w-full md:w-[60%]">
        {/* Text content with animation on scroll into view */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the element is visible
        >
          <h1 className="text-4xl text-center md:text-left font-orbitron font-bold text-white">
            About Us
          </h1>
          <p className="mt-4 text-base md:text-lg text-justify">
          The GGU Rocket Club is a vibrant initiative aimed at empowering students with hands-on experience in model rocketry and satellite technology while fostering innovation and collaboration. Guided by its vision to inspire future space enthusiasts, the club provides opportunities to design, build, and launch model rockets and satellites, focusing on real-world applications such as environmental data collection and project monitoring through satellite imagery. With a mission to bridge academic learning and practical skills, the club serves as a launchpad for students to explore the exciting realms of aerospace and contribute to solving global challenges.
          </p>
        </motion.div>
      </div>

      <div className="w-[40%] flex justify-center items-center">
        {/* Image with animation on scroll into view */}
        <motion.div
          variants={cardVariant("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the element is visible
        >
          <div className="overflow-hidden rounded-md w-[300px] h-[400px] flex">
            <img
              src="https://images.pexels.com/photos/41005/rocket-launch-rocket-take-off-soyuz-41005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Space Graphic"
              className="w-full h-full transition-all duration-200 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
