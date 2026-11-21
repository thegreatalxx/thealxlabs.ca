// `curl thealxlabs.ca` gets the site as plain text; browsers get index.html.
// This is a Cloudflare Pages Function for "/" only. Every other path is served
// straight from the static files. If you change the projects or links in
// index.html, change them here too.
//
// The contact email comes from the CONTACT_EMAIL variable in the Pages
// project's settings. If it isn't set, that line is left out.

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
  ["01", "Kept", "pre-launch", "Private AI for your business, running on a Mac you own.", "https://kept.computer"],
  ["02", "Dev tools", "ongoing", "Semantic search and AI tools for the terminal.", "https://github.com/thegreatalxx"],
];

const LINKS = [
  "https://github.com/thegreatalxx",
  "https://x.com/thealxlabs",
  "https://instagram.com/thealxlabs",
];

// Statuses line up with the end of the longest project line.
const WIDTH = 4 + Math.max(...PROJECTS.map((project) => project[3].length));

function text(email) {
  return [
    "",
    ...DOOR,
    "",
    "An independent lab in Toronto building",
    "native, private, open-source tools.",
    "",
    ...PROJECTS.flatMap(([number, name, status, line, url]) => [
      `${number}  ${name}`.padEnd(WIDTH - status.length) + status,
      `    ${line}`,
      `    ${url}`,
      "",
    ]),
    ...(email ? [email] : []),
    ...LINKS,
    "",
    "© 2026 TheAlxLabs",
    "",
  ].map((line) => (line ? `  ${line}` : "")).join("\n") + "\n";
}

export async function onRequest({ request, env }) {
  if (TERMINAL.test(request.headers.get("User-Agent") ?? "")) {
    return new Response(request.method === "HEAD" ? null : text(env.CONTACT_EMAIL), {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Vary": "User-Agent",
        "X-Content-Type-Options": "nosniff",
      },
    });
  }

  // Terminals may use plain http; browsers are always sent to https.
  const url = new URL(request.url);
  if (url.protocol === "http:") {
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  // env.ASSETS.fetch applies the _headers rules (the CSP and the rest).
  // Responses a Function builds itself don't get them.
  const page = await env.ASSETS.fetch(request);
  const response = new Response(page.body, page);
  response.headers.append("Vary", "User-Agent");
  return response;
}
