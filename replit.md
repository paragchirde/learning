# Project Overview

This is a full-stack web application built with TypeScript using a React frontend and Express backend. The application follows a modern architecture with a clear separation between client and server code, using shared types and schemas between both.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a client-server architecture:

1. **Frontend**: React-based single-page application with client-side routing
   - Uses shadcn UI components for the user interface
   - Implements the Wouter library for client-side routing
   - Uses TanStack React Query for data fetching
   - Implements a light/dark theme with ThemeProvider

2. **Backend**: Express server with REST API endpoints
   - Handles API requests with proper route handling
   - Uses a modular approach for route definitions
   - Implements database operations through an abstraction layer

3. **Database**: Drizzle ORM for database operations
   - Currently uses an in-memory storage implementation
   - Schema is defined in shared code for type safety
   - Ready for PostgreSQL integration (configured in drizzle.config.ts)

4. **Build System**: Vite for the frontend, esbuild for the backend
   - Development mode serves frontend through Vite middleware
   - Production build creates static assets and optimized server code

## Key Components

### Frontend Components

1. **Routing System**: Uses Wouter for lightweight client-side routing
   - Defined in the App.tsx component
   - Currently supports home, components showcase, code example, and 404 routes

2. **UI Components**: Extensive set of shadcn UI components
   - Pre-built components based on Radix UI primitives
   - Customized with TailwindCSS

3. **Layout Components**: Consistent page layout with header and footer
   - SiteHeader: Navigation bar with responsive design
   - Footer: Standard footer with links

4. **State Management**:
   - React Query for server state
   - React's useState and context for UI state
   - Theme management using context API

### Backend Components

1. **Express Server**: Main entry point in server/index.ts
   - Middleware configuration
   - Request logging
   - Error handling

2. **API Routes**: Defined in server/routes.ts
   - Currently needs implementation for actual endpoints
   - Structure for REST API endpoints is prepared

3. **Storage Layer**: Abstract storage interface
   - Defined in server/storage.ts
   - Currently uses MemStorage implementation
   - Ready for database integration

4. **Shared Schemas**: Used by both frontend and backend
   - Type definitions for database entities
   - Zod schemas for validation

## Data Flow

1. **API Requests**:
   - Frontend uses React Query to fetch data from the backend
   - Requests are sent to /api/* endpoints
   - Server processes requests and returns JSON responses

2. **Authentication**:
   - User schema is defined but authentication flow needs implementation
   - Structure for user registration and login exists

3. **Database Operations**:
   - Storage interface abstracts database operations
   - Current in-memory implementation provides CRUD operations for users
   - Ready for PostgreSQL integration with Drizzle ORM

## External Dependencies

### Frontend Dependencies

1. **UI Framework**:
   - React with TypeScript
   - shadcn UI components (based on Radix UI)
   - TailwindCSS for styling

2. **Data Fetching**:
   - TanStack React Query

3. **Routing**:
   - Wouter for client-side routing

### Backend Dependencies

1. **Server Framework**:
   - Express.js

2. **Database**:
   - Drizzle ORM (ready for PostgreSQL)
   - @neondatabase/serverless for database connectivity

3. **Validation**:
   - Zod for schema validation
   - drizzle-zod for connecting Drizzle schemas to Zod

## Deployment Strategy

The project is configured for deployment on Replit with:

1. **Development Mode**:
   - `npm run dev` starts both the frontend Vite server and backend Express server

2. **Production Build**:
   - `npm run build` creates optimized frontend assets and bundles the server
   - `npm run start` runs the production server

3. **Database**:
   - PostgreSQL database connection requires a DATABASE_URL environment variable
   - Schema migrations can be run with `npm run db:push`

4. **Replit Configuration**:
   - Configured in .replit file to use the nodejs-20, web, and postgresql-16 modules
   - Exposes port 5000 externally as port 80
   - Includes a workflow for starting the application