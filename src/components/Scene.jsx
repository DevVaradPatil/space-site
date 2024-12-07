import React from 'react'
import Lottie from "react-lottie";
import rocket from "../assets/animations/rocket-ship.json";

const Scene = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(rocket)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className='w-full h-screen justify-center flex items-center px-0 md:px-20'>
      <Lottie options={defaultOptions} />
    </div>
  )
}

export default Scene