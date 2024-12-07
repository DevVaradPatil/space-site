import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const StatCard = ({ imageSrc, number, title, subtitle, index }) => {
  // Intersection Observer hook to trigger animation when in view
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger the animation once when it enters the view
    threshold: 0.5, // trigger when at least 50% of the element is in view
  });

  return (
    <motion.div
      ref={ref} // Attach the ref here
      className="bg-transparent backdrop-blur-xl border border-slate-400 hover:border-slate-50 w-[300px] text-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center gap-4 transform transition-all duration-300"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: inView ? 1 : 0,
        scale: inView ? 1 : 0.95,
      }}
      transition={{
        delay: index * 0.2, 
        type: 'spring', 
        stiffness: 100, // Lower stiffness for a smoother spring
        damping: 15, // Add damping to prevent jarring motions
        mass: 0.5, // Optional: controls the "weight" of the spring
      }}
      
    >
      {/* Image Graphic */}
      <div
        className="w-20 h-20 bg-center bg-cover mb-4"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>

      {/* Stat Number */}
      <motion.p
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {inView && <CountUp start={0} end={number} duration={2} />}+
      </motion.p>

      {/* Title */}
      <motion.h3
        className="text-xl font-orbitron font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h3>

      {/* Subtitle */}
      <motion.p
        className="text-sm text-neutral-400 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default StatCard;
