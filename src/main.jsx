import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import './index.css'
import App from './App.jsx'

// Inertial smooth scroll on wheel/trackpad. It drives the page's native scroll
// position, so sticky/fixed elements and the CSS scroll-timeline reveals keep
// working. Touch keeps native momentum. Skipped entirely for reduced motion.
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  new Lenis({
    autoRaf: true,
    lerp: 0.1,
    anchors: true, // honours each section's scroll-margin-top, which clears the nav
  })
}

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// The production build ships prerendered HTML (scripts/prerender.mjs), so
// React adopts it instead of re-rendering. The dev server's root is empty.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
