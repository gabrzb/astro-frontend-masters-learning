# Astro Frontend Masters Learning

This repository contains the small-business website I built while following the Frontend Masters Astro course. The project explores common website workflows while combining Astro pages, content collections, API data, and interactive components from multiple UI frameworks.

## What was Built

### Marketing landing page

- Hero section with Astro image handling
- Reusable cards
- Featured products
- Newsletter signup form

### Shop

- Nested layouts
- Product data loaded from an API
- A shopping cart built with Solid
- Add-to-cart buttons built with React
- Shared state between React and Solid islands using Nano Stores

### Blog

- Markdown posts managed through Astro Content Collections
- A validated content schema with custom slugs
- Blog listing and dynamically generated post routes
- An RSS feed endpoint

### Additional pages

- Markdown-based About page
- Custom 404 page

## Astro Features Covered

### Project fundamentals

- Initializing an Astro project
- Running a local development environment
- Creating pages with Astro, Markdown, and HTML
- File-based routing, links, and custom 404 pages

### Components and layouts

- Astro component frontmatter
- Slots and reusable UI components
- Basic and nested layouts

### Data loading

- Using `fetch` in Astro components
- Loading data from APIs and headless content sources
- Creating static API endpoints

### Styling

- Scoped and global component styles
- Astro's `class:list` and `define:vars` directives
- Importing local and package stylesheets
- Using CSS Modules in framework components

### Routing and rendering

- Generating dynamic routes at build time
- Pagination concepts
- Server-side rendering and per-request dynamic routes
- API endpoints in SSR mode

### Content Collections

- Defining collections, loaders, and schemas
- Adding custom slugs
- Listing collection entries
- Generating and rendering full post pages

### Images and interactivity

- Handling local images with Astro assets
- Hydrating framework components with `client:*` directives
- Using React and Solid in the same Astro project
- Sharing state between islands and frameworks with Nano Stores

## Running the Project

Install the dependencies and start the Astro development server:

```sh
npm install
npm run dev
```

Then open the local URL shown in the terminal.