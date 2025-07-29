# React + shadcn/ui + Netlify Boilerplate

A modern, production-ready React application built with shadcn/ui components and optimized for Netlify deployment.

## ✨ Features

- **React 19** - Latest version with modern hooks and concurrent features
- **TypeScript** - Full type safety and better development experience
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **shadcn/ui** - Beautiful, accessible, and customizable UI components
- **Netlify Ready** - Pre-configured deployment settings
- **Modern Tooling** - ESLint, TypeScript, and hot module replacement
- **Path Aliases** - Clean imports with `@/` alias
- **Dark/Light Theme** - CSS variables for easy theming

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- pnpm (recommended) or bun package manager

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd netlify-kiro-boilerplate
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### 🛠 Available Scripts

```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Lint code
pnpm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   └── ui/              # shadcn/ui components
│       ├── button.tsx   # Button component
│       └── card.tsx     # Card component
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and CSS variables

public/                  # Static assets
tailwind.config.js       # Tailwind CSS configuration
netlify.toml            # Netlify deployment configuration
tsconfig.app.json       # TypeScript configuration
vite.config.ts          # Vite configuration
```

## 🎨 UI Components

This boilerplate includes pre-built shadcn/ui components:

- **Button** - Various variants (default, outline, destructive, ghost, link)
- **Card** - Header, content, footer sections
- **Icons** - Lucide React icons

### Adding More Components

To add additional shadcn/ui components:

1. Install required Radix UI dependencies
2. Create component files in `src/components/ui/`
3. Follow the established patterns for consistency

## 🚀 Deployment

### Netlify (Recommended)

This project is optimized for Netlify:

1. **Connect Repository**: Link your Git repository to Netlify
2. **Auto-Deploy**: Settings are pre-configured in `netlify.toml`
3. **Build Settings**:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   - Node version: 18

### Manual Deployment

```bash
# Build the project
pnpm run build

# Upload the 'dist' folder to your hosting provider
```

## 🎯 Customization

### Theming

- **CSS Variables**: Defined in `src/index.css`
- **Tailwind Config**: Customize in `tailwind.config.js`
- **Dark Mode**: Automatic support with CSS variables

### Path Aliases

Clean imports using the `@/` alias:

```typescript
// Instead of: '../../../components/ui/button'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Language** | TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **UI Components** | shadcn/ui + Radix UI |
| **Icons** | Lucide React |
| **Deployment** | Netlify |
| **Package Manager** | pnpm |

## 📝 Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow the established component patterns
- Use the `cn()` utility for conditional classes
- Prefer composition over inheritance

### Component Structure

```typescript
// Example component structure
import * as React from "react"
import { cn } from "@/lib/utils"

interface ComponentProps {
  // Define props here
}

const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={cn("base-classes", className)}
        {...props}
      />
    )
  }
)
Component.displayName = "Component"

export { Component }
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [documentation](https://ui.shadcn.com/)
2. Open an issue on GitHub
3. Join the community discussions

---

**Built with ❤️ using modern web technologies** • **Ready for production deployment** • **Fully customizable**
