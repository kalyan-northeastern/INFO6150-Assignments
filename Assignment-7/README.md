# Assignment 7 — Two-Page Website (CSS Grid, Flexbox, SASS/SCSS)

This project implements a two-page website for "Artisan Coffee Roasters" demonstrating CSS Grid, Flexbox, and advanced SASS/SCSS features.

## Run locally

1. Install dependencies (requires Node 16+):

```bash
npm install
```

2. Development (watch SCSS):

```bash
npm run dev
```

3. Build once:

```bash
npm run build
```

Open `public/index.html` in your browser.

## Structure

- `public/` — static HTML and compiled CSS
  - `index.html` — Home
  - `brew-guide.html` — Brew Guide
  - `css/main.css` — compiled from `scss/main.scss`
- `scss/` — SASS source
  - `base/` — reset, typography
  - `layout/` — container, header, footer
  - `components/` — buttons, cards
  - `pages/` — page-specific styles
  - `utilities/` — variables, mixins, functions, placeholders, forwards

## Implemented SASS/SCSS features

- Variables: color palette, spacing, fonts (`utilities/_colors.scss`)
- CSS Custom Properties: `:root` in `scss/main.scss` (e.g., `--brand`, `--surface`)
- Nesting: across components (e.g., `.card img` in `components/_cards.scss`)
- Interpolation: utility spacing classes `.m-#{$name}`, `.p-#{$name}` in `main.scss`
- Placeholder Selectors: `%card`, `%flex-center` in `utilities/_placeholders.scss` and `@extend` usage
- Mixins: `container`, `button-base`, `grid`, `mq`, `card-shadow` in `utilities/_mixins.scss`
- Functions: `rhythm`, `color`, `contrast-color`, `clamp-fluid` in `utilities/_functions.scss`
- Additional SASS features:
  - Maps: `$palette`, `$space-scale`, `$font-stacks` in `utilities/_colors.scss`
  - Loops: `@each` over `$space-scale` in `main.scss`
  - Module system: `@use`, `@forward` across modules (`main.scss`, `utilities/_index.scss`)
  - Conditional logic: `if()` used in `contrast-color()` function

## CSS Layout requirements

- CSS Grid (at least two):
  - `.hero-grid` on Home (`pages/_home.scss`)
  - `.grid-cards` product grid (`components/_cards.scss`)
  - `.methods-grid` recipe grid (`pages/_brew.scss`) — additional
  - `.footer-grid` (`layout/_footer.scss`) — additional
- Flexbox (at least two):
  - `.header-inner` navigation bar (`layout/_header.scss`)
  - `.button-row` buttons (`components/_buttons.scss`)
  - `.benefits-row` feature row (`pages/_home.scss`) — additional
  - `.cta-row` call-to-action row (`pages/_brew.scss`) — additional

## Notes

- Fonts loaded via Google Fonts.
- Images use Unsplash placeholders and are hotlinked.

## Checklist (mapping to assignment)

- [x] Two related pages in one domain (not a portfolio)
- [x] At least two CSS Grid layouts
- [x] At least two Flexbox layouts
- [x] SASS variables and CSS custom properties
- [x] Nesting, interpolation, placeholders, mixins, functions
- [x] 3–4 additional SASS features (maps, loops, module system, conditionals)
- [x] Organized SCSS in modular folders
- [x] README with setup and feature explanations

