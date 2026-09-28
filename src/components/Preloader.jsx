import { useState } from "react";

// Stepped curtain over the first paint - the skiper-ui "stairs preloader"
// shape, rebuilt in CSS (their source is Pro-only and pulls in framer-motion).
// Prerendered into the HTML, so it covers the page before the bundle lands;
// the keyframes end off-screen, so it clears even if JS never runs.
const COLUMNS = 5;

const Preloader = () => {
  const [done, setDone] = useState(false);
  if (done) return null;

  return (
    <div className="preloader" aria-hidden="true">
      {Array.from({ length: COLUMNS }, (_, i) => (
        <span
          key={i}
          className="preloader-step"
          style={{ "--i": i }}
          // Last column lifts last; drop the whole overlay once it's gone.
          onAnimationEnd={i === COLUMNS - 1 ? () => setDone(true) : undefined}
        />
      ))}
      <span className="preloader-word">Harsh Mehta</span>
    </div>
  );
};

export default Preloader;
