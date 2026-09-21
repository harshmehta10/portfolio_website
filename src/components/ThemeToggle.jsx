import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

// Sliding switch: the indigo knob moves under whichever icon is live, and both
// icons stay on the track so the other state is always visible.
//
// The page is prerendered at build time, where there is no theme to read. So
// the knob position and icon colours come from CSS keyed on the data-theme
// attribute that index.html sets before first paint - correct on the very
// first frame, no slide on load. State only mirrors it for aria-checked.
const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  // Stored only on an actual click, so untouched visitors keep following the OS.
  const toggle = () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setDark(next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing: applies for this tab only.
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      onClick={toggle}
      className="relative flex shrink-0 items-center gap-1 rounded-full border border-hairline bg-canvas-soft p-1"
    >
      <span
        aria-hidden="true"
        className="absolute left-1 size-7 rounded-full bg-primary shadow-card transition-transform duration-300 ease-out dark:translate-x-8"
      />
      <span className="relative grid size-7 place-items-center text-white transition-colors duration-300 dark:text-ink-mute">
        <Sun size={15} weight="bold" />
      </span>
      <span className="relative grid size-7 place-items-center text-ink-mute transition-colors duration-300 dark:text-white">
        <Moon size={15} weight="bold" />
      </span>
    </button>
  );
};

export default ThemeToggle;
