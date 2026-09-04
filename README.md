# MA Thesis Pitch — Architectural Mnemonics: Nostalgia in Digital Space

A single, self-contained static site (no build step, no dependencies) used as a living pitch/production hub for the thesis. Deployed via GitHub Pages.

## Structure

```
index.html      — page structure, four sections (see below)
css/style.css   — all styling
js/content.js   — ALL editable content lives here as a plain JS object (SITE_CONTENT)
js/app.js       — renders content.js into the page, and drives "Edit mode"
```

`index.html` has no hardcoded copy — everything you see is read from `js/content.js` at load time. To change content permanently, edit `js/content.js` directly (it's commented field-by-field) and commit.

## Sections

1. **Thesis Question** — theoretical question + outline + short references, practical one-liner + outline + short references, and a theory/practice balance bar.
2. **Context & Literature** — why-it-matters text, and an expandable literature list.
3. **Practical Part** — treated as a real project pitch: title, one-liner, hook, paragraph, genre, Steam-style tags, audience/impact/researcher-value, a "copy prompt for AI-assisted GDD drafting" block, and embeddable playable prototypes (itch.io iframe, a local HTML build, or a plain link).
4. **Timeline** — a 4-month phase plan, each phase optionally tagged with which section(s) it develops.

## Editing content

Two ways:

**Directly (recommended for anything permanent):** open `js/content.js` and edit the `SITE_CONTENT` object. It's plain, commented data — no HTML required. Commit and push as usual.

**In the browser ("Edit mode"):** click the "✎ Edit mode" button (top right) on the live site or when opening `index.html` locally. This makes text, lists, tags, literature entries, prototypes and the timeline directly editable in place, with add/remove controls. Nothing here is saved automatically or shared with anyone else viewing the page — it only lives in your browser tab. When you're happy with your changes, click **"⭳ Export content.js"** in the footer: it downloads an updated `content.js` file. Overwrite `js/content.js` in the repo with the downloaded file and commit/push to make the changes real.

## Playable prototypes (Section 3)

In `content.js` → `prototypes[]`, each entry is:

```js
{ title: "...", type: "itch" | "html" | "link" | "placeholder", url: "...", note: "..." }
```

- `itch` — embeds an itch.io game via iframe. Use the embed URL itch.io gives you for the project (Edit game → Embed options).
- `html` — embeds a local playable build, e.g. `prototypes/lens-room/index.html`. Drop the build's folder into the repo (e.g. under a `prototypes/` folder) and point `url` at its `index.html`.
- `link` — just a link to an external page (e.g. itch.io project page) instead of an embed.
- `placeholder` — shows the `note` text instead of a build, for prototypes that don't exist yet.

## Deploying with GitHub Pages

This repo is already connected to `https://github.com/jachymd/ma.thesis.git` on branch `main`. To publish:

1. Commit and push these files to `main`.
2. On GitHub: repo → **Settings → Pages** → under "Build and deployment", set **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)** → Save.
3. GitHub will publish at `https://jachymd.github.io/ma.thesis/` (may take a minute after the first push).

No build step is needed — it's plain HTML/CSS/JS.

## Notes

- Everything is dark-themed and responsive; no external fonts or scripts are loaded, so it also works fully offline by opening `index.html` directly in a browser.
- The theory/practice balance bar (Section 1) reads `balance.theoryPercent` from `content.js` (clamped 20–80) — edit that one number to reflect wherever the split actually lands as the project develops.
- The current thesis question, literature list, and practical concept in `content.js` are a working draft (see `meta.status` at the top of the file) — replace freely as the direction firms up.
