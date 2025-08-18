import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import WorkExperience from "../../components/WorkExperience";
import Education from "../../components/Education";
import Projects from "../../components/Projects";

const Home = () => {
  return (
    <div className="usebg">
      <Hero />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
