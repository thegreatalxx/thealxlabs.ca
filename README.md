# thealxlabs

The TheAlxLabs website: one static page plus a 404 page, with no build step and no JavaScript in the browser. It makes no requests to any domain but its own. A small piece of Vercel middleware also serves a plain-text version to terminals, so `curl -L thealxlabs.ca` works.

| File | What it is |
| --- | --- |
| `index.html` | The page |
| `404.html` | Shown for any address that doesn't exist |
| `middleware.ts` | The terminal version: what `curl -L thealxlabs.ca` gets |
| `.well-known/security.txt` | Tells security researchers how to reach you |
| `styles.css` | All the styles, light and dark |
| `favicon.svg` | Tab icon |
| `apple-touch-icon.png` | Home-screen icon, 180×180 |
| `og.png` | Link-preview image, 1200×630 |
| `fonts/` | Geist and Geist Mono (woff2), with their licence in `OFL.txt` |
| `scripts/make-og.py` | Redraws `og.png` and `apple-touch-icon.png` |
| `vercel.json` | Vercel settings: no build step, security headers and caching |

## Domain

The site lives at https://thealxlabs.ca. If that ever changes, update the `canonical`, `og:url` and `og:image` tags in `index.html`. Link previews need the full image URL.

## Preview

```sh
python3 -m http.server 8000
```

Run this from this folder, then open http://localhost:8000. The page uses root paths such as `/styles.css`, so opening `index.html` straight from disk won't load the styles or fonts. Only Vercel applies `vercel.json` and runs the terminal version. To try both locally, use `npx vercel dev` instead.

## Redraw the images

```sh
python3 -m pip install pillow
python3 scripts/make-og.py
```

The script uses only Pillow and the fonts in `fonts/`. It writes `og.png` and `apple-touch-icon.png` next to `index.html`.

## Deploy

This repo is connected to Vercel. Pushing a branch makes a preview deployment, and merging into `main` deploys https://thealxlabs.ca. `vercel.json` sets the project up as a plain static site (framework *Other*, no install, no build), so nothing needs changing in the dashboard. To deploy from this folder instead, run `npx vercel --prod`.

Everything in the folder is published, including this README and `scripts/`. That's harmless.

## Terminal version

`middleware.ts` answers `/` for curl, wget, HTTPie and xh with the site as plain text. Browsers still get `index.html`. The text is written in that file, so when you change the projects or links in `index.html`, change them there too.

- **Email:** the address comes from a `CONTACT_EMAIL` environment variable rather than the code. In the Vercel project, open *Settings → Environment Variables*, add `CONTACT_EMAIL` for Production, then redeploy. Until it's set, the email line is left out.
- **The `-L`:** Vercel always redirects plain http to https, so share `curl -L thealxlabs.ca` or `curl https://thealxlabs.ca`. Without `-L`, curl prints Vercel's redirect instead of the site.
- **Cost:** every request to `/` runs the middleware, which counts toward Vercel's included middleware invocations. Nothing is logged or stored.

## Privacy

The Content-Security-Policy in `vercel.json` allows only this site's own styles, fonts and images. Scripts, frames and third-party requests are blocked, so nothing can be added to the page without breaking visibly. To keep the dashboard in line with that:

- Leave Vercel Web Analytics and Speed Insights off. Both add a script that the CSP would block.
- Preview deployments show the Vercel Toolbar, which the CSP also blocks, so previews log console errors. Production doesn't have it, and you can turn it off in the project settings.

To check, open DevTools → Network and reload: every request should go to your own domain.

## Caching

Fonts and images are served with `Cache-Control: public, max-age=31536000, immutable`, so browsers won't check them again for a year. To change one, give the file a new name and update its reference. HTML and CSS use Vercel's default, which revalidates on every visit.

## After deploying

- `curl -L thealxlabs.ca` should print the door and the projects.
- `curl -sI -A Mozilla https://thealxlabs.ca | grep -i content-security-policy` should print the CSP.
- `curl -I https://thealxlabs.ca/nope` should return `404`, served by `404.html`.
- `curl https://thealxlabs.ca/.well-known/security.txt` should return the file. Finder hides the `.well-known` folder; press Cmd+Shift+. to show it.
- Paste the URL into a message on X or Slack to check that `og.png` appears in the preview.

`security.txt` expires on 1 November 2027. Move its `Expires` date forward each year.

## Fonts

Geist and Geist Mono by Vercel, unmodified, version 1.9.2 from the `geist` npm package. Licensed under the SIL Open Font License 1.1; see `fonts/OFL.txt`.
