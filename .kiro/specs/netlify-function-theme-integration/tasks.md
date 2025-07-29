# Implementation Plan

- [x] 1. Create Netlify Function Infrastructure
  - Create `netlify/functions/hello.js` with ES module syntax
  - Implement handler function returning JSON response with greeting, timestamp, and random number
  - Configure CORS headers for local development compatibility
  - _Requirements: 1.1, 2.1_

- [x] 2. Configure Netlify Function Deployment
  - Update `netlify.toml` to specify functions directory as `netlify/functions`
  - Ensure proper build configuration for function deployment
  - Test function accessibility via `/.netlify/functions/hello` endpoint
  - _Requirements: 1.1, 2.2_

- [x] 3. Remove Interactive Counter Component
  - Delete existing counter state management (`count`, `setCount`)
  - Remove counter UI elements (decrease, increase, reset buttons)
  - Clear counter-related event handlers and styling
  - _Requirements: 1.1_

- [x] 4. Implement API Integration Interface
  - Add state management for API response, loading, and error states
  - Create `callNetlifyFunction` async function with proper error handling
  - Implement fetch request to Netlify function endpoint
  - Add loading state management during API calls
  - _Requirements: 1.1, 1.2, 1.4_

- [x] 5. Design API Response UI
  - Create single "Call Netlify Function" button with loading state
  - Implement success response display with formatted data presentation
  - Design error state UI with appropriate styling and messaging
  - Ensure responsive layout for API response content
  - _Requirements: 1.3, 1.4, 5.4_

- [x] 6. Create Theme Context System
  - Implement `ThemeContext.tsx` with React Context API
  - Add theme state management (light, dark, system)
  - Implement localStorage persistence with configurable storage key
  - Create `useTheme` hook for component access
  - _Requirements: 3.1, 3.5, 3.6_

- [x] 7. Implement Theme DOM Integration
  - Add useEffect for document.documentElement class manipulation
  - Implement system theme detection via `prefers-color-scheme` media query
  - Ensure proper cleanup of theme classes during switches
  - Handle theme application on component mount
  - _Requirements: 3.2, 3.3, 3.4_

- [x] 8. Create Theme Toggle Component
  - Build `ThemeToggle.tsx` with fixed positioning and proper z-index
  - Implement three-state cycling logic (light → dark → system → light)
  - Add dynamic icon rendering based on current theme state
  - Configure shadcn/ui Button component with appropriate styling
  - _Requirements: 3.1, 3.2, 3.3_

- [x] 9. Integrate Theme Provider in Application
  - Wrap App component with ThemeProvider
  - Add ThemeToggle component to main application layout
  - Configure default theme and storage key settings
  - Ensure proper provider hierarchy for context access
  - _Requirements: 3.1, 3.6_

- [x] 10. Implement Comprehensive Dark Mode Styling
  - Add explicit dark mode classes to main container and text elements
  - Configure background gradient switching between light and dark variants
  - Ensure proper text contrast in both theme modes
  - Update shadcn/ui component integration with CSS variables
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [x] 11. Enhance Theme Toggle Visibility
  - Configure theme toggle button styling for both light and dark modes
  - Implement proper contrast for icon visibility in all theme states
  - Add hover state styling with appropriate color transitions
  - Ensure button accessibility with proper focus indicators
  - _Requirements: 4.5, 5.1, 5.2_

- [x] 12. Implement Accessibility Features
  - Add screen reader support with appropriate aria labels
  - Implement keyboard navigation support for theme toggle
  - Ensure error messages are properly announced to assistive technologies
  - Add semantic HTML structure for API response display
  - _Requirements: 5.1, 5.2, 5.4_

- [x] 13. Test Integration and Polish
  - Verify Netlify function works in both development and production
  - Test theme switching across all supported modes
  - Validate API error handling with network failures
  - Ensure responsive design works across device sizes
  - _Requirements: 1.1, 1.4, 3.1, 4.6, 5.5_

- [x] 14. Validate ES Module Compliance
  - Confirm Netlify function uses proper ES module syntax
  - Verify no CommonJS warnings appear during development
  - Test function deployment compatibility with Netlify platform
  - Ensure proper module loading in serverless environment
  - _Requirements: 2.1, 2.2, 2.3_
