// The signature backdrop: organic blurred blobs, not a flat CSS gradient.
// Pale stops sit on the left under the headline so the ink stays legible;
// the deep indigo end sits behind the portrait on the right.
// One hue family (brand indigo), light to deep, left to right. Stops are CSS
// vars so each theme sets its own.
const GradientMesh = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 top-0 h-[78%] overflow-hidden [clip-path:polygon(0_0,100%_0,100%_62%,0_100%)] max-md:h-[62%] max-md:[clip-path:polygon(0_0,100%_0,100%_85%,0_100%)]"
  >
    <svg
      className="mesh-drift h-full w-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMinYMin slice"
    >
      <defs>
        <filter id="mesh-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="70" />
        </filter>
      </defs>
      <rect width="1440" height="800" style={{ fill: "var(--mesh-base)" }} />
      <g filter="url(#mesh-blur)" style={{ opacity: "var(--mesh-glow)" }}>
        <ellipse cx="160" cy="220" rx="460" ry="260" style={{ fill: "var(--mesh-1)" }} />
        <ellipse cx="560" cy="40" rx="380" ry="190" style={{ fill: "var(--mesh-2)" }} />
        <ellipse cx="760" cy="520" rx="420" ry="220" style={{ fill: "var(--mesh-3)" }} />
        <ellipse cx="1120" cy="200" rx="360" ry="260" style={{ fill: "var(--mesh-4)" }} />
        <ellipse cx="1400" cy="80" rx="260" ry="220" style={{ fill: "var(--mesh-5)" }} />
        <ellipse cx="1380" cy="560" rx="320" ry="220" style={{ fill: "var(--mesh-6)" }} />
        <ellipse cx="980" cy="700" rx="280" ry="140" style={{ fill: "var(--mesh-7)" }} />
      </g>
    </svg>
  </div>
);

export default GradientMesh;
