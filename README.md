# PulseOps Realtime Dashboard

Static GitHub Pages-ready SaaS analytics dashboard. It has no backend dependency and uses only HTML, CSS, and JavaScript.

## Features

- Metric cards with loading skeletons
- Interactive canvas trend chart with hover tooltip
- Date range, channel, and search filters
- Account performance table
- Empty state for no matching filters
- Responsive sidebar and mobile layout
- CSV export from the current filtered view

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static file server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy on GitHub Pages

Commit these files to a repository and enable GitHub Pages from the repository settings. The `.nojekyll` file is included so GitHub Pages serves the static assets as-is.
