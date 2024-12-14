import React, { useEffect, useState } from "react";
import Scene from "./Scene";
import Header from "./Header";
import About from "./About";
import Events from "./Events";
import Activities from "./Activities";
import Team from "./Team";
import Contact from "./Contact";
import BottomBar from "./BottomBar";
import GoToTopButton from "./GoToTopButton";
import Heroes from "./Heroes";
import Inspiration from "./Inspiration";
import Showcase from "./Showcase";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3300);
  }, []);

  return (
    <div className="font-sans">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-black text-white" style={{ pointerEvents: "none" }}>
          <Scene />
        </div>
      ) : (
        <>
          <Header />
          <About />
          <Events />
          <Activities />
          <Team />
          <Heroes />
          <Inspiration />
          <Showcase />
          <Contact />
          <BottomBar />
          <GoToTopButton />
        </>
      )}
    </div>
  );
}

export default Home;
