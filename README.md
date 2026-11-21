# thealxlabs

The TheAlxLabs website: one static page plus a 404 page, with no build step and no JavaScript in the browser. It makes no requests to any domain but its own. A small Cloudflare Function also serves a plain-text version to terminals, so `curl thealxlabs.ca` works.

| File | What it is |
| --- | --- |
| `index.html` | The page |
| `404.html` | Shown for any address that doesn't exist |
| `functions/index.js` | The terminal version: what `curl thealxlabs.ca` gets |
| `.well-known/security.txt` | Tells security researchers how to reach you |
| `styles.css` | All the styles, light and dark |
| `favicon.svg` | Tab icon |
| `apple-touch-icon.png` | Home-screen icon, 180×180 |
| `og.png` | Link-preview image, 1200×630 |
| `fonts/` | Geist and Geist Mono (woff2), with their licence in `OFL.txt` |
| `scripts/make-og.py` | Redraws `og.png` and `apple-touch-icon.png` |
| `_headers` | Cloudflare Pages response headers (security and caching) |

## Domain

The site lives at https://thealxlabs.ca. If that ever changes, update the `canonical`, `og:url` and `og:image` tags in `index.html`. Link previews need the full image URL.

## Preview

```sh
python3 -m http.server 8000
```

Run this from this folder, then open http://localhost:8000. The page uses root paths such as `/styles.css`, so opening `index.html` straight from disk won't load the styles or fonts. Only Cloudflare applies `_headers` and runs the terminal version. To try both locally, use `npx wrangler pages dev .` instead.

## Redraw the images

```sh
python3 -m pip install pillow
python3 scripts/make-og.py
```

The script uses only Pillow and the fonts in `fonts/`. It writes `og.png` and `apple-touch-icon.png` next to `index.html`.

## Deploy to Cloudflare Pages

Choose one of these:

- **Upload with Wrangler.** Run `npx wrangler pages deploy . --project-name thealxlabs` from this folder. Wrangler is only the upload tool; the site itself has no dependencies.
- **Connect Git.** Use framework preset *None*, build command `exit 0` and build output directory `/`.

Dragging the folder into the dashboard no longer works, because it can't deploy the `functions/` folder.

Then add `thealxlabs.ca` under the project's *Custom domains*. Everything in the folder is published, including this README and `scripts/`. That's harmless.

## Terminal version

`functions/index.js` answers `/` for curl, wget, HTTPie and xh with the site as plain text. Browsers still get `index.html`. The text is written in that file, so when you change the projects or links in `index.html`, change them there too.

- **Email:** the address comes from a `CONTACT_EMAIL` variable rather than the code. In the Pages project, open *Settings → Variables and Secrets*, add `CONTACT_EMAIL` for Production, then deploy again. Until it's set, the email line is left out.
- **Plain http:** `curl thealxlabs.ca` uses plain http. For it to work, leave *Always Use HTTPS* off for this zone (*SSL/TLS → Edge Certificates*). The Function still sends browsers to https itself, and the HSTS header keeps them there. If you'd rather keep that setting on, share `curl -L thealxlabs.ca` instead.
- **Cost:** every request to `/` runs the Function, which counts toward Cloudflare's free daily Workers requests. Nothing is logged or stored.

## Privacy

The Content-Security-Policy in `_headers` allows only this site's own styles, fonts and images. Scripts, frames and third-party requests are blocked, so nothing can be added to the page without breaking visibly. To keep the dashboard in line with that:

- Leave Cloudflare Web Analytics and Zaraz off.
- Leave Bot Fight Mode's JavaScript detections off for this zone. Otherwise Cloudflare injects a script that the CSP blocks, and the console fills with errors.
- Email Address Obfuscation is handled already. The footer link is wrapped in `<!--email_off-->`, so Cloudflare doesn't rewrite it or inject its decoder script.

To check, open DevTools → Network and reload: every request should go to your own domain.

## Caching

Fonts and images are served with `Cache-Control: public, max-age=31536000, immutable`, so browsers won't check them again for a year. To change one, give the file a new name and update its reference. HTML and CSS use the Pages default, which revalidates on every visit.

## After deploying

- `curl thealxlabs.ca` should print the door and the projects.
- `curl -sI -A Mozilla https://thealxlabs.ca | grep -i content-security-policy` should print the CSP. This confirms browsers still get the security headers through the Function.
- `curl -I https://thealxlabs.ca/nope` should return `404`, served by `404.html`.
- `curl https://thealxlabs.ca/.well-known/security.txt` should return the file. If it's missing after a dashboard upload, deploy with Wrangler instead. Finder hides the `.well-known` folder; press Cmd+Shift+. to show it.
- Paste the URL into a message on X or Slack to check that `og.png` appears in the preview.

`security.txt` expires on 1 November 2027. Move its `Expires` date forward each year.

## Fonts

Geist and Geist Mono by Vercel, unmodified, version 1.9.2 from the `geist` npm package. Licensed under the SIL Open Font License 1.1; see `fonts/OFL.txt`.
