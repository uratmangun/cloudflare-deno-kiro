# Tailwind CSS v4 and shadcn/ui Migration Design

## Architecture Overview
The migration involves transitioning from a PostCSS-based Tailwind CSS v3 setup to a Vite plugin-based Tailwind CSS v4 configuration. The system architecture changes from a traditional PostCSS pipeline to a more integrated Vite-native approach that leverages modern CSS features and improved performance characteristics.

## Technical Approach
The migration follows the official Tailwind CSS v4 upgrade path and shadcn/ui compatibility guidelines:

1. **Plugin Migration**: Replace PostCSS plugin with @tailwindcss/vite for better integration
2. **Syntax Update**: Migrate from @tailwind directives to @import "tailwindcss" syntax
3. **Theme System**: Implement @theme inline directive for proper variable mapping
4. **CSS Variables**: Update color definitions to use hsl() wrappers for v4 compatibility

## Component Design

### Vite Configuration Component
- **Purpose**: Integrates Tailwind CSS v4 directly into the Vite build pipeline
- **Dependencies**: @tailwindcss/vite plugin, Vite core
- **Interface**: Configured through vite.config.ts plugins array

### CSS Import System
- **Purpose**: Handles the new Tailwind v4 import syntax and theme configuration
- **Dependencies**: Tailwind CSS v4 core, CSS custom properties
- **Interface**: Single @import statement in global CSS file

### Theme Variable Mapping
- **Purpose**: Maps shadcn/ui CSS variables to Tailwind v4 theme system
- **Dependencies**: @theme inline directive, CSS custom properties
- **Interface**: Bidirectional mapping between CSS variables and Tailwind tokens

### shadcn/ui Component Integration
- **Purpose**: Ensures proper styling of shadcn/ui components with v4 theme system
- **Dependencies**: Updated CSS variables, theme mapping, hsl() color functions
- **Interface**: CSS custom properties consumed by component classes

## Data Flow

1. **Build Process**: Vite processes files → @tailwindcss/vite plugin intercepts CSS → Tailwind v4 engine generates styles
2. **CSS Processing**: @import "tailwindcss" → Theme variables loaded → @theme inline mapping applied → Final CSS output
3. **Component Rendering**: React components → shadcn/ui classes → CSS custom properties → Resolved theme values → Styled elements
4. **Development**: File changes → Vite HMR → Tailwind regeneration → Browser update

## Technical Considerations

### Performance
- Tailwind v4 provides 3.5x faster full rebuilds and 8x faster incremental builds
- Vite plugin integration eliminates PostCSS overhead
- Modern CSS features reduce generated CSS size

### Compatibility
- CSS custom properties require hsl() wrappers for proper color mixing
- @theme inline directive enables JavaScript access to theme variables
- Modern CSS features (cascade layers, registered properties) improve maintainability

### Migration Strategy
- Incremental migration approach to minimize disruption
- Backward compatibility maintained through proper variable mapping
- Cache clearing required during transition to prevent stale configurations

### Browser Support
- Modern CSS features require recent browser versions
- Fallbacks handled automatically by Tailwind v4 engine
- CSS custom properties provide consistent theming across browsers
