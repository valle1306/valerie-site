Quartz-powered personal site (minimal)

This folder contains a minimal Quartz v4 site scaffold: a few content pages and a placeholder image. It's intended as a starting point to recreate a site similar to https://github.com/eysu35/eysu35.github.io.

How to build and serve locally

1. Install dependencies (from project root):

```powershell
npm install
```

2. Build and serve the docs locally:

```powershell
npm run docs
```

3. Edit files under `content/` and `static/` to customize.

Notes

- This repo uses Quartz v4 as the static site generator. See `quartz.config.ts` for configuration.
- To deploy to GitHub Pages, build to a directory and push to `gh-pages` or use GitHub Actions.

## GitHub Pages deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that will build the site on Node 22 and publish the contents of `public/` to the `gh-pages` branch whenever you push to the `v4` branch. The action uses the built-in `GITHUB_TOKEN` so no additional secrets are required.
