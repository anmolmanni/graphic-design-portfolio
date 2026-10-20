# Anmol Manni — Graphic Design Portfolio

A simple, static portfolio website. No build tools, no frameworks — just HTML, CSS and a little JavaScript.

**Live site:** https://anmolmanni.github.io/

## What's inside

- `index.html` — the whole site (hero, selected work, services, about, resume snapshot, contact)
- `styles.css` — all styling
- `script.js` — click-to-enlarge lightbox for the portfolio pieces
- `assets/` — the design work, as crisp vector SVGs:
  - `poster-education-fair.svg` — Study in Canada education fair poster
  - `poster-career-campaign.svg` — career campaign poster
  - `pamphlet-digital-marketing.svg` — digital marketing workshop pamphlet
  - `infographic-ca-domain.svg` — "5 steps to get online with a .CA" infographic
  - `social-small-business.svg` — small-business social media graphic
  - `banner-tech-expo.svg` — Canada Tech & Innovation Expo trade-show banner
  - `brand-board.svg` — Maple & Co. brand identity board

## Hosting (GitHub Pages)

This repo is named `anmolmanni.github.io`, so GitHub Pages serves it automatically
from the `main` branch — no settings needed. Any push to `main` updates the live site
within a minute or two.

## Editing

Open `index.html` in any editor, change the text, save, commit and push.
To add a new design piece: drop the image into `assets/`, copy one `<figure class="card">`
block in the Selected Work section, and point it at the new file.
