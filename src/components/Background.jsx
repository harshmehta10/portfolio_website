import mediaclock from "../assets/mediaclock.webp";
import unitedlogo from "../assets/unitedlexlogo.svg";
import techxerrologo from "../assets/techxerro.svg";
import ipu from "../assets/ipu-logo.webp";
import ignou from "../assets/IGNOU-Logo.webp";
import SectionHeading from "./SectionHeading";
import EntryList from "./EntryList";

// Work and education were two consecutive sections rendering the same list in
// the same box, which read as one section repeated. They are two columns of one
// section now. Both anchor IDs stay put so the nav and any existing links to
// #work / #education still land in the right place.
const work = [
  {
    logo: mediaclock,
    alt: "MediaClock logo",
    wordmark: true,
    title: "Fullstack Developer",
    subtitle: "MediaClock",
    meta: "Sept 2025 - present",
  },
  {
    logo: unitedlogo,
    alt: "UnitedLex logo",
    title: "Incident Response",
    subtitle: "UnitedLex",
    meta: "May 2025 - Jul 2025",
  },
  {
    logo: techxerrologo,
    alt: "Techxerro logo",
    title: "Full Stack Developer Intern",
    subtitle: "Techxerro",
    meta: "Dec 2024 - Mar 2025",
  },
];

const education = [
  {
    logo: ignou,
    alt: "IGNOU logo",
    title: "Indira Gandhi National Open University",
    subtitle: "MCA",
    meta: "Pursuing",
  },
  {
    logo: ipu,
    alt: "GGSIPU logo",
    title: "Guru Gobind Singh Indraprastha University",
    subtitle: "BCA",
    meta: "2021 - 2024",
  },
];

const Background = () => (
  <section className="band bg-canvas-soft">
    <div className="reveal mx-auto max-w-[1080px] space-y-12">
      <SectionHeading title="Background" />

      <div className="grid gap-10 md:grid-cols-2 md:gap-6">
        <div id="work" className="scroll-anchor space-y-4">
          <h3 className="t-micro-cap text-link">Experience</h3>
          <EntryList entries={work} />
        </div>

        <div id="education" className="scroll-anchor space-y-4">
          <h3 className="t-micro-cap text-link">Education</h3>
          <EntryList entries={education} />
        </div>
      </div>
    </div>
  </section>
);

export default Background;
