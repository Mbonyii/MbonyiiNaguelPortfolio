# Terminal Portfolio

## Overview

An interactive terminal-style developer portfolio built as a single-page web application. The project simulates a Unix/Linux command-line interface where users can explore portfolio content by typing commands. Built with React, TypeScript, Express, and styled with Tailwind CSS using shadcn/ui components. Features a dark-mode terminal aesthetic with authentic CLI interactions including command history, auto-completion, and dynamic content rendering.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management
- Tailwind CSS with shadcn/ui component library for styling

**Design System**
- Terminal-inspired UI with monospace fonts (JetBrains Mono, Fira Code)
- Dark mode color palette with terminal green accents (HSL-based color system)
- Responsive layout system using Tailwind spacing primitives
- Component library based on Radix UI primitives with custom styling

**State Management**
- Command history stored in local component state
- Portfolio data fetched via React Query with infinite stale time
- No global state management - relies on React Query cache

**Key Components**
- `Terminal.tsx`: Main interactive terminal interface with command input/output
- `TerminalInput.tsx`: Command input with prompt display and cursor animation
- `TerminalOutput.tsx`: Renders command results with fade-in animations
- `WelcomeMessage.tsx`: Initial greeting with 3D card component
- `CommandOutputs.tsx`: Template functions for different command responses
- `Card3D.tsx`: Interactive 3D card with mouse-tracking tilt effects

### Backend Architecture

**Technology Stack**
- Express.js server with TypeScript
- In-memory data storage (MemStorage class)
- Vite middleware for development with HMR support

**API Design**
- Single REST endpoint: `GET /api/portfolio` returns complete portfolio data
- JSON response with structured portfolio sections (about, projects, skills, experience, education, certifications, leadership)
- Currently uses in-memory storage with placeholder data

**Data Models (Zod Schemas)**
- `portfolioDataSchema`: Root schema containing all portfolio sections
- Individual schemas for: projects, skills, experience, education, certifications, leadership, contact
- Type-safe data validation and TypeScript type inference via Drizzle-Zod integration

**Server Configuration**
- Development: Vite middleware with HMR
- Production: Static file serving from dist/public
- Request/response logging middleware
- Error handling with status code mapping

### Database Design

**Current State**
- In-memory storage via `MemStorage` class
- Drizzle ORM configured but schema not yet implemented
- Configuration points to PostgreSQL via `DATABASE_URL` environment variable

**Schema Structure (Defined but not implemented)**
- Prepared for Neon Serverless PostgreSQL
- Drizzle Kit configured for schema migrations in `./migrations` directory
- Schema definitions in `shared/schema.ts` using Zod (ready for database sync)

**Future Database Integration**
- Portfolio data models ready for persistence
- Drizzle ORM setup for type-safe queries
- Migration system configured for schema evolution

### Build & Deployment

**Development Workflow**
- `npm run dev`: Starts Express server with Vite middleware on port 5000
- Hot Module Replacement for instant frontend updates
- TypeScript type checking via `npm run check`

**Production Build**
- Frontend: Vite builds React app to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js` as ESM
- Single-file server bundle with external packages

**Path Aliases**
- `@/*` → `./client/src/*` (frontend components/utils)
- `@shared/*` → `./shared/*` (shared types/schemas)
- `@assets/*` → `./attached_assets/*` (static assets)

## External Dependencies

### UI Component Libraries
- **shadcn/ui**: Pre-built accessible components based on Radix UI primitives
- **Radix UI**: Headless UI primitives (dialogs, dropdowns, popovers, etc.)
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel functionality
- **lucide-react**: Icon library

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **tailwindcss-animate**: Animation utilities
- **clsx/tailwind-merge**: Conditional className utilities

### Data & Forms
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Zod integration for forms
- **date-fns**: Date formatting and manipulation

### Database & ORM
- **Drizzle ORM**: Type-safe database queries
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-zod**: Zod schema generation from Drizzle schemas
- **connect-pg-simple**: PostgreSQL session store (configured but not yet used)

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Static type checking
- **esbuild**: Fast JavaScript bundler for production
- **tsx**: TypeScript execution for development
- **@replit/vite-plugin-***: Replit-specific development enhancements (error overlay, cartographer, dev banner)

### State Management
- **@tanstack/react-query**: Server state management with caching
- **wouter**: Lightweight router (~ 1.5KB)

### Fonts
- **Google Fonts**: JetBrains Mono and Fira Code (monospace fonts for terminal aesthetic)