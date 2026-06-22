# StoryCast

An accessible audio and video storytelling microsite built with semantic HTML5, Sass, and vanilla JavaScript.

---

## Project Overview

StoryCast is a microsite designed to showcase audio and video stories with a focus on accessibility, dynamic content loading, and a clean, maintainable codebase. The project leverages modern web technologies to provide a seamless experience for users and developers alike.

---

## Project Structure

```
StoryCast/
├── index.html                  # Home page
├── stories.html                # All stories listing page
├── about.html                  # About & Accessibility page
├── story/
│   └── story.html              # Story detail page (JS-driven via ?id=1–6)
├── sass/
│   ├── main.scss               # Sass entry point
│   └── partials/
│       ├── _colors.scss        # Color tokens
│       ├── _typography.scss    # Font and size tokens
│       ├── _spacing.scss       # Spacing, radius, shadow tokens
│       ├── _base.scss          # Reset and base styles
│       ├── _components.scss    # Nav, footer, cards, buttons, player
│       └── _pages.scss         # Page-specific styles
├── css/
│   └── main.css                # Compiled CSS (do not edit directly)
├── js/
│   └── app.js                  # All JavaScript — story data, rendering, player, filters
└── assets/
    ├── images/                 # Story banner images
    ├── audio/                  # MP3 files (story1.mp3 ... story6.mp3)
    ├── video/                  # MP4 files (story2.mp4, story5.mp4)
    └── transcripts/            # Transcript files (story1.txt ... story6.txt, story2.vtt ... story5.vtt)
```

---

## How to Run Locally

### Option 1: VS Code Live Server (Recommended)

The easiest way to run the project. It starts a local server so all features, including transcripts, audio, and video, work correctly.

1. Open the `StoryCast` folder in VS Code.
2. Install the **Live Server** extension by Ritwick Dey (if not already installed).
3. Right-click `index.html` in the file explorer.
4. Click **Open with Live Server**.
5. The site will open at `http://127.0.0.1:5500`.

### Option 2: Python Local Server

If you have Python installed, open your terminal inside the `StoryCast` folder and run:

```bash
# Python 3
python -m http.server 5500
```

Then open your browser and go to `http://localhost:5500`.

### Option 3: Node.js Local Server

If you have Node.js installed:

```bash
npx serve .
```

Then follow the URL shown in the terminal.

---

## Why You Need a Local Server

Opening HTML files directly from your file system uses the `file://` protocol. Several features will not work under `file://`:


| Feature                  | Why it breaks without a server                                                                       |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| **Transcripts**          | The `fetch()` call that loads `.txt` files is blocked by browser security (CORS policy) on `file://` |
| **Audio/Video playback** | Some browsers block media autoload and seeking on `file://`                                          |
| **Story navigation**     | URL parameters like `?id=1` may not be read correctly on `file://`                                   |


**Always use a local server (Live Server, Python, or Node) when testing this project.**

---

## Editing Styles (Sass)

Never edit `css/main.css` directly. Always edit the Sass files inside `sass/partials/` and recompile.

### Install Sass (one time only)

```bash
npm install -g sass
```

### Compile once

```bash
sass --no-source-map sass/main.scss css/main.css
```

### Watch mode (auto-recompiles on every save)

```bash
sass --watch sass/main.scss css/main.css
```

---

## Adding or Editing Stories

All story data is centralized in `js/app.js` at the top of the file inside the `STORIES` array. The project uses a single `story/story.html` page that dynamically loads content based on the `?id=` URL parameter.

### Why JavaScript Was Used

This project was initially intended to be built with only HTML and CSS. However, to avoid creating individual HTML files for each story, I chose to use JavaScript. This approach allows helped me to dynamically load content, centralize story data, and maintain consistency across the site.

### Story Object Structure

Each story in the `STORIES` array follows this structure:

```javascript
{
  id: 1,
  title: "The Echo of the Forest",
  category: "Nature & Environment",
  type: "Podcast",           // "Podcast" or "Video"
  author: "Elena Rivers",
  date: "October 12, 2023",
  duration: "3:57",
  image: "assets/images/story1.png",
  imageAlt: "Description of image for screen readers",
  description: [
    "First paragraph...",
    "Second paragraph...",
  ]
}
```

### Steps to Add a New Story

1. Add a new object to the `STORIES` array with a unique `id`.
2. Add the corresponding audio or video file to `assets/audio/` or `assets/video/`.
3. Add the transcript to `assets/transcripts/` (`.txt` for display, `.vtt` for video captions).
4. Add the story image to `assets/images/`.

---

## Pages Overview


| Page                  | File               | Description                                  |
| --------------------- | ------------------ | -------------------------------------------- |
| Home                  | `index.html`       | Hero, 3 featured stories, quote banner       |
| All Stories           | `stories.html`     | All 6 stories with category filter           |
| Story Detail          | `story/story.html` | Dynamic story loaded from `?id=1` to `?id=6` |
| About & Accessibility | `about.html`       | Mission statement and accessibility features |


---

## Accessibility Checklist

- Semantic HTML5 throughout (`nav`, `main`, `header`, `footer`, `article`, `section`, `aside`)
- Skip to main content link on every page
- Logical heading hierarchy (h1 → h2 → h3) with no skipped levels
- All images have descriptive `alt` attributes
- WCAG AA color contrast on all text and background combinations
- Full keyboard navigation — all elements reachable by Tab key
- Visible focus states — 3px gold outline on all focusable elements
- `aria-label` on all icon-only buttons and interactive regions
- `aria-current="page"` on active navigation links
- `aria-expanded` on mobile nav toggle and transcript accordion
- `aria-pressed` on the captions toggle button
- `aria-live="polite"` on dynamically loaded story grids
- Full transcripts available for all stories via collapsible section
- HTML5 `<track>` element for video captions (WebVTT)
- `@media (prefers-reduced-motion)` disables all transitions
- `.sr-only` utility class for screen-reader-only labels

---

## Browser Support

Tested and working in:

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Brave (latest)

---

## Technologies Used

- HTML5 (semantic, no frameworks)
- Sass / SCSS (compiled to CSS)
- CSS Grid and Flexbox
- Vanilla JavaScript (ES6+)
- Fetch API (for loading transcripts)
- HTML5 Audio and Video elements with custom UI
- WebVTT for video captions

---

## GitHub Repository

[https://github.com/attorney755/StoryCast](https://github.com/attorney755/StoryCast)

---

*StoryCast — Accessible for everyone. | Attorney Valois Niyigaba | June 2026*
