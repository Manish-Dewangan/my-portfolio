import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";
import Education from "./sections/Education";
import MusicPlayer from "./components/MusicPlayer";
import Certificates from "./sections/Certificates";
import Achievements from "./sections/Achievements";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <CustomCursor />
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

      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}
    </div>
  );
};

export default App;
