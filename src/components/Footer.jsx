import github from "../assets/github.svg";
import linkdin from "../assets/linkdin.svg";
import twitter from "../assets/twitter.svg";

const socials = [
  { href: "https://github.com/harshmehta10", icon: github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/harshmehta02/",
    icon: linkdin,
    label: "LinkedIn",
  },
  { href: "https://x.com/Harshmehtaa10", icon: twitter, label: "Twitter" },
];

// Contact lives in the dark featured card; the light footer row closes the page.
const Footer = () => (
  <footer className="bg-canvas px-6 pt-24 pb-10 max-md:pt-16">
    <div className="mx-auto max-w-[1080px]">
      <div className="reveal relative overflow-hidden rounded-lg bg-brand-dark p-8 text-white sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-primary opacity-50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 right-40 size-64 rounded-full bg-ruby opacity-30 blur-3xl"
        />

        <div className="relative grid items-end gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="t-display-xl">Let's build something together</p>
            <p className="t-body-lg max-w-[42ch] text-white/75">
              I'm open to frontend roles and freelance work. The fastest way to
              reach me is email.
            </p>
          </div>

          <a
            href="mailto:harshmehta.srm2002@gmail.com"
            className="t-heading-md group inline-flex items-center gap-2 break-all text-[#b9b9f9] transition-colors hover:text-white lg:justify-self-end"
          >
            harshmehta.srm2002@gmail.com
            <span className="arrow transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-10">
        <p className="t-caption tnum text-ink-mute">
          © {new Date().getFullYear()} Harsh Mehta
        </p>

        <ul className="flex items-center">
          {socials.map(({ href, icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center opacity-60 transition-opacity hover:opacity-100"
              >
                <img src={icon} alt="" width="18" height="18" className="size-[18px] dark:invert" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
