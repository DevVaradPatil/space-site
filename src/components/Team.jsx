import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const teamMembers = [
  {
    name: "John Doe",
    role: "Astrophysicist",
    image:
      "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Jane Smith",
    role: "Engineer",
    image:
      "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Alice Johnson",
    role: "Research Scientist",
    image:
      "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Bob Brown",
    role: "Mission Specialist",
    image:
      "https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const Team = () => {
  return (
    <div
      className="w-full flex flex-col items-center px-20 py-10 bg-gradient-to-b from-neutral-950 via-black to-neutral-900 gap-10 relative overflow-hidden"
      id="team"
    >
      <h1 className="text-4xl font-orbitron font-bold text-white mb-5 text-center">
        Our Team
      </h1>

      <div className="flex flex-wrap justify-center gap-10 z-10">
        {teamMembers.map((member, index) => {
          // Intersection Observer hook to trigger animation when in view
          const { ref, inView } = useInView({
            triggerOnce: true, // only trigger the animation once when it enters the view
            threshold: 0.5, // trigger when at least 50% of the element is in view
          });

          return (
            <motion.div
              ref={ref} // Attach the ref here
              key={index}
              className="bg-neutral-800 hover:bg-neutral-800/80 rounded-lg p-5 w-[250px] flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: inView ? 1 : 0, // Animate opacity when in view
                scale: inView ? 1 : 0.9, // Animate scale when in view
              }}
              transition={{
                delay: index * 0.1, 
                type: 'spring', 
                stiffness: 75, // Lower stiffness for a smoother spring
                damping: 15, // Add damping to prevent jarring motions
                mass: 0.5, // Optional: controls the "weight" of the spring
              }}
            >
              <div className="w-32 h-32 overflow-hidden rounded-full mb-4 relative group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full shadow-xl border-4 border-accent transition-all duration-300 group-hover:border-4 group-hover:border-accent group-hover:scale-110"
                />
                {/* Glowing effect around image */}
                <div className="absolute inset-0 rounded-full border-2 border-accent opacity-60 group-hover:opacity-100 group-hover:animate-pulse" />
              </div>

              <h2 className="text-xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-accent">
                {member.name}
              </h2>
              <p className="text-tertiary text-sm transition-all duration-300 group-hover:text-accent">
                {member.role}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
