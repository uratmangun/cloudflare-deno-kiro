# Cloudflare Pages + Deno Deploy Full-Stack Boilerplate

## Introduction

Building modern full-stack applications requires seamless integration between frontend and backend services, especially when targeting edge computing platforms. This project demonstrates a production-ready boilerplate that combines React with Deno serverless functions, optimized for Cloudflare Pages and Deno Deploy.

## What is Cloudflare Pages + Deno Deploy Boilerplate?

This is a comprehensive full-stack application template that bridges the gap between modern frontend development and serverless backend architecture. The project provides a complete development environment with React 19 frontend, Deno-powered serverless functions, and automated deployment pipelines to edge computing platforms.

The boilerplate eliminates the complexity of setting up cross-platform integrations by providing pre-configured tooling, automated CI/CD workflows, and a seamless development experience that works both locally and in production.

## Tech Stack & Architecture

### Frontend Technologies
- **React 19** - Latest version with modern hooks and concurrent features
- **TypeScript** - Full type safety across the entire application
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **shadcn/ui** - Beautiful, accessible, and customizable UI components
- **Radix UI** - Headless UI primitives for accessibility
- **Lucide React** - Beautiful icon library

### Backend Technologies
- **Deno Runtime** - Modern JavaScript/TypeScript runtime for serverless functions
- **Function Router** - Automatic routing system for multiple serverless functions
- **CORS Support** - Pre-configured for cross-origin requests

### Development & Deployment Tools
- **pnpm** - Efficient package manager with strict dependency resolution
- **Cloudflare Pages** - Global CDN with edge computing capabilities
- **Deno Deploy** - Serverless functions at the edge
- **GitHub Actions** - Automated CI/CD pipeline
- **Concurrently** - Run multiple development servers simultaneously

## Development Methodology: Kiro Specifications

This project follows spec-driven development using Kiro specifications, which provide a structured approach to building complex features through three core documents:

- **Requirements**: User stories and acceptance criteria for each feature
- **Design**: Technical architecture and implementation approach  
- **Tasks**: Discrete, trackable implementation steps

### Specifications Created:

#### Cloudflare & Deno Integration Specification
This comprehensive specification guided the entire development process:

**Requirements Phase**: Defined four core user stories covering Cloudflare Pages integration, Deno serverless functions, local development environment, and automated deployment pipeline. Each requirement included specific acceptance criteria using WHEN/THEN format to ensure clear, testable outcomes.

**Design Phase**: Established the technical architecture with a clear component diagram showing the relationship between React frontend, Deno function router, and deployment platforms. The design emphasized performance optimization, security considerations, and scalability patterns.

**Implementation Phase**: Broke down development into 11 discrete tasks covering setup, development, deployment, testing, and documentation. All tasks were completed successfully, demonstrating the effectiveness of the spec-driven approach.

The specification methodology ensured systematic development with clear milestones, comprehensive testing, and thorough documentation throughout the project lifecycle.

## Key Features

1. **Seamless Full-Stack Integration**: React frontend communicates effortlessly with Deno serverless functions through an intelligent endpoint detection system that works in both development and production environments.

2. **Edge-Optimized Deployment**: Leverages Cloudflare's global CDN for frontend delivery and Deno Deploy's edge computing for serverless functions, ensuring minimal latency worldwide.

3. **Developer Experience Excellence**: Hot-reload development environment with concurrent React and Deno servers, TypeScript throughout the stack, and modern tooling integration.

4. **Production-Ready CI/CD**: Automated GitHub Actions workflow that deploys frontend to Cloudflare Pages and backend to Deno Deploy with environment variable synchronization.

5. **Modern UI Components**: Built with shadcn/ui and Radix UI primitives, providing accessible, customizable components with dark/light theme support.

## Demo

{% embed https://github.com/uratmangun/cloudflare-deno-kiro %}

## Getting Started

### Prerequisites
- Node.js 18+ for React development
- Deno 2.x for serverless functions  
- pnpm package manager (yarn as fallback)

### Quick Setup
```bash
# Create from template
gh repo create my-project --template uratmangun/cloudflare-deno-kiro --public --clone
cd my-project

# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

This starts both the React app at `http://localhost:5173` and Deno server at `http://localhost:8000`.

### Available Scripts
- `pnpm dev` - Start both React and Deno servers concurrently
- `pnpm build` - Build React app for production
- `pnpm lint` - Lint code with ESLint
- `deno task dev` - Run Deno server with hot-reload

## Conclusion

This project demonstrates how spec-driven development with Kiro can streamline complex full-stack integrations. The systematic approach of defining requirements, designing architecture, and implementing discrete tasks resulted in a robust, production-ready boilerplate.

The combination of modern web technologies with edge computing platforms creates a powerful foundation for building scalable applications. The automated deployment pipeline and comprehensive development environment make it easy for teams to adopt and customize for their specific needs.

## Technical Deep Dive

### Project Structure
```
├── src/                     # React frontend
│   ├── components/ui/       # shadcn/ui components
│   ├── contexts/           # React context providers
│   └── App.tsx             # Main application
├── functions/              # Deno serverless functions
│   └── hello.ts           # Example function
├── main.ts                # Deno function router
├── server.ts              # Local development server
└── .github/workflows/     # CI/CD pipeline
```

### Key Dependencies
- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Deno runtime with standard library modules
- **Development**: Concurrently, ESLint, TypeScript compiler
- **Deployment**: GitHub Actions, Cloudflare Pages, Deno Deploy

### Development Workflow

1. **Local Development**: Concurrent React and Deno servers with hot-reload
2. **Function Creation**: Add new functions in `/functions` directory and register in `main.ts`
3. **API Integration**: React app automatically detects and calls appropriate endpoints
4. **Deployment**: Push to main branch triggers automated deployment to both platforms
5. **Environment Sync**: GitHub Actions automatically configures environment variables

The spec-driven approach ensured each component was thoroughly planned, implemented, and tested, resulting in a cohesive and maintainable codebase ready for production use.

---

**🚀 Ready for production** • **⚡ Lightning fast** • **🌍 Global deployment** • **🔧 Fully customizable**

Built with modern web technologies for the edge computing era.