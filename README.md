# Personal Portfolio & Blog Website

A modern, performant portfolio and blog website built with Astro, featuring Docker deployment and production-ready configuration.

## 📋 Project Overview

This is a fully-featured personal website that combines portfolio presentation with blog functionality. Built with Astro for optimal performance, it scores 100/100 on Lighthouse metrics while providing a clean, responsive design.

## ✨ Key Features

- **High Performance**: Astro-based architecture for optimal loading speeds
- **Content Management**: Markdown/MDX support for easy blog post creation
- **SEO Optimized**: Built-in sitemap, RSS feed, and Open Graph support
- **Responsive Design**: Mobile-friendly layout with custom components
- **Production Ready**: Docker containerization with Nginx reverse proxy
- **Social Integration**: Links to Mastodon, Twitter/X, and GitHub
- **TypeScript Support**: Full type safety throughout the codebase

## 🏗️ Technology Stack

- **Framework**: Astro with MDX integration
- **Styling**: Custom CSS with CSS variables
- **Deployment**: Docker multi-stage builds + Nginx
- **Fonts**: Custom Atkinson font with variable weights
- **Content**: Astro Content Collections for blog posts

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Production with Docker
```bash
# Local testing
docker-compose -f docker-compose.local.yml up --build

# Full deployment (with Nginx Proxy Manager)
docker-compose up --build
```

## 🎨 Portfolio Builder Skill

We've included a portfolio builder skill that asks questions and generates a complete, modern portfolio website:

```bash
# First, install the required dependencies
npm install inquirer fs-extra

# Run the portfolio builder
node portfolio-builder.js
```

The builder will ask you questions about:
- Site title and description
- Your personal information
- Social media profiles
- Theme selection
- Sections to include
- Deployment options

Then it will generate a complete Astro-based portfolio website with all necessary files.

## 📁 Project Structure

```
├── src/
│   ├── components/     # Reusable UI components (Header, Footer, etc.)
│   ├── content/        # Blog posts in Markdown/MDX format
│   ├── layouts/        # Page layout templates
│   ├── pages/          # Route definitions
│   └── styles/         # Global CSS styles
├── public/             # Static assets
├── data/               # Nginx proxy and log data
└── docker/             # Deployment configuration
```

## 🔧 Deployment

The project includes two Docker Compose configurations:
- `docker-compose.local.yml`: For local testing on port 3000
- `docker-compose.yml`: Full production setup with Nginx Proxy Manager

## 📄 License

This project is based on the Astro Blog Starter Kit, which itself is inspired by [Bear Blog](https://github.com/HermanMartinus/bearblog/).

---

> **Note**: This is a production-ready template that can be customized for personal or professional use. Replace placeholder content with your own information and adjust styling to match your brand.
