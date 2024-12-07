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
          <h1 className="text-4xl text-center md:text-left font-orbitron font-bold text-white">About Us</h1>
          <p className="mt-4 text-base  md:text-lg">
            At Stellar Explorers, we are a passionate team of space enthusiasts,
            dreamers, and innovators, united by a common goal: to explore the
            wonders of the cosmos. Our mission is to inspire curiosity and spark
            imagination by bringing the mysteries of space closer to home. Through
            cutting-edge research, educational outreach, and collaboration with
            leading scientists and engineers, we aim to foster a deeper
            understanding of the universe. <br />
            Founded by a group of visionary thinkers, Stellar Explorers began as a
            humble club dedicated to learning about the vastness of space. Today,
            we have grown into a thriving community of students, professionals,
            and space aficionados working together to unlock the secrets of the
            stars. <br />
            Whether it's observing distant galaxies through powerful telescopes,
            building innovative space technology, or simply discussing the latest
            space discoveries, we are driven by our fascination with the final
            frontier. Join us on our journey, and together, let's push the
            boundaries of human knowledge.
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
