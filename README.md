# Portfolio Starter

A modular portfolio starter built with React, Handlebars, and Vite. Each page uses the same shared header template, so you can update the nav in one place and have it flow across the whole site.

## What to customize

- Edit the shared content in `src/data.js`.
- Update the header template in `src/templates.js`.
- Change page rendering logic in `src/main.js`.
- Adjust the visual design in `styles.css`.

## Files

- `index.html`, `projects.html`, `skills.html`, `about.html`, and `contact.html` are the page entry points.
- `src/main.js` renders each page with React.
- `src/templates.js` renders the shared navigation with Handlebars.
- `src/data.js` holds the page content.
- `styles.css` controls the shared visual system.
- `vite.config.js` defines the multi-page build inputs.

## How to use

- Run `npm install` once.
- Run `npm run dev` for local development.
- Run `npm run build` to create the production output in `dist/`.

## Adding a new page

1. Copy one of the existing HTML entry files.
2. Set the new page name in `body data-page="..."`.
3. Add the new page to `navItems` in `src/data.js`.
4. Add the page content and render branch in `src/main.js`.
