import React from 'react'
import StatCard from './StatCard'
import astronaut from '../assets/astronaut.png'
import galaxy from '../assets/galaxy.png'
import rocket from '../assets/rocket.png'

const Events = () => {
  return (
    <div
      className="w-full flex flex-wrap gap-10 justify-evenly items-center py-20 bg-neutral-900"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", // Update the path
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <StatCard
        imageSrc={rocket}
        number="5"
        title="Projects"
        subtitle="Amazing projects completed"
        index={1}
      />
      <StatCard
        imageSrc={galaxy}
        number="10"
        title="Workshops"
        subtitle="Successful workshops hosted"
        index={2}
      />
      <StatCard
        imageSrc={astronaut}
        number="300"
        title="Students"
        subtitle="Students impacted"
        index={3}
      />
    </div>
  )
}

export default Events
