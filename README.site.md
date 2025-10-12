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
