import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "background", label: "Background" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

// Floats transparent over the mesh, turns solid white once the page moves.
const Nav = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Whichever sections overlap a band across the upper third, the lowest wins.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const seen = new Set();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) seen.add(entry.target.id);
          else seen.delete(entry.target.id);
        }
        setActive(SECTIONS.filter(({ id }) => seen.has(id)).pop()?.id ?? "");
      },
      { rootMargin: "-25% 0px -70% 0px" },
    );

    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200 ${
        scrolled
          ? "bg-canvas/90 shadow-card backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-x-3 px-4 max-md:py-3 sm:gap-x-6 sm:px-6 md:h-16">
        <a
          href="#top"
          className="t-heading-sm whitespace-nowrap font-normal text-ink"
        >
          Harsh Mehta
        </a>

        {/* Too narrow to sit inline on a phone, so the anchors drop to their own
            row under the logo and scroll sideways if they ever outgrow it. */}
        <ul className="order-last flex w-full items-center gap-6 overflow-x-auto pt-3 max-md:-mb-1 max-md:pb-1 md:order-none md:w-auto md:gap-8 md:overflow-visible md:pt-0">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "page" : undefined}
                className={`t-body-md py-2 transition-colors ${
                  active === id
                    ? "font-normal text-link"
                    : "text-ink-secondary hover:text-ink"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href="/public//HarshMehtaFullstackDev.pdf"
            download="HarshMehtaFullstackDev.pdf"
            className="btn btn-primary"
          > 
            Download CV{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
