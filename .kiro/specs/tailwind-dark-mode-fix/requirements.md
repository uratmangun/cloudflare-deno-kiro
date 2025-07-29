# Tailwind Dark Mode Fix Requirements

## Introduction
Fix the dark mode theme switcher functionality in the netlify-kiro-boilerplate project where the page background gradient does not visually update when switching between light and dark themes, despite the theme switcher correctly applying CSS classes and the card components changing color appropriately.

## Requirements

### Requirement 1: Dark Mode Background Visual Update
**User Story:** As a user, I want the page background to visually change from light to dark gradient when I toggle the theme switcher, so that I have a consistent dark mode experience across the entire application.

#### Acceptance Criteria
1. WHEN the user clicks the theme toggle button THEN the page background SHALL change from light slate gradient (from-slate-50 to-slate-100) to dark slate gradient (dark:from-slate-900 dark:to-slate-800)
2. WHEN the HTML element has class="dark" applied THEN all dark mode Tailwind classes SHALL be visually rendered correctly
3. WHEN the theme switcher cycles through Light → Dark → System modes THEN the background SHALL update appropriately for each mode

### Requirement 2: Tailwind CSS v4 Configuration Compatibility
**User Story:** As a developer, I want the project to use proper Tailwind CSS v4 configuration standards, so that dark mode variants are compiled and applied correctly.

#### Acceptance Criteria
1. WHEN using Tailwind CSS v4 with @tailwindcss/vite plugin THEN the configuration SHALL use CSS-first approach with @theme and @custom-variant directives
2. WHEN dark mode classes are present in markup THEN they SHALL be properly compiled and included in the generated CSS
3. WHEN the @custom-variant dark directive is configured THEN class-based dark mode toggling SHALL function correctly

### Requirement 3: Theme Persistence and State Management
**User Story:** As a user, I want my theme preference to be remembered across browser sessions, so that I don't have to re-select my preferred theme every time I visit the application.

#### Acceptance Criteria
1. WHEN the user selects a theme preference THEN it SHALL be saved to localStorage with key "vite-ui-theme"
2. WHEN the user returns to the application THEN their previously selected theme SHALL be automatically applied
3. WHEN the system theme is selected THEN the application SHALL respect the user's OS-level dark/light mode preference
