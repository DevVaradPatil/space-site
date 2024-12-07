import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-neutral-950 via-black to-neutral-900 relative" id='contact'>
      {/* Background Stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 z-0" />

      <div className="max-w-screen-xl mx-auto px-10 flex flex-col md:flex-row gap-16 relative z-10">
        {/* Left side - Contact Info */}
        <div className="w-full md:w-1/2 text-white flex flex-col gap-8">
          <motion.h2
            className="text-4xl font-orbitron font-bold text-center md:text-left text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Contact Us
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center space-x-4 hover:scale-105 transform transition-transform duration-300">
              <FaMapMarkerAlt className="text-accent text-3xl hover:text-white" />
              <p className="text-lg">123 Space Blvd, Galactic City, Space Planet</p>
            </div>

            <div className="flex items-center space-x-4 hover:scale-105 transform transition-transform duration-300">
              <FaEnvelope className="text-accent text-3xl hover:text-white" />
              <p className="text-lg">contact@spaceclub.com</p>
            </div>

            <div className="flex items-center space-x-4 hover:scale-105 transform transition-transform duration-300">
              <FaPhoneAlt className="text-accent text-3xl hover:text-white" />
              <p className="text-lg">+1 (123) 456-7890</p>
            </div>
          </motion.div>

          {/* Social Media Icons */}
          <div className="flex gap-6 justify-center md:justify-start mt-10">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="p-3 bg-neutral-800 rounded-full hover:bg-accent hover:scale-110 transform transition-all duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <FaFacebookF className="text-3xl text-white" />
              </motion.div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="p-3 bg-neutral-800 rounded-full hover:bg-accent hover:scale-110 transform transition-all duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <FaTwitter className="text-3xl text-white" />
              </motion.div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="p-3 bg-neutral-800 rounded-full hover:bg-accent hover:scale-110 transform transition-all duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <FaInstagram className="text-3xl text-white" />
              </motion.div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="p-3 bg-neutral-800 rounded-full hover:bg-accent hover:scale-110 transform transition-all duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedinIn className="text-3xl text-white" />
              </motion.div>
            </a>
          </div>
        </div>

        {/* Right side - Google Map */}
        <div className="w-full md:w-1/2">
          <motion.div
            className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.1857603367184!2d74.28066271148798!3d17.06356398370187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc174c4124484bd%3A0x35d1cbf0672b3f50!2sRajarambapu%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1733501081110!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
