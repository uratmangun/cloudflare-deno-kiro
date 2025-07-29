# Cloudflare Pages + Deno Deploy Full-Stack Boilerplate

A modern, production-ready full-stack application combining React frontend with Deno serverless functions, optimized for Cloudflare Pages and Deno Deploy.

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

### Deployment
- **Cloudflare Pages** - Global CDN with edge computing capabilities
- **Deno Deploy** - Serverless functions at the edge
- **GitHub Actions** - Automated CI/CD pipeline
- **Environment Sync** - Automatic environment variable synchronization

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** - For React development
- **Deno 2.x** - For serverless functions
- **pnpm** - Package manager (yarn as fallback)

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
├── .kiro/specs/           # Project specifications
│   └── cloudflare-deno-integration/
│
├── package.json           # Node.js dependencies
├── vite.config.ts         # Vite configuration
└── netlify.toml          # Legacy Netlify config
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
| **Styling** | Tailwind CSS |
| **UI Components** | shadcn/ui + Radix UI |
| **Icons** | Lucide React |
| **Frontend Hosting** | Cloudflare Pages |
| **Backend Hosting** | Deno Deploy |
| **CI/CD** | GitHub Actions |
| **Package Manager** | pnpm |

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

### Code Style Guidelines

#### Frontend (React)
- Use TypeScript for all components
- Follow shadcn/ui patterns for consistency
- Use the `cn()` utility for conditional classes
- Implement proper error boundaries

#### Backend (Deno)
- Export default object with `fetch` method
- Include CORS headers for cross-origin requests
- Use proper TypeScript types
- Handle errors gracefully

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

---

**🚀 Ready for production** • **⚡ Lightning fast** • **🌍 Global deployment** • **🔧 Fully customizable**

Built with modern web technologies for the edge computing era.
