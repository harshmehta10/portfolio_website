import React from "react";
import bootstrap from "../assets/bootstrap.svg";
import css from "../assets/css.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import html from "../assets/html.svg";
import javascript from "../assets/javascript.svg";
import mongodb from "../assets/mongodb.svg";
import nodejs from "../assets/nodejs.svg";
import reactjs from "../assets/reactjs.svg";
import sql from "../assets/sql.svg";
import tailwind from "../assets/tailwindcss.svg";
import typescript from "../assets/typescript.svg";
import expressjs from "../assets/expressjs.svg";
import redux from "../assets/redux.svg";
import motion from "../assets/motion.svg";
import nextjs from "../assets/nextjs.svg";
import vercel from "../assets/vercel.svg";
import netlify from "../assets/netlify.svg";

const Skills = () => {
  const Using = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React", icon: reactjs },
    { name: "Git", icon: git },
    { name: "Github", icon: github },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Redux", icon: redux },
    { name: "Motion.dev", icon: motion },
    { name: "Vercel", icon: vercel },
    { name: "Netlify", icon: netlify },
  ];
  const learning = [
    { name: "Node.js", icon: nodejs },
    { name: "Express.js", icon: expressjs },
    { name: "MongoDB", icon: mongodb },
    { name: "SQL", icon: sql },
    { name: "TypeScript", icon: typescript },
    { name: "Next.js", icon: nextjs },
  ];
  return (
    <div className="container mx-auto px-8 lg:px-20 py-12 block lg:flex flex-col space-y-6">
      <div className="space-y-6">
        <div className="block lg:flex flex-col items-center">
          <p className="font-medium font-raleway py-2 lg:py-4 px-3 lg:px-7 border-2 lg:border-4 rounded-xl text-xl lg:text-4xl">
            Skills
          </p>
        </div>
        <div>
          <p className="font-montserrat font-medium flex flex-col items-center text-[#050505] text-base lg:text-2xl">
            Using Now:
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 ">
          {Using.map((skill) => (
            <div
              key={skill.name}
              className=" flex flex-col items-center space-y-2"
            >
              <img src={skill.icon} alt={skill.name} className="size-12 " />
              <p className="font-montserrat  text-[#050505] font-light text-sm lg:text-lg">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
        <div>
          <p className="font-montserrat font-medium flex flex-col items-center text-[#050505] text-base lg:text-2xl">
            Learning:
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 ">
          {learning.map((skill) => (
            <div
              key={skill.name}
              className=" flex flex-col items-center space-y-2"
            >
              <img src={skill.icon} alt={skill.name} className="size-12" />
              <p className="font-montserrat  text-[#050505] font-light text-sm lg:text-lg">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
