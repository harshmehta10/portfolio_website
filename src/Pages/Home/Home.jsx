import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import WorkExperience from "../../components/WorkExperience";
import Education from "../../components/Education";

const Home = () => {
  return (
    <div className="bg-[#D7D7D7] ">
      <Hero />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
    </div>
  );
};

export default Home;
