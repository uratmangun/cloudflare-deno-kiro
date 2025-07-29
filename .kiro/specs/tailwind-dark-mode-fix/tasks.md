# Implementation Plan

- [x] 1. Investigate Theme Switcher DOM Application
  - Verify that ThemeContext correctly applies 'dark' class to document.documentElement
  - Confirm theme toggle button cycles through Light → Dark → System modes
  - Validate that theme state is properly managed and persisted
  - _Requirements: 3.1, 3.2, 3.3_

- [x] 2. Analyze Tailwind CSS Configuration Mismatch
  - Identify that project uses Tailwind v4 @tailwindcss/vite plugin
  - Confirm presence of legacy tailwind.config.js file (v3 format)
  - Determine that v4 expects CSS-first configuration approach
  - _Requirements: 2.1, 2.2_

- [x] 3. Fix ThemeContext Infinite Recursion Bug
  - Resolve parameter naming conflict in setTheme function
  - Change parameter from 'theme' to 'newTheme' to avoid recursion
  - Test theme state updates work correctly after fix
  - _Requirements: 1.3, 3.1_

- [x] 4. Remove Legacy Tailwind Configuration
  - Delete tailwind.config.js file that conflicts with v4
  - Ensure no PostCSS configuration interferes with Vite plugin
  - Verify @tailwindcss/vite plugin is properly configured in vite.config.ts
  - _Requirements: 2.1, 2.2_

- [x] 5. Implement CSS-First Configuration for Tailwind v4
  - Add @theme directive to src/index.css for v4 configuration
  - Include @custom-variant dark (&:where(.dark, .dark *)) directive
  - Ensure @import "tailwindcss" is properly positioned
  - _Requirements: 2.1, 2.2, 2.3_


