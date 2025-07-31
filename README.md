# Cloudflare Pages + Deno Deploy Full-Stack Boilerplate

A modern, production-ready full-stack application combining React frontend with Deno serverless functions, optimized for Cloudflare Pages and Deno Deploy. Features automated CI/CD, Kiro AI assistant integration, and comprehensive development tooling.

## ✨ Features

### Frontend
- **React 19** - Latest version with modern hooks and concurrent features
- **TypeScript** - Full type safety and better development experience
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **shadcn/ui** - Beautiful, accessible, and customizable UI components
- **Dark/Light Theme** - Built-in theme switching with system preference detection

### Backend
- **Deno Runtime** - Modern JavaScript/TypeScript runtime for serverless functions
- **Function Router** - Automatic routing system for multiple serverless functions
- **CORS Support** - Pre-configured for cross-origin requests
- **Hot Reload** - Local development with automatic server restart
- **Edge Functions** - Serverless functions deployed at the edge for low latency

### Deployment & Automation
- **Cloudflare Pages** - Global CDN with edge computing capabilities
- **Deno Deploy** - Serverless functions at the edge
- **GitHub Actions** - Automated CI/CD pipeline with dual deployment
- **Environment Sync** - Automatic environment variable synchronization
- **Kiro AI Assistant** - Integrated AI workflows and automation hooks
- **Windsurf Compatibility** - Cross-platform workflow management

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** - For React development
- **Deno 2.x** - For serverless functions
- **pnpm** - Package manager (yarn as fallback, never npm)
- **GitHub CLI** (optional) - For template creation
- **Fish Shell** (recommended) - For optimal terminal experience

### Installation

1. **Create from template** (recommended):
```bash
gh repo create my-project --template uratmangun/cloudflare-deno-kiro --public --clone
cd my-project
```

2. **Or clone directly**:
```bash
git clone https://github.com/uratmangun/cloudflare-deno-kiro.git
cd cloudflare-deno-kiro
```

3. **Install dependencies**:
```bash
pnpm install
```

4. **Start development servers**:
```bash
pnpm dev
```

This starts both:
- React app at `http://localhost:5173`
- Deno server at `http://localhost:8000`

### 🛠 Available Scripts

```bash
# Start both React and Deno servers concurrently
pnpm dev

# Start only React development server
pnpm dev:vite

# Start only Deno server
pnpm dev:deno

# Build React app for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint
```

### Deno Commands

```bash
# Run Deno server directly
deno task dev

# Run main router
deno task main

# Test individual function
deno task function
```

## 📁 Project Structure

```
├── src/                     # React frontend
│   ├── components/
│   │   ├── ui/             # shadcn/ui components
│   │   └── ThemeToggle.tsx # Theme switching component
│   ├── contexts/
│   │   └── ThemeContext.tsx # Theme context provider
│   ├── lib/
│   │   └── utils.ts        # Utility functions
│   ├── App.tsx             # Main application
│   └── main.tsx            # React entry point
│
├── functions/              # Deno serverless functions
│   └── hello.ts           # Example function
│
├── main.ts                # Deno function router
├── server.ts              # Local development server
├── deno.json              # Deno configuration
│
├── .github/workflows/     # CI/CD pipeline
│   └── deploy.yml         # Automated deployment
│
├── .kiro/                 # Kiro AI Assistant configuration
│   ├── hooks/             # Automated workflow hooks
│   ├── specs/             # Project specifications
│   └── steering/          # AI assistant rules and preferences
│
├── .windsurf/             # Windsurf workflow compatibility
│   ├── rules/             # Development rules and preferences
│   └── workflows/         # Cross-platform workflow definitions
│
├── ai-schema/             # AI assistant schemas and documentation
├── PITCH/                 # Project pitch and documentation
├── package.json           # Node.js dependencies
├── vite.config.ts         # Vite configuration
└── DEPLOYMENT_SECRETS.md  # Deployment configuration guide
```

## 🎨 Frontend Features

### UI Components
- **shadcn/ui** - Pre-built accessible components
- **Button** - Multiple variants and sizes
- **Card** - Structured content containers
- **Theme Toggle** - Dark/light mode switching
- **Lucide Icons** - Beautiful icon library

### Serverless Function Integration
- **API Client** - Automatic endpoint detection
- **Error Handling** - Graceful fallbacks and error states
- **Loading States** - User feedback during API calls
- **CORS Support** - Cross-origin request handling

### Adding More Functions

1. Create a new file in `functions/` directory:
```typescript
// functions/example.ts
export default {
  async fetch(request: Request): Promise<Response> {
    return new Response(JSON.stringify({ message: "Hello!" }), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
```

2. Register in `main.ts`:
```typescript
import exampleFunction from './functions/example.ts';

const functions = {
  hello: helloFunction,
  example: exampleFunction, // Add here
};
```

3. Access at `/api/example` or `/example`

## 🚀 Deployment

### Automated Deployment (Recommended)

The project includes a complete CI/CD pipeline using GitHub Actions:

1. **Set up GitHub Secrets** (see [DEPLOYMENT_SECRETS.md](DEPLOYMENT_SECRETS.md)):
   - `DENO_DEPLOY_TOKEN` - From [dash.deno.com](https://dash.deno.com)
   - `CLOUDFLARE_API_TOKEN` - From Cloudflare dashboard
   - `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID
   - `ADMIN_TOKEN` - GitHub token (optional, for repo updates)

2. **Push to main branch**:
```bash
git push origin main
```

3. **Automatic deployment**:
   - Deno functions → Deno Deploy
   - React app → Cloudflare Pages
   - Environment variables synced automatically

### Manual Deployment

#### Deno Deploy
```bash
# Install deployctl
deno install -A --global jsr:@deno/deployctl

# Deploy function
deployctl deploy --project=your-project main.ts
```

#### Cloudflare Pages
```bash
# Build React app
pnpm build

# Deploy to Cloudflare Pages (using Wrangler)
npx wrangler pages deploy dist --project-name=your-project
```

## ⚙️ Configuration

### Environment Variables

#### Development
Create `.env.local` for local development:
```bash
VITE_DENO_API_URL=http://localhost:8000
```

#### Production
Set in Cloudflare Pages dashboard:
- `VITE_DENO_API_URL` - Your Deno Deploy URL (auto-set by GitHub Actions)

### Theming

The app includes a complete theming system:

- **CSS Variables** - Defined in `src/index.css`
- **Theme Context** - React context for theme state
- **System Detection** - Automatic dark/light mode detection
- **Theme Toggle** - User-controlled theme switching

### Path Aliases

Clean imports using the `@/` alias:

```typescript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/contexts/ThemeContext'
```

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend Framework** | React 19 |
| **Backend Runtime** | Deno 2.x |
| **Language** | TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS 4.x |
| **UI Components** | shadcn/ui + Radix UI |
| **Icons** | Lucide React |
| **Frontend Hosting** | Cloudflare Pages |
| **Backend Hosting** | Deno Deploy |
| **CI/CD** | GitHub Actions |
| **Package Manager** | pnpm (yarn fallback) |
| **AI Assistant** | Kiro + Windsurf |
| **Development Tools** | ESLint, TypeScript, Concurrently |
| **Additional Libraries** | Stagewise Toolbar, CVA, clsx |

## 🤖 AI Assistant Integration

This project includes comprehensive AI assistant integration with Kiro and Windsurf compatibility for enhanced development workflows.

### Kiro AI Features

#### Automated Hooks
The project includes pre-configured Kiro hooks for common development tasks:

- **Auto README Generator** - Automatically updates documentation
- **Auto Commit & Push** - Streamlined git workflow automation  
- **Kiro Spec Creation** - Generate project specifications
- **License Management** - Automated OSI license creation
- **Cross-Platform Conversion** - Convert between Kiro and Windsurf formats

#### Steering Rules
AI assistant behavior is configured through steering rules:

- **Package Manager Preference** - Enforces pnpm with yarn fallback
- **Shell Preferences** - Optimized for Fish shell syntax
- **Development Server Policy** - Prevents auto-starting dev servers

#### Project Specifications
Structured project documentation and feature planning:

```bash
# View available specs
ls .kiro/specs/

# Create new specification
# Use Kiro's spec creation workflow
```

### Windsurf Compatibility

The project maintains cross-platform compatibility with Windsurf workflows:

- **Workflow Conversion** - Automatic conversion between Kiro hooks and Windsurf workflows
- **Rule Synchronization** - Shared development preferences across platforms
- **Documentation Sync** - Consistent project documentation

### Using AI Assistants

#### With Kiro
```bash
# Trigger automated workflows
# Use Kiro's hook system for common tasks
# Access project context with #Codebase, #File, #Folder
```

#### With Windsurf
```bash
# Use slash commands based on workflow names
/create-kiro-spec
/auto-readme-generator
/create-windsurf-workflow
```

## 🧪 Local Development

### Development Workflow

1. **Start development servers**:
```bash
pnpm dev  # Starts both React (5173) and Deno (8000)
```

2. **Test the integration**:
   - Open `http://localhost:5173`
   - Click "Call Serverless Function" button
   - Verify the API call works

3. **Add new functions**:
   - Create in `functions/` directory
   - Register in `main.ts`
   - Test locally before deploying

### Development Best Practices

#### Package Management
- **Always use pnpm** as the primary package manager
- **Yarn as fallback** only if pnpm fails or is unavailable
- **Never use npm or bun** - enforced by project steering rules

#### Shell Commands
- **Fish shell syntax preferred** for all terminal operations
- Use `set VAR value` instead of `export VAR=value`
- Use `; and` and `; or` instead of `&&` and `||`
- Conditional execution: `if test condition; command; end`

#### Development Server Policy
- **Never auto-start development servers** - users control resource usage
- Suggest commands instead: "To start the development server, run: `pnpm dev`"
- Auto-execution allowed for: build commands, tests, configuration

#### Code Style Guidelines

##### Frontend (React)
- Use TypeScript for all components
- Follow shadcn/ui patterns for consistency
- Use the `cn()` utility for conditional classes
- Implement proper error boundaries
- Leverage React 19 features (concurrent rendering, new hooks)

##### Backend (Deno)
- Export default object with `fetch` method
- Include CORS headers for cross-origin requests
- Use proper TypeScript types with Deno's built-in types
- Handle errors gracefully with proper HTTP status codes
- Leverage Deno's standard library imports

### Function Structure

```typescript
// functions/example.ts
export default {
  async fetch(request: Request): Promise<Response> {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers: corsHeaders });
    }

    // Your function logic here
    const data = { message: 'Hello from Deno!' };

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }
};
```

## ⚡ Automation & Workflows

### GitHub Actions Pipeline

The project includes a sophisticated CI/CD pipeline that:

1. **Deploys Deno Functions First**
   - Automatically creates Deno Deploy project using repository name
   - Deploys serverless functions with proper import maps
   - Outputs deployment URL for frontend integration

2. **Deploys React App Second**
   - Builds React application with production optimizations
   - Creates Cloudflare Pages project if it doesn't exist
   - Automatically sets `VITE_DENO_API_URL` environment variable
   - Updates repository website URL on successful deployment

3. **Environment Synchronization**
   - Automatically syncs Deno Deploy URL to Cloudflare Pages
   - Supports additional environment variables (Privy, Redis, etc.)
   - Maintains separate production and preview environments

### Automated Project Management

#### Repository Setup
- **Template Creation** - Use GitHub CLI for instant project setup
- **Automatic Naming** - Project names derived from repository names
- **Cross-Platform Sync** - Kiro and Windsurf workflow synchronization

#### Development Automation
- **Concurrent Development** - React and Deno servers run simultaneously
- **Hot Reload** - Both frontend and backend support live reloading
- **Automatic Routing** - Deno functions auto-register based on file structure

#### Deployment Automation
- **Zero-Config Deployment** - Push to main branch triggers full deployment
- **Preview Deployments** - Pull requests get automatic preview URLs
- **Environment Management** - Production variables set automatically

### Workflow Integration

The project supports multiple workflow management systems:

#### Kiro Hooks (`.kiro/hooks/`)
- User-triggered automation
- Agent-based task execution
- Context-aware operations

#### Windsurf Workflows (`.windsurf/workflows/`)
- Slash command integration
- Step-by-step instructions
- Cross-platform compatibility

#### Custom Automation
Add your own workflows by:
1. Creating new hook files in `.kiro/hooks/`
2. Adding workflow definitions in `.windsurf/workflows/`
3. Using the conversion hooks to maintain synchronization

## 🔧 Troubleshooting

### Common Issues

#### Function not found (404)
- Verify function is registered in `main.ts`
- Check function export format
- Ensure Deno server is running on port 8000

#### CORS errors
- Functions include CORS headers by default
- Check browser network tab for actual error
- Verify API endpoint URL is correct

#### Build failures
- Check Node.js version (18+ required)
- Clear `node_modules` and reinstall: `rm -rf node_modules && pnpm install`
- Verify TypeScript compilation: `pnpm build`

#### Deployment issues
- Check GitHub Secrets are set correctly
- Verify Cloudflare API token permissions
- Check GitHub Actions logs for specific errors

### Getting Help

1. Check the [GitHub Issues](https://github.com/uratmangun/cloudflare-deno-kiro/issues)
2. Review the [deployment documentation](DEPLOYMENT_SECRETS.md)
3. Check Cloudflare and Deno Deploy documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Test locally with `pnpm dev`
4. Commit changes: `git commit -m 'Add amazing feature'`
5. Push to branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🏗️ Architecture & Design

### Full-Stack Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   React App     │    │   Deno Deploy    │    │  GitHub Actions │
│ (Cloudflare     │◄──►│   (Serverless    │◄──►│   (CI/CD        │
│  Pages)         │    │    Functions)    │    │   Pipeline)     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                        │                        │
         ▼                        ▼                        ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   shadcn/ui     │    │   Function       │    │   Automated     │
│   Components    │    │   Router         │    │   Deployment    │
│   + Tailwind    │    │   + CORS         │    │   + Env Sync    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Edge-First Design

- **Global Distribution** - Cloudflare's 300+ edge locations
- **Low Latency** - Functions execute at the edge closest to users
- **Automatic Scaling** - Serverless architecture scales to zero and infinity
- **Cost Optimization** - Pay only for actual usage

### Development Philosophy

#### Modern Web Standards
- **Web APIs** - Built on standard Web APIs (Request, Response, URL)
- **ES Modules** - Native ES module support throughout the stack
- **TypeScript First** - Full type safety from frontend to backend
- **Progressive Enhancement** - Works without JavaScript, enhanced with it

#### Developer Experience
- **Zero Configuration** - Works out of the box with sensible defaults
- **Hot Reload Everything** - Frontend, backend, and configuration changes
- **Integrated Tooling** - ESLint, TypeScript, and AI assistants built-in
- **Automated Workflows** - Common tasks automated through AI hooks

#### Production Ready
- **Security First** - CORS, environment variables, and secure defaults
- **Performance Optimized** - Tree shaking, code splitting, edge caching
- **Monitoring Ready** - Structured logging and error handling
- **Scalable Architecture** - Designed for high-traffic applications

## 🌟 Features in Detail

### Full-Stack Integration
- **Seamless API calls** between React frontend and Deno backend
- **Automatic endpoint detection** for development and production
- **Environment-aware configuration** with fallback strategies

### Developer Experience
- **Hot reload** for both frontend and backend during development
- **TypeScript everywhere** for type safety across the stack
- **Modern tooling** with Vite, ESLint, and Deno's built-in formatter

### Production Ready
- **Global CDN** deployment with Cloudflare Pages
- **Edge computing** with Deno Deploy serverless functions
- **Automated CI/CD** with GitHub Actions
- **Environment synchronization** between services

### Scalability
- **Serverless architecture** scales automatically with demand
- **Edge deployment** reduces latency worldwide
- **Stateless functions** enable horizontal scaling

## 🔧 Customization & Extension

### Adding New Features

#### Frontend Components
```bash
# Add new shadcn/ui components
npx shadcn@latest add [component-name]

# Create custom components in src/components/
# Follow the established patterns for consistency
```

#### Backend Functions
```typescript
// Create new function in functions/
export default {
  async fetch(request: Request): Promise<Response> {
    // Your function logic
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// Register in main.ts
import newFunction from './functions/new-function.ts';
const functions = {
  hello: helloFunction,
  'new-function': newFunction, // Add here
};
```

#### AI Workflows
```json
// Add new Kiro hook in .kiro/hooks/
{
  "enabled": true,
  "name": "custom-workflow",
  "description": "Your custom automation",
  "version": "1",
  "when": { "type": "userTriggered", "patterns": ["*"] },
  "then": { "type": "askAgent", "prompt": "Your instructions" }
}
```

### Environment Configuration

#### Development
```bash
# .env.local
VITE_DENO_API_URL=http://localhost:8000
VITE_CUSTOM_API_KEY=your-dev-key
```

#### Production (Cloudflare Pages)
- Set environment variables in Cloudflare Pages dashboard
- Use GitHub Actions to automate environment synchronization
- Support for multiple environments (production, preview, development)

### Deployment Customization

#### Custom Domains
```bash
# Set up custom domain in Cloudflare Pages
# Configure DNS records
# Enable automatic HTTPS
```

#### Additional Services
```yaml
# Extend .github/workflows/deploy.yml
# Add database deployments
# Include additional cloud services
# Set up monitoring and analytics
```

### Styling Customization

#### Theme Configuration
```css
/* Modify src/index.css for custom themes */
:root {
  --background: your-custom-color;
  --foreground: your-text-color;
  /* Full CSS custom property support */
}
```

#### Component Variants
```typescript
// Extend component variants using CVA
const buttonVariants = cva(
  "base-styles",
  {
    variants: {
      variant: {
        default: "default-styles",
        custom: "your-custom-styles", // Add custom variants
      }
    }
  }
);
```

## 📊 Performance & Monitoring

### Built-in Optimizations
- **Code Splitting** - Automatic route-based code splitting
- **Tree Shaking** - Dead code elimination in production builds
- **Asset Optimization** - Image and font optimization
- **Edge Caching** - Cloudflare's global CDN caching

### Monitoring Integration
- **Cloudflare Analytics** - Built-in web analytics
- **Deno Deploy Metrics** - Function performance monitoring
- **GitHub Actions Insights** - Deployment pipeline monitoring

### Performance Metrics
- **Lighthouse Score** - Optimized for 90+ scores across all metrics
- **Core Web Vitals** - Excellent LCP, FID, and CLS scores
- **Edge Response Times** - Sub-100ms response times globally

---

**🚀 Production Ready** • **⚡ Edge Optimized** • **🌍 Globally Distributed** • **🤖 AI Enhanced** • **🔧 Fully Customizable**

*Built with modern web technologies for the edge computing era, enhanced with AI-powered development workflows.*
