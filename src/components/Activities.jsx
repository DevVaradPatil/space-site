import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { cardVariant } from "../lib/variants";
import { db } from "../../firebase"; // Import your Firebase configuration
import { collection, getDocs } from "firebase/firestore";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Firestore on component mount
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const teamCollection = collection(db, "activities");
        const teamSnapshot = await getDocs(teamCollection);
        const teamData = teamSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setActivities(teamData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team data:", error);
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) {
    return <p className="text-white text-center">Loading team data...</p>;
  }

  return (
    <div
      className="w-full flex flex-col items-center px-3 md:px-20 py-10 bg-neutral-900 gap-10 relative overflow-hidden"
      id="activity"
    >
      <h1 className="text-4xl font-orbitron font-bold text-white mb-0 text-center">
        Our Activities
      </h1>
      {activities.length > 0 ? (
        <div className="w-full h-full flex justify-around items-center flex-wrap">
        {activities.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariant} // Assign the variants
            initial="hidden" // Initial state
            animate="visible" // Animate to visible state
            transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered animation
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
      ): (
        <p className="text-white text-center">No activities found.</p>
      )}
      
    </div>
  );
};

export default Activities;
