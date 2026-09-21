import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Build-time only: renders the page to HTML so the first paint doesn't wait
// for the JS bundle. The browser bundle then hydrates this markup.
export const render = () => renderToString(<App />);
