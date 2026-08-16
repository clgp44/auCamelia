# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static marketing site for Au Camélia, an industrial automation consultancy (modelling/trade-off studies, funding dossiers, tender responses, TRL feasibility demos) founded by Christophe Poulain. No build system, no framework, no package.json — plain HTML/CSS/JS served as-is.

## Commands

There is no build, lint, or test tooling in this repo. To preview locally, serve the directory with any static file server, e.g.:

```
python3 -m http.server 8000
```

Then open the relevant `.html` file directly (e.g. `index.html`).

## Structure

- Four top-level pages: `index.html`, `services.html`, `book.html`, `contact.html` (English, canonical). Each is a fully self-contained HTML document (no templating/includes) — shared markup (nav, footer, `<head>` boilerplate) is duplicated across all four files. When editing shared chrome (nav links, footer links, font imports), update all four pages in the same pass.
- `fr/` — a full French translation of the same four pages (`fr/index.html`, `fr/services.html`, `fr/book.html`, `fr/contact.html`), same structure and classes, asset paths adjusted to `../assets/...`. Any content or structural change to an English page should be mirrored in its French counterpart. Each page links to its counterpart via a `.lang-toggle` link ("FR"/"EN") in the nav, and both carry `hreflang` alternate tags in `<head>` plus an entry in `sitemap.xml`.
- `assets/style.css` — the entire design system, structured as CSS custom properties in `:root` (colours, fonts, layout tokens) followed by component sections in the order they appear on the page (nav → hero → section shell → timeline → cards → footer). Read the header comment at the top of the file for the design intent (spec-sheet layout, camellia rose accent, Archivo/Source Serif 4/IBM Plex Mono type system).
- `assets/main.js` — a single small enhancement: reveals the homepage timeline fill animation via `IntersectionObserver` when it scrolls into view, with a no-JS/no-IO/reduced-motion fallback baked in. Not a general script file — don't grow it into an app; if a page needs page-specific behavior, prefer scoping a new small script rather than overloading this one.
- `assets/logo-full.png`, `assets/logo-mark.png` — brand marks used in the hero and nav respectively.

## Conventions

- Every page follows the same skeleton: sticky `.site-nav`, a `.hero` header, a series of `<section class="block">` content blocks, and a shared `<footer>`. New pages should follow this same skeleton and link back into the nav/footer on all pages.
- The active nav link on each page gets `class="btn current"` — set this manually per page (there's no active-route detection).
- Content sections commonly use the `.grid-label` layout (an `<span class="eyebrow">` label column beside the content) — see any `section.block` in `services.html` or `book.html` for the pattern.
- Copy is dense, technical, and specific (real numbers, real standards, real tools/frameworks) — avoid generic marketing language when editing page content.
