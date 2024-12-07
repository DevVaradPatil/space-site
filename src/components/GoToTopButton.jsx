import React, { useState, useEffect } from 'react';
import { IoMdRocket } from "react-icons/io";
import { motion } from 'framer-motion';

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button when the user scrolls
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 p-3 bg-transparent text-white border-2 border-white rounded-full shadow-md hover:bg-neutral-800 hover:scale-105 transition-all duration-300 transform"
          onClick={scrollToTop}
        >
          <IoMdRocket size={24} />
        </motion.button>
      )}
    </>
  );
};

export default GoToTopButton;
