import { Fragment } from "react";
import GradientMesh from "./GradientMesh";
import pic from "../assets/pic.webp";
import github from "../assets/github.svg";
import linkdin from "../assets/linkdin.svg";
import twitter from "../assets/twitter.svg";
import { data as projects } from "./Projects";
import { groups } from "./Skills";

const socials = [
  { href: "https://github.com/harshmehta10", icon: github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/harshmehta02/",
    icon: linkdin,
    label: "LinkedIn",
  },
  { href: "https://x.com/Harshmehtaa10", icon: twitter, label: "Twitter" },
];

const headline = "Namaste, I am Harsh";

// Counts come from the real lists, so they can't drift from the page.
const stats = [
  { label: "Experience", value: "1.5 yrs" },
  { label: "Projects", value: projects.length },
  { label: "Skills", value: groups.flatMap((g) => g.skills).length },
];

const Hero = () => (
  <header
    id="hero"
    className="relative overflow-hidden px-6 pt-32 pb-20 lg:pt-40 lg:pb-28"
  >
    <GradientMesh />

    <div className="relative mx-auto grid max-w-[1080px] items-center gap-14 lg:grid-cols-12">
      <div className="flex flex-col items-start gap-6 lg:col-span-7">
        <span className="t-micro-cap rounded-full bg-canvas/70 px-2.5 py-1.5 text-primary-deep backdrop-blur-sm">
          Open to Fullstack roles
        </span>

        {/* CSS letter-by-letter entrance: no animation library on the critical path.
            Words stay unbreakable so the line only wraps at spaces. */}
        <h1 className="t-display-xxl text-ink" aria-label={headline}>
          {headline.split(" ").map((word, w, words) => {
            const offset = words.slice(0, w).join(" ").length + (w ? 1 : 0);
            // The space lives between word boxes: trailing whitespace inside an
            // inline-block is collapsed away.
            return (
              <Fragment key={w}>
                {w > 0 && " "}
                <span
                  aria-hidden="true"
                  className="inline-block whitespace-nowrap"
                >
                  {[...word].map((ch, c) => (
                    <span
                      key={c}
                      className="char-in"
                      style={{ "--i": offset + c }}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
              </Fragment>
            );
          })}
        </h1>

        <p className="t-heading-md max-w-[36ch] text-ink-secondary">
          Fullstack developer building clean, responsive, user-friendly web
          experiences in React and Tailwind CSS.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="/HarshMehtaFullstackDev.pdf"
            download="HarshMehtaFullstackDev.pdf"
            className="btn btn-primary"
          >
            Download CV{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
          <a
            href="mailto:harshmehta.srm2002@gmail.com"
            className="btn btn-secondary"
          >
            Email me
          </a>
        </div>

        <ul className="-ml-2.5 flex items-center">
          {socials.map(({ href, icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center opacity-70 transition-opacity hover:opacity-100"
              >
                <img
                  src={icon}
                  alt=""
                  width="20"
                  height="20"
                  className="size-5 dark:invert"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Composited "product" panel: portrait card with a floating stats card */}
      <div className="relative mx-auto w-full max-w-[380px] lg:col-span-5 lg:mr-0">
        <div className="rounded-xl bg-canvas p-2 shadow-lift">
          <img
            src={pic}
            alt="Harsh Mehta"
            width="520"
            height="620"
            fetchPriority="high"
            className="aspect-[5/6] w-full rounded-lg object-cover object-top"
          />
        </div>

        <dl className="tnum absolute -bottom-8 -left-4 grid grid-cols-3 gap-5 rounded-lg bg-canvas px-5 py-4 shadow-float sm:-left-10">
          {stats.map(({ label, value }) => (
            <div key={label}>
              <dt className="t-micro text-ink-mute">{label}</dt>
              <dd className="t-heading-lg pt-1 text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </header>
);

export default Hero;
