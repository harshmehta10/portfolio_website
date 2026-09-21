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
import SectionHeading from "./SectionHeading";

// eslint-disable-next-line react-refresh/only-export-components -- Hero reads the count
export const groups = [
  {
    skills: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "React", icon: reactjs },
      { name: "Git", icon: git },
      { mono: true, name: "GitHub", icon: github },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Bootstrap", icon: bootstrap },
      { name: "Redux", icon: redux },
      { mono: true, name: "Motion.dev", icon: motion },
      { mono: true, name: "Vercel", icon: vercel },
      { name: "Netlify", icon: netlify },
      { name: "Node.js", icon: nodejs },
      { name: "Express.js", icon: expressjs },
      { name: "MongoDB", icon: mongodb },
      { name: "SQL", icon: sql },
      { name: "TypeScript", icon: typescript },
      { mono: true, name: "Next.js", icon: nextjs },
    ],
  },
];

// The cream card is the warm interlude between the cool bands.
// On dark, logos get a small white backing (like the company logos) rather than
// inverting only the black ones: dark-coloured marks like SQL vanish on navy too.
const Skills = () => (
  <section className="band bg-canvas">
    <div className="reveal mx-auto max-w-[1080px] space-y-12">
      <SectionHeading title="Skills" />

      {groups.map(({ label, skills }, g) => (
        <div key={label ?? g} className="rounded-lg bg-canvas-cream p-6 sm:p-8">
          {label && <h3 className="t-micro-cap pb-6 text-ink">{label}</h3>}

          <ul className="stagger grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {skills.map((skill, i) => (
              <li
                key={skill.name}
                style={{ "--i": i }}
                className="flex items-center gap-3 rounded-md bg-canvas px-3 py-3 shadow-card"
              >
                <img
                  src={skill.icon}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="size-6 shrink-0 rounded-xs object-contain dark:bg-white dark:p-0.5"
                />
                <p className="t-body-md truncate text-ink">{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
