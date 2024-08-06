import React, { useRef } from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Skill from "./components/skills";
import Education from "./components/education";

const App: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Navbar
        onHomeClick={() => scrollToSection(heroRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onEducationClick={() => scrollToSection(educationRef)}
      />

      <div ref={heroRef} className="section">
        <HeroSection />
      </div>

      <div ref={skillsRef} className="section">
        <Skill />
      </div>

      <div ref={educationRef} className="section">
        <Education />
      </div>

    </div>
  );
}

export default App;
