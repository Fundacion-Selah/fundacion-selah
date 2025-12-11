# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for Fundación Selah, a Colombian non-profit foundation. The site showcases the foundation's social projects and provides information about donation opportunities and DIAN (Colombian tax authority) compliance reports.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

Development server runs at http://localhost:3000

## Architecture

### Next.js App Router Structure

This project uses the Next.js 15 App Router (not Pages Router). All routes are defined in the `/app` directory:

- `/app/page.tsx` - Home page with foundation projects
- `/app/reportes-dian/page.tsx` - DIAN compliance reports page
- `/app/layout.tsx` - Root layout with Header/Footer

### Component Architecture

Components follow Atomic Design pattern:

- **Atoms** (`/components/atoms/`) - Basic UI elements (Button, ListItemDian)
- **Molecules** (`/components/molecules/`) - Composite components (Hero, Navbar, ProjectItem, VideoBanner, Modal, ReactPortal, ListDian)
- **Organisms** (`/components/organisms/`) - Complex layout components (Header, Footer)

Each component directory includes an `index.ts` for clean exports. Import components from the atomic level:

```typescript
import { Header, Footer } from "@/components/organisms";
import { ProjectItem } from "@/components/molecules";
```

### Path Aliases

The project uses `@/*` path alias configured in `tsconfig.json` to reference files from the root directory.

### Styling

- **Tailwind CSS** for utility-first styling
- Custom color palette defined in `tailwind.config.js`:
  - `tangerine` / `sandy-brown` - Orange/yellow brand colors
  - `polynesian-blue` / `original-blue` - Blue brand colors
  - `ghost-white` - Background color
  - `cool-gray` - Secondary gray
- Custom gradient utilities: `bg-gradient-yellow`, `bg-gradient-blue`, `bg-gradient-black`
- Custom button classes: `.btn-primary`, `.btn-secondary` (defined in `globals.css`)
- Font configuration in `/app/fonts/index.ts`:
  - Roboto (sans-serif) - Primary font
  - Source Serif 4 (serif) - Headings and emphasis

### Key Features

**DIAN Reports System**: The `/reportes-dian` route displays compliance documents organized by year. Documents are defined in `/app/reportes-dian/dianDocuments.ts` as a structured object with years as keys. To add new years or documents, update this file.

**Project Pages**: The home page displays foundation projects with detailed information cards. Each project uses the `ProjectItem` molecule component.

### Language

All content is in Spanish (`lang="es"` set in layout.tsx). Keep all user-facing text in Spanish.

### Deployment

This site is designed for deployment on Vercel (referenced in README). The build process uses standard Next.js build commands.
