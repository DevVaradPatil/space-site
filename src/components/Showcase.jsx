import React from 'react'
import ShowcaseCard from './ShowcaseCard';

const Showcase = () => {
  const showcases = [
    {
      id: 1,
      video: 'https://videos.pexels.com/video-files/4702442/4702442-hd_1920_1080_25fps.mp4',
      title: "Jupiter's Red Spot",
      subtitle: 'The Great Red Spot on Jupiter is a storm larger than Earth.',
    },
    {
      id: 2,
      video: 'https://videos.pexels.com/video-files/1926295/1926295-hd_1920_1080_25fps.mp4',
      title: "Milky Way's Stars",
      subtitle: 'Our Milky Way galaxy contains over 100 billion stars!',
    },
    {
      id: 3,
      video: 'https://videos.pexels.com/video-files/6143460/6143460-hd_1920_1080_24fps.mp4',
      title: 'International Space Station',
      subtitle: 'The ISS orbits Earth at a speed of 28,000 km/h!',
    },
    {
      id: 4,
      video: 'https://videos.pexels.com/video-files/12722063/12722063-uhd_2560_1440_24fps.mp4',
      title: 'Venus and Its Rotation',
      subtitle: 'Venus rotates in the opposite direction to most planets.',
    },
  ];
  
      
    return (
        <div className="w-full flex flex-wrap items-center px-20 justify-center py-10 bg-neutral-900 gap-10 relative overflow-hidden">
            {showcases.map(showcase => (
                <ShowcaseCard key={showcase.id} video={showcase.video} title={showcase.title} subtitle={showcase.subtitle}/>
            ))}
        </div>
    );
};

export default Showcase;