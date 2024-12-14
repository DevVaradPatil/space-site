import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials';

const Heroes = () => {
    const testimonials = [
        {
          quote:
            "When you look at the stars and the Galaxy you feel that you're not just from any particular piece of land, but from the solar system.",
          name: "Kalpana Chawla",
          designation: "Astronaut and First Indian Woman in Space",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Kalpana_Chawla%2C_NASA_photo_portrait_in_orange_suit.jpg/720px-Kalpana_Chawla%2C_NASA_photo_portrait_in_orange_suit.jpg",
        },
        {
          quote:
            "The more people are exposed to science, the more we will move away from superstition.",
          name: "Rakesh Sharma",
          designation: "First Indian in Space, Soyuz T-11 Mission",
          src: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-67678,resizemode-75,msid-102973271/news/science/look-forward-to-successful-moon-landing-rakesh-sharma-1st-indian-in-space.jpg",
        },
        {
          quote:
            "True productivity comes from clarity and simplicity. A focused mind and intuitive tools can make even the most complex tasks achievable.",
          name: "Vikram Sarabhai",
          designation: "Father of the Indian Space Program",
          src: "https://cdn.britannica.com/98/239498-050-C61D39D6/Vikram-Sarabhai-Indian-physicist-and-industrialist.jpg",
        },
        {
          quote:
            "That's one small step for man, one giant leap for mankind",
          name: "Neil Armstrong",
          designation: "First Human to Walk on the Moon",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/800px-Neil_Armstrong_pose.jpg",
        },
      ];
      
  return (
    <div
      className="w-full flex flex-col items-center px-20 py-10 bg-neutral-900 gap-10 relative overflow-hidden"
      id="heroes"
    >
      <h1 className="text-4xl font-orbitron font-bold text-white text-center">
        Our Heroes
      </h1>
        <div className='w-full justify-center items-center'>
            <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
    </div>
  )
}

export default Heroes