import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import GoToTopButton from "./components/GoToTopButton";
import Header from "./components/Header";
import Team from "./components/Team";
import Scene from "./components/Scene";
import BottomBar from "./components/BottomBar";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
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
          <Team />
          <Contact />
          <BottomBar />
          <GoToTopButton />
        </>
      )}
    </div>
  );
}

export default App;
