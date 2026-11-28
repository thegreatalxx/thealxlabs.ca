// `curl -L thealxlabs.ca` gets the site as plain text; browsers get index.html.
// This is Vercel Routing Middleware, run for "/" only. Every other path is
// served straight from the static files. If you change the words, projects or
// links in index.html, change them here too.

export const config = { matcher: "/" };

const TERMINAL = /^(curl|wget|httpie|xh)\//i;

// The door: its exact SVG path, rasterised at 18 columns, two pixels per character.
const DOOR = [
  "    ▄▄██████▄▄",
  "  ▄████████████▄",
  " ████████████████",
  "██████████████████",
  "██████████████████",
  "██████████████████",
  "███████    ███████",
  "███████    ███████",
  "███████    ███████",
  "███████    ███████",
];

const PROJECTS = [
  ["01", "Kept", "pre-launch", "Cited answers from your team’s docs, on a Mac you own.", "https://kept.computer"],
  ["02", "Dev tools", "ongoing", "Semantic search and AI tools for the terminal.", "https://github.com/thegreatalxx"],
];

const LINKS = [
  "alex@thealxlabs.ca",
  "https://github.com/thegreatalxx",
  "https://x.com/thealxlabs",
  "https://instagram.com/thealxlabs",
];

// Statuses line up with the end of the longest project line.
const WIDTH = 4 + Math.max(...PROJECTS.map((project) => project[3].length));

function text() {
  return [
    "",
    ...DOOR,
    "",
    "TheAlxLabs is an independent lab in Toronto",
    "building native, private, open-source tools.",
    "",
    ...PROJECTS.flatMap(([number, name, status, line, url]) => [
      `${number}  ${name}`.padEnd(WIDTH - status.length) + status,
      `    ${line}`,
      `    ${url}`,
      "",
    ]),
    ...LINKS,
    "",
    "© TheAlxLabs",
    "",
  ].map((line) => (line ? `  ${line}` : "")).join("\n") + "\n";
}

export default function middleware(request: Request) {
  // Browsers get nothing here, so the request carries on to index.html.
  if (!TERMINAL.test(request.headers.get("User-Agent") ?? "")) return;

  return new Response(request.method === "HEAD" ? null : text(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Vary": "User-Agent",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
