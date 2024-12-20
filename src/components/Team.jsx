import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { db } from "../../firebase"; // Import your Firebase configuration
import { collection, getDocs } from "firebase/firestore";
import profile from "../assets/profile.png"

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Firestore on component mount
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const teamCollection = collection(db, "team");
        const teamSnapshot = await getDocs(teamCollection);
        const teamData = teamSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })).sort((a, b) => a.index - b.index); // Sort by index attribute
        setTeamMembers(teamData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team data:", error);
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return <p className="text-white text-center">Loading team data...</p>;
  }

  return (
    <div
      className="w-full flex flex-col items-center px-20 py-10 bg-neutral-900 gap-10 relative overflow-hidden"
      id="team"
    >
      <h1 className="text-4xl font-orbitron font-bold text-white mb-5 text-center">
        Our Team
      </h1>
    {teamMembers.length > 0 ? (
      <div className="flex flex-wrap justify-center gap-10 z-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="bg-neutral-800 hover:bg-neutral-800/80 rounded-lg p-5 w-[250px] flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 75,
              damping: 15,
              mass: 0.5,
            }}
          >
            <div className="w-32 h-32 overflow-hidden rounded-full mb-4 relative group">
              <img
                src={profile}
                alt={member.name}
                className="w-full h-full object-cover rounded-full shadow-xl border-4 border-accent transition-all duration-300 group-hover:border-4 group-hover:border-accent group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full border-2 border-accent opacity-60 group-hover:opacity-100 group-hover:animate-pulse" />
            </div>

            <h2 className="text-xl text-center font-bold text-white mb-2 transition-all duration-300 group-hover:text-accent">
              {member.name}
            </h2>
            <p className="text-tertiary text-sm transition-all duration-300 group-hover:text-accent">
              {member.role}
            </p>
          </motion.div>
        ))}
      </div>
    ): (
      <p className="text-white text-center">No team members found</p>
    )}
      
    </div>
  );
};

export default Team;
