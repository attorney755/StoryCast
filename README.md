# StoryCast

An accessible media microsite showcasing audio and video storytelling.

## Project Structure

```
StoryCast/
├── index.html              # Home page
├── about.html              # About & Access page
├── story/
│   └── story.html          # Story detail page (JS-driven, loads ?id=1,2,3)
├── sass/
│   ├── main.scss           # Sass entry point
│   └── partials/
│       ├── _colors.scss    # Color tokens
│       ├── _typography.scss# Type tokens
│       ├── _spacing.scss   # Spacing, radius, shadow tokens
│       ├── _base.scss      # Reset & base styles
│       ├── _components.scss# Nav, footer, cards, buttons
│       └── _pages.scss     # Page-specific styles
├── css/
│   └── main.css            # Compiled CSS (do not edit directly)
├── js/
│   ├── main.js             # Nav toggle, transcript accordion
│   ├── stories.js          # Story data object
│   └── story.js            # Story page dynamic rendering
└── assets/
    ├── images/             # Story images
    ├── audio/              # Audio files
    └── transcripts/        # Transcript .txt files
```

## Running Locally

1. Clone the repo: `git clone https://github.com/attorney755/StoryCast.git`
2. Open `index.html` in any browser — no build step required for viewing.
3. To recompile Sass after edits: `sass --no-source-map --quiet sass/main.scss css/main.css`
4. For watch mode: `sass --watch sass/main.scss css/main.css`

## Accessibility Checklist

- [x] Semantic HTML5 throughout (`<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`, `<figure>`, `<aside>`)
- [x] Skip to main content link on every page
- [x] All images have descriptive `alt` attributes
- [x] WCAG AA color contrast on all text/background pairs
- [x] Visible keyboard focus states (gold outline, 3px)
- [x] ARIA labels on all icon buttons and interactive controls
- [x] `aria-current="page"` on active nav links
- [x] `aria-expanded` on accordion and mobile nav toggles
- [x] `aria-pressed` on captions toggle button
- [x] Transcript available for every story
- [x] `role="region"` on media player with label
- [x] `prefers-reduced-motion` respected in CSS
- [x] Logical heading hierarchy (h1 → h2 → h3) on every page
- [x] Screen reader only `.sr-only` class for hidden labels
