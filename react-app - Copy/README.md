# React Router Multi-Page App

A clean, production-ready React application with client-side routing via React Router v6.

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `*` | 404 Not Found |

## Tech Stack

- **React 18** — UI library
- **React Router v6** — client-side routing (no page reloads)
- **CSS Variables** — consistent theming system
- **Google Fonts** — Syne (display) + DM Sans (body)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Navbar.js / Navbar.css   # Sticky nav with active link highlighting
│   └── Footer.js / Footer.css   # Site footer
├── pages/
│   ├── Home.js / Home.css       # Landing page with hero + features
│   ├── About.js / About.css     # Team, stats, timeline
│   ├── Contact.js / Contact.css # Contact form with success state
│   └── NotFound.js              # 404 fallback
├── App.js                       # BrowserRouter + Routes setup
├── App.css                      # Layout wrapper
├── index.js                     # React entry point
└── index.css                    # Global styles + CSS variables
```

## Deploying

Works with any static host. For GitHub Pages, set `homepage` in `package.json`:

```json
"homepage": "https://<username>.github.io/<repo-name>"
```

Then run:

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

## License

MIT
