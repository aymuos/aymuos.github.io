# Soumya Mukherjee — Portfolio

A React, Vite, HeroUI, Tailwind CSS, Framer Motion, and Lucide portfolio that builds to a static site for GitHub Pages.

## Run locally

```bash
cd my-portfolio
npm ci
npm run dev
```

## Customize the portfolio

- Update project descriptions, skills, timeline entries, and profile links in [`my-portfolio/src/data/portfolio.js`](my-portfolio/src/data/portfolio.js).
- Update the name, biography, and contact details in [`my-portfolio/src/pages/About.jsx`](my-portfolio/src/pages/About.jsx) and [`my-portfolio/src/pages/Home.jsx`](my-portfolio/src/pages/Home.jsx).
- Set your LinkedIn, Google Scholar, and email destinations in `profileLinks` in `my-portfolio/src/data/portfolio.js`.

## GitHub Pages deployment

This repository is named `aymuos.github.io`, so it is a GitHub Pages **user site** served from the domain root. The app lives in `my-portfolio/`, but its generated assets must still use `/` as their base path.

1. In `my-portfolio/vite.config.js`, keep `base: '/'` for this user-site repository. For a project site such as `username.github.io/repository/`, set `base: '/repository/'` instead.
2. The workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) installs dependencies, runs lint and the production build, then publishes `my-portfolio/dist` on pushes to `main` or when manually dispatched.
3. On GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Push to `main`, or run **Actions → Deploy portfolio to GitHub Pages → Run workflow**. The first deployment may take a few minutes; subsequent pushes publish automatically.
5. To preview the same static build locally, run `cd my-portfolio && npm run build && npm run preview`.

The site uses `HashRouter`, so the home, projects, experience, and about views work on static hosting without server-side route rewrites.
