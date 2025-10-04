# Ashwin Systems - Computer & CCTV Repair Services

## Overview
A professional computer repair and CCTV services website built with React, TypeScript, Vite, and Tailwind CSS. The application features a modern, responsive design with service listings, contact forms, and authentication pages.

## Tech Stack
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM 6.30.1
- **State Management**: TanStack Query (React Query) 5.83.0
- **Form Handling**: React Hook Form with Zod validation
- **Backend**: Supabase (configured but optional)
- **Icons**: Lucide React
- **Theme**: Next Themes for dark mode support

## Project Structure
```
├── public/              # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/         # Images and media files
│   │   └── services/   # Service-specific images
│   ├── components/     # React components
│   │   └── ui/        # shadcn/ui components
│   ├── hooks/          # Custom React hooks
│   ├── integrations/   # Third-party integrations (Supabase)
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components (Index, SignIn, SignUp, NotFound)
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── package.json       # Dependencies and scripts
├── vite.config.ts     # Vite configuration
└── tailwind.config.ts # Tailwind CSS configuration
```

## Development Setup

### Environment Configuration
- **Development Server**: Runs on port 5000
- **Host**: 0.0.0.0 (configured for Replit environment)
- **HMR**: Hot Module Replacement enabled on port 5000

### Available Scripts
- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production
- `npm run start` - Serve production build on port 5000
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

### Workflow
The "Start application" workflow runs `npm run dev` and serves the application on port 5000 with webview output.

## Deployment Configuration
- **Type**: Autoscale (stateless frontend)
- **Build Command**: `npm run build`
- **Run Command**: `npm run start` (serves static files from dist/ using serve)
- **Port**: 5000

## Key Features
- Responsive navigation with dark mode toggle
- Hero section with service overview
- Services catalog with detailed cards
- About section
- Contact form
- Authentication pages (Sign In / Sign Up)
- 404 Not Found page
- Smooth scroll animations
- Toast notifications (Sonner)
- Form validation with Zod

## Recent Changes (October 4, 2025)
- Configured Vite to run on port 5000 with 0.0.0.0 host for Replit compatibility
- Added HMR configuration for proper hot reload in Replit environment
- Installed `serve` package for production static file serving
- Added `start` script for production deployment
- Configured autoscale deployment with proper build and run commands
- Created project documentation in replit.md

## Notes
- The application is configured for Replit's environment with proper host and port settings
- Supabase integration is available but not required for basic functionality
- All shadcn/ui components are pre-installed and configured
- Dark mode is implemented using next-themes
