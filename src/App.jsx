import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";
import Education from "./sections/Education";
import MusicPlayer from "./components/MusicPlayer";
import Certificates from "./sections/Certificates";
import Achievements from "./sections/Achievements";

const App = () => {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <div className="relative gredient text-white">
          <CustomCursor />
          {/* <ParticlesBackground /> */}
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certificates />
          <Achievements />
          <Contact />
          <Footer />
          <MusicPlayer />
        </div>
      )}
    </>
  );
};

export default App;
