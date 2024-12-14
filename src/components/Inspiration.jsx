import React from 'react'
import { motion } from "framer-motion";

const Inspiration = () => {
    const organizations = [
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/300px-Indian_Space_Research_Organisation_Logo.svg.png",
        title: "ISRO",
        subtitle: "Harnessing space technology for national development and exploring the cosmos.",
        link: "https://www.isro.gov.in/"
      },
      {
        img: "https://media.licdn.com/dms/image/v2/C510BAQGiDe5-iLWlqQ/company-logo_200_200/company-logo_200_200/0/1630588081533/antrix_corporation_limited_logo?e=2147483647&v=beta&t=zFUsZCC8NAaMYpst5kBiEW52Ck1SCm-gLXN0Wdh6NpY",
        title: "Antrix Corporation",
        subtitle: "The commercial arm of ISRO, bringing space technology to global markets.",
        link: "https://www.antrix.co.in/"
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1920px-NASA_logo.svg.png",
        title: "NASA",
        subtitle: "Leading the world in space exploration and scientific discovery.",
        link: "https://www.nasa.gov/"
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/ESA_Patch_2022.png/300px-ESA_Patch_2022.png",
        title: "ESA",
        subtitle: "Exploring space for the benefit of Europe and the world.",
        link: "https://www.esa.int/"
      },
      ];

  return (
    <div
      className="w-full flex flex-col items-center px-20 py-10 bg-neutral-900 gap-10 relative overflow-hidden"
      id="heroes"
    >
      <h1 className="text-4xl font-orbitron font-bold text-white text-center">
        Our Inspiration
      </h1>
      <div className='w-full flex flex-wrap gap-8 justify-center items-start'>
        {organizations.map((organization, index) => (
          <motion.a
            href={organization.link}
            target='_blank'
            key={index}
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
            className="flex flex-col items-center justify-start gap-4 p-4 w-[330px] transform transition-transform duration-300 hover:scale-105"
          >
            <div className='flex flex-col w-full h-full justify-center items-center gap-4 transition-all duration-300 transform hover:scale-105'>

            <div className='w-32 h-32 flex justify-center p-5 items-center overflow-hidden rounded-full bg-white'>
              <img
                src={organization.img}
                alt={organization.title}
                loading='lazy'
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl text-center font-bold dark:text-white text-black">
              {organization.title}
            </h3>
            <p className="text-sm text-center text-gray-300 dark:text-neutral-300">
              {organization.subtitle}
            </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default Inspiration