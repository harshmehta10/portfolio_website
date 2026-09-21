// Injects the server-rendered page into dist/index.html, so the HTML itself
// carries the content and the JS bundle only has to hydrate it.
import { readFileSync, writeFileSync, rmSync } from "node:fs";

const { render } = await import("../dist-ssr/entry-server.js");

const file = "dist/index.html";
const placeholder = '<div id="root"></div>';
const html = readFileSync(file, "utf8");
if (!html.includes(placeholder)) throw new Error(`${placeholder} not found in ${file}`);

writeFileSync(file, html.replace(placeholder, `<div id="root">${render()}</div>`));
rmSync("dist-ssr", { recursive: true, force: true });
console.log("prerendered dist/index.html");
