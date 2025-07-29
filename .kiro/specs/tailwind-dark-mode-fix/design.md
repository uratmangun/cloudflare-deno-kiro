# Tailwind Dark Mode Fix Design

## Architecture Overview
The dark mode system consists of three main components: ThemeContext for state management, ThemeToggle for user interaction, and Tailwind CSS v4 configuration for styling. The issue lies in the CSS compilation layer where dark mode variants are not being properly generated due to configuration mismatch between Tailwind v4 expectations and current setup.

## Technical Approach
The solution involves migrating from Tailwind CSS v3 JavaScript configuration to v4 CSS-first configuration using the new @theme and @custom-variant directives. This ensures proper compilation of dark mode variants when using the @tailwindcss/vite plugin.

## Component Design

### ThemeContext
- **Purpose**: Manages theme state (light/dark/system) and applies CSS classes to document root
- **Dependencies**: React context, localStorage for persistence
- **Interface**: Provides theme state and setTheme function to child components
- **Current Issue**: Fixed infinite recursion bug in setTheme function parameter naming

### ThemeToggle
- **Purpose**: Provides UI control for cycling between theme modes
- **Dependencies**: ThemeContext for state management, Lucide icons for visual indicators
- **Interface**: Button component with click handler that calls setTheme
- **Current Status**: Working correctly, applies dark class to HTML element

### Tailwind CSS Configuration
- **Purpose**: Compiles dark mode variants and applies them when .dark class is present
- **Dependencies**: @tailwindcss/vite plugin, CSS-first configuration
- **Interface**: CSS directives (@import, @theme, @custom-variant) processed by Vite plugin
- **Migration Required**: From tailwind.config.js (v3) to CSS directives (v4)

## Data Flow
1. User clicks ThemeToggle button
2. ThemeToggle calls setTheme from ThemeContext
3. ThemeContext updates state and applies/removes 'dark' class on document.documentElement
4. Tailwind CSS v4 processes @custom-variant dark directive
5. Dark mode styles are applied to elements with dark: prefixed classes
6. Theme preference is saved to localStorage

## Technical Considerations

### Performance
- CSS-first configuration in v4 provides better build performance
- @custom-variant directive enables efficient dark mode class compilation
- Vite plugin offers better performance than PostCSS approach

### Compatibility
- Tailwind v4 requires different configuration approach than v3
- @tailwindcss/vite plugin expects CSS-first configuration
- Legacy tailwind.config.js files conflict with v4 expectations

### Browser Support
- CSS custom properties and cascade layers used by v4 have good modern browser support
- Dark mode functionality depends on CSS class application, not media queries
- localStorage persistence works across all modern browsers
