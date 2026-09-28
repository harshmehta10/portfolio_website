import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "background", label: "Background" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

const CV = "/HarshMehtaFullstackDev.pdf";

// Floats transparent over the mesh, turns solid white once the page moves.
// Under md the anchors live in a full-screen sheet behind the hamburger.
const Nav = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
    // The bar, not the <nav>, carries the blur: backdrop-filter would make the
    // <nav> the containing block for the fixed sheet below it.
    <nav aria-label="Sections" className="fixed inset-x-0 top-0 z-50">
      <div
        className={`flex h-16 justify-center transition-[background-color,box-shadow] duration-200 ${
          scrolled || open
            ? "bg-canvas/90 shadow-card backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1080px] items-center justify-between gap-x-3 px-4 sm:gap-x-6 sm:px-6">
          <a
            href="#top"
            className="t-heading-sm whitespace-nowrap font-normal text-ink"
          >
            Harsh Mehta
          </a>

          <ul className="hidden items-center gap-8 md:flex">
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
            <a href={CV} download className="btn btn-primary max-md:hidden">
              Download CV{" "}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>

            <button
              type="button"
              className="menu-toggle md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="menu-bar" />
              <span className="menu-bar" />
            </button>
          </div>
        </div>
      </div>

      {/* Always mounted so it can transition both ways; visibility:hidden keeps
          it out of the tab order and the a11y tree while closed. */}
      <div
        id="mobile-menu"
        data-open={open || undefined}
        className="mobile-menu md:hidden"
      >
        <ul>
          {SECTIONS.map(({ id, label }, i) => (
            <li key={id} style={{ "--i": i }}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                aria-current={active === id ? "page" : undefined}
                className={`t-display-lg ${
                  active === id ? "text-link" : "text-ink"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={CV}
          download
          className="btn btn-primary self-start"
          style={{ "--i": SECTIONS.length }}
          onClick={() => setOpen(false)}
        >
          Download CV{" "}
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
