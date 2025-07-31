# Portfolio Website - Marc Lory

## Overview

This is a personal portfolio website for Marc Lory, an actor specializing in cinema, television, and commercial work. The application is built as a full-stack TypeScript project using React for the frontend and Express.js for the backend, with a focus on showcasing acting experience, photos, and providing contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom shadcn/ui styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development**: Uses tsx for TypeScript execution in development
- **API Structure**: RESTful API with `/api` prefix for all routes
- **Storage**: Currently implemented with in-memory storage (MemStorage class) with interface for easy database migration

### Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Simple user management with users table containing id, username, and password fields
- **Migration**: Drizzle Kit for schema migrations to `./migrations` directory

## Key Components

### Frontend Components
1. **IntroCard**: Landing page with elegant paper-like design and portfolio entry point
2. **PortfolioView**: Main portfolio display with sections for experience, skills, photos, and contact
3. **PhotoGallery**: Interactive photo gallery with modal viewing capability
4. **CVModal**: Protected CV download with access code verification
5. **ContactForm**: Contact form with toast notifications for user feedback

### Backend Components
1. **Storage Interface**: Abstracted storage layer supporting CRUD operations for users
2. **Route Registration**: Centralized route handling in `registerRoutes` function
3. **Middleware**: Request logging, JSON parsing, and error handling
4. **Development Server**: Vite integration for hot module replacement in development

## Data Flow

1. **Client-Side Rendering**: React application served by Vite in development, static files in production
2. **API Communication**: Frontend uses TanStack Query for API calls with automatic error handling
3. **State Management**: Local component state for UI interactions, server state managed by TanStack Query
4. **Asset Management**: Static assets (photos, CV) served through Vite's asset pipeline

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Database driver for Neon PostgreSQL
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing for React
- **date-fns**: Date manipulation utilities

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives (dialogs, buttons, forms, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses Vite dev server with HMR and Express backend
- **Production**: Static file serving with Express handling API routes
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### File Structure
```
├── client/          # React frontend application
├── server/          # Express backend application
├── shared/          # Shared TypeScript definitions and schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessible UI**: Radix UI primitives ensure WCAG compliance
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Hot Reload**: Vite HMR for fast development iteration
- **Asset Optimization**: Vite handles asset bundling and optimization
- **Error Handling**: Comprehensive error boundaries and API error handling

The application is designed for easy deployment to platforms like Replit, with environment-specific configurations and database provisioning handled through environment variables.