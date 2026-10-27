import netflix from "../assets/netflix.webp";
import shoor from "../assets/shoor.webp";
import allinonepodcast from "../assets/allinone.webp";
import blal from "../assets/blal.webp";
import ots from "../assets/ots.webp";
import mctyson from "../assets/mctyson.webp";
import moneyorbit from "../assets/moneyorbit.webp";
import neuwrld from "../assets/neuwrld.webp";
import SectionHeading from "./SectionHeading";

// Descriptions are cut to roughly one scannable line each. The originals ran
// forty-plus words of feature list per card, which nobody reads on a grid.
// eslint-disable-next-line react-refresh/only-export-components -- Hero reads the count
export const data = [
  {
    title: "MoneyOrbit",
    description:
      "Personal expenses and group bills in one place: track monthly spending, split shared costs, and see who owes whom.",
    image: moneyorbit,
    alt: "MoneyOrbit dashboard showing monthly spend, budgets and recent expenses",
    path: "https://money-orbit-nu.vercel.app/",
    underDevelopment: true,
    highlights: [
      "Monthly budgets per category with warnings at 80% and 100% of the limit",
      "Group bills split equally or by custom amounts, settled with as few payments as possible",
      "Reports with CSV and PDF export; React, Vite and Tailwind frontend on a Node, Express and PostgreSQL API",
    ],
    skills: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Neuwrld",
    description:
      "A streetwear storefront built around limited drops: men's and women's collections, product search, wishlist and cart, and an early-access sign-up.",
    image: neuwrld,
    alt: "Neuwrld streetwear landing page with a bold hero and collection navigation",
    path: "https://neuwrld-website.vercel.app/",
    skills: ["React", "Vite", "Tailwind CSS"],
  },
  {
    title: "mcTyson",
    description:
      "Receipts and invoices arrive as mail and die there. mcTyson reads them out of the inbox and turns them into a ledger you can search.",
    image: mctyson,
    alt: "mcTyson invoice dashboard listing monthly receipts and totals",
    path: "https://app.mctyson.io/",
    highlights: [
      "Pulls the vendor, amount and attachment out of each mail and files it by month, totalling across currencies",
      "Flags repeating payments so a subscription surfaces before it renews, not after",
      "Google OAuth sign-in, search across every invoice, and one-click export",
    ],
    skills: ["NextJs", "SupaBase", "Tailwind CSS"],
  },
  {
    title: "Netflix",
    description:
      "A Netflix clone with Firebase auth and dynamic carousels for Trending, Upcoming, and Top Rated titles.",
    image: netflix,
    alt: "Netflix clone home screen with movie carousels",
    path: "https://react-clone-netflx.netlify.app/",
    skills: ["React", "Firebase", "Redux", "Tailwind CSS"],
  },
  {
    title: "Shoor",
    description:
      "A minimalist fashion storefront with product categories, locale options, and a full policy footer.",
    image: shoor,
    alt: "Shoor fashion store landing page",
    path: "https://shoor.netlify.app/",
    skills: ["React", "Redux", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "All in one Podcast",
    description:
      "A publishing platform for creators to produce, distribute, and monetise podcasts, with listener analytics.",
    image: allinonepodcast,
    alt: "All in one Podcast creator dashboard",
    path: "https://allinonepodcast.techxerro.site/",
    skills: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Blal",
    description:
      "A diagnostics site for Dr. B. Lal Clinical Laboratory: test booking, report access, and prescription uploads.",
    image: blal,
    alt: "Dr. B. Lal Clinical Laboratory booking page",
    path: "https://blal.netlify.app/",
    skills: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "OtsEshore",
    description:
      "A supplements storefront with product listings, personalised recommendations, and dispatch tracking.",
    image: ots,
    alt: "Optimum Therapeutic Solutions supplements storefront",
    path: "https://ots.techxerro.site/",
    skills: ["React", "Redux", "Tailwind CSS", "Framer Motion"],
  },
];

// Each screenshot sits in faux browser chrome, the composited-mockup look.
// The whole card is the link; "Visit site" is its label, not a second target.
const Card = ({ item, index, featured }) => {
  // No live site yet (under development): a plain block, not a link.
  const Root = item.path ? "a" : "div";
  const linkProps = item.path
    ? { href: item.path, target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Root
      {...linkProps}
      style={{ "--i": index }}
      className={`group flex overflow-hidden rounded-lg border border-hairline bg-canvas shadow-card transition-shadow duration-300 hover:shadow-lift ${
        featured ? "flex-col md:col-span-2 md:flex-row" : "flex-col"
      }`}
    >
      <div
        className={`bg-canvas-soft p-4 sm:p-6 ${featured ? "md:w-3/5 md:shrink-0" : ""}`}
      >
        <div className="overflow-hidden rounded-md bg-canvas shadow-float">
          <div className="flex items-center gap-1.5 border-b border-hairline px-3 py-2">
            <span className="size-2 rounded-full bg-ruby/70" />
            <span className="size-2 rounded-full bg-[#ffc48a]" />
            <span className="size-2 rounded-full bg-primary-subdued" />
            <span className="t-micro ml-2 truncate text-ink-mute">
              {item.path
                ? item.path.replace(/^https?:\/\//, "").replace(/\/$/, "")
                : "moneyorbit (in development)"}
            </span>
          </div>
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={item.image}
              alt={item.alt}
              width="1200"
              height="750"
              loading="lazy"
              decoding="async"
              className="zoom-media h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div
        className={`flex flex-1 flex-col gap-3 p-6 sm:p-8 ${featured ? "md:justify-center" : ""}`}
      >
        <h3
          className={
            featured ? "t-display-lg text-ink" : "t-display-md text-ink"
          }
        >
          {item.title}
        </h3>

        {item.underDevelopment && (
          <span className="t-micro-cap w-fit rounded-full bg-ruby/15 px-2 py-1 text-ruby">
            Under development
          </span>
        )}

        <p className="t-body-md text-ink-secondary">{item.description}</p>

        {item.highlights ? (
          <ul className="flex-1 space-y-2 pt-1">
            {item.highlights.map((point) => (
              <li
                key={point}
                className="t-body-md relative pl-4 text-ink-secondary before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:rounded-full before:bg-primary-subdued"
              >
                {point}
              </li>
            ))}
          </ul>
        ) : (
          <span className="flex-1" />
        )}

        <ul className="flex flex-wrap gap-1.5 pt-1">
          {item.skills.map((skill) => (
            <li
              key={skill}
              className="t-micro-cap rounded-full bg-primary-subdued/45 px-2 py-1 text-primary-deep"
            >
              {skill}
            </li>
          ))}
        </ul>

        {item.path && (
          <span className="link-arrow t-body-md pt-2 font-normal text-link">
            Visit site{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </span>
        )}
      </div>
    </Root>
  );
};

// First project runs full width; the rest fill a two-column grid, and an odd
// leftover runs full width too rather than sitting alone in a half row.
const Projects = () => {
  const [featured, ...rest] = data;

  return (
    <section className="band bg-canvas-soft">
      <div className="reveal mx-auto max-w-[1080px] space-y-12">
        <SectionHeading title="Projects" />

        <div className="stagger grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card item={featured} index={0} featured />
          {rest.map((item, i) => (
            <Card
              key={item.title}
              item={item}
              index={i + 1}
              featured={rest.length % 2 === 1 && i === rest.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
