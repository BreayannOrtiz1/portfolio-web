# Portfolio Maintenance Guide

This guide explains how to manage and update your portfolio without touching component code.

---

## 1. Adding a New Project

Create a new file in `src/content/projects/` with any name ending in `.yaml`:

```yaml
# src/content/projects/my-new-project.yaml
title: "Project Title"
client: "CLIENT NAME"
description: "One or two sentence summary shown on cards."
longDescription: >
  Full paragraph description shown on the detail page.
  Can span multiple lines.
tags:
  - "LoRaWAN"
  - "ESP32"
  - "Azure"
year: 2026
featured: true          # set to true to show on the homepage
metrics:
  - value: "50"
    label: "Deployed nodes"
  - value: "Real-time"
    label: "Monitoring"
links:
  demo: "https://example.com"    # optional
  repo: "https://github.com/..." # optional
```

The project will appear automatically at `/projects` and at `/projects/<filename-without-extension>`.

To feature it on the homepage, set `featured: true`. The homepage shows the 3 most recent featured projects sorted by `year`.

---

## 2. Adding a New Experience Entry

Create a new file in `src/content/experience/` with any name ending in `.yaml`:

```yaml
# src/content/experience/new-company.yaml
company: "Company Name"
role: "Your Role"
type: "full-time"        # full-time | contract | freelance | academic
startDate: "2025-01-01"
endDate: "2025-12-31"    # omit this line + set current: true for ongoing roles
current: false
location: "City, Country"
description: >
  Brief paragraph describing the role and context.
achievements:
  - "First key achievement or responsibility."
  - "Second achievement."
technologies:
  - "Technology A"
  - "Technology B"
order: 5                 # Lower numbers appear first in the timeline
```

---

## 3. Updating Your Personal Info

Edit `src/config.ts`. All texts, links, and skill categories live here:

| Key | What it controls |
|-----|-----------------|
| `SITE.title` | Browser tab title and SEO |
| `SITE.description` | Meta description |
| `AUTHOR.name` | Your name (used in header, footer, SEO) |
| `AUTHOR.role` | Job title shown in Hero |
| `AUTHOR.bio` | Bio paragraph in Hero section |
| `AUTHOR.photo` | Path to profile photo — place file at `public/profile.jpg` |
| `SOCIAL.linkedin` | LinkedIn URL |
| `SOCIAL.github` | GitHub URL |
| `SOCIAL.email` | `mailto:` link |
| `SKILLS` | Skill categories and items in the grid |
| `UI.*` | Section titles and CTA labels |

---

## 4. Adding Your Profile Photo

1. Place your photo at `public/profile.jpg` (or any format: `.png`, `.webp`)
2. Update `AUTHOR.photo` in `src/config.ts` to match the path: `'/profile.jpg'`
3. The `Hero.astro` component has a placeholder ready to display it once present.

---

## 5. Running the Project Locally

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
# → http://localhost:4321

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Deploying

The project uses a multi-stage Docker build. The production server is at `https://portfolio.greenvibesgroup.com`.

```bash
# Build and deploy via Docker Compose (production)
docker compose up -d --build

# Local Docker test (port 3000)
docker compose -f docker-compose.local.yml up --build
```

The `astro build` step outputs static files to `dist/`, which Nginx serves directly.

---

## 7. Changing the Color Palette

Open `src/styles/global.css`. All design tokens are defined in the `@theme {}` block at the top:

```css
@theme {
  --color-accent:        #00d4aa;   /* main accent color */
  --color-bg-primary:    #0a0a0f;   /* page background */
  --color-text-primary:  #f0f0f5;   /* headings & body */
  /* ... */
}
```

Change `--color-accent` to rebrand the entire site. The color propagates to all buttons, tags, timeline dots, and hover states automatically.

---

## 8. File Map

```
src/
├── config.ts               ← Edit this for personal info & skills
├── content/
│   ├── projects/           ← Add .yaml files to add projects
│   ├── experience/         ← Add .yaml files to add experience entries
│   └── blog/               ← Add .md/.mdx files for blog posts
├── styles/
│   └── global.css          ← Design tokens & base styles
└── components/
    ├── ui/                 ← Tag, Button, SectionHeading (reusable)
    ├── home/               ← Hero, SkillsGrid
    ├── projects/           ← ProjectCard
    └── experience/         ← ExperienceTimeline
```
