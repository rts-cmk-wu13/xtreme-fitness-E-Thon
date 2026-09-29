# GitHub Copilot Instructions
## Project Overview
This is a Next.js project built with TypeScript. The main application is in the `app/` directory following the App Router pattern. Styling uses SCSS with global styles in `app/globals.css` and component-specific styles in the `_components/` folder.
## Copilot Behavior & Guidelines
- **IMPORTANT: Always show code changes needed in the chat first - do not directly edit the actual code files.** Propose all changes with explanations and let the user review and approve before implementation.
- **Prioritize official documentation** over alternative solutions when suggesting code
- Ensure all recommendations align with Next.js, React, TypeScript, and ESLint best practices
- Flag deprecated APIs or patterns before implementation
- Review existing code in `app/` before implementing new features
- Match established patterns and styles from current components
- Reuse existing utilities and hooks to avoid duplication
- Suggest code that is modular, maintainable, and adheres to the project's coding standards
## Code Style & Structure
- Use functional components with React hooks (useState, useEffect, etc.)
- Use arrow functions for callbacks
- Prefer const over let/var
- Write clear, descriptive variable and function names
- Add comments for complex logic
- Follow consistent indentation (2 spaces)
- Make code modular and reusable
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Extract features to separate components when appropriate
- Make separate files for functions when appropriate and possible
- Create dynamic code for simple reuse throughout the codebase rather than hardcoding when other options are available
## HTML & Accessibility
- Use semantic HTML elements (sections, articles over divs)
- Ensure all interactive elements are keyboard accessible
- Provide alt text for images
- Use ARIA roles and attributes where necessary
- Test components with screen readers to ensure usability
- Prefer vanilla forms - do not use form libraries
## File Structure & Organization
- Components go in `app/_components/` with co-located style files (SCSS)
- Styles are co-located with components as SCSS files with underscore prefix (e.g., `_ComponentName.scss`)
- Pages follow Next.js App Router conventions in the `app/` directory
- Create API routes in `app/api/`
- Assets are organized in `public/`
- Utility functions go in `app/lib/` or co-located with features
- Extract reusable styles into `app/style/` with variables, mixins, and placeholders
- Follow the ESLint rules defined in `eslint.config.mjs`
- Use kebab-case for file names (e.g., `my-component.tsx`) except for React components
- Use PascalCase for React component files (e.g., `MyComponent.tsx`)
- Use camelCase for utility and helper functions and files (e.g., `helperFunction.ts`)
- TypeScript files use `.ts` extension for utilities and `.tsx` for React components
## Naming Conventions
- React components: PascalCase (e.g., `UserProfile`, `NavBar`)
- Component files: PascalCase (e.g., `UserProfile.tsx`)
- Component SCSS files: kebab-case with underscore prefix (e.g., `_user-profile.scss`)
- Folders: kebab-case (e.g., `user-profile/`)
- Functions and variables: camelCase (e.g., `getUserData`, `isActive`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`, `API_BASE_URL`)
- Event handlers: prefix with `handle` (e.g., `handleClick`, `handleSubmit`)
- Boolean variables/functions: prefix with `is`, `has`, `can`, or `should` (e.g., `isLoading`, `hasError`)
## SASS & Styling Approach
- Use SASS (SCSS syntax) with co-located component stylesheets (`.scss` files)
- Follow BEM (Block Element Modifier) naming convention for classes when appropriate
- Keep styles scoped to components when possible
- Use SASS variables for theme colors and reusable values (e.g., `$primary-color`, `$spacing-unit`)
- Maintain a global stylesheet for shared styles (e.g., `src/index.scss`)
- Avoid inline styles; use SCSS classes instead
- Use responsive design principles with mobile-first approach
- Define breakpoints in SCSS variables for tablets (768px) and desktops (1024px)
- Leverage SASS nesting to organize related selectors hierarchically
- Create mixins for frequently used style patterns
- Use SASS partials (`_variables.scss`, `_mixins.scss`) for better organization
- Utilize SASS operators for dynamic calculations
- Use `@extend` and placeholders (`%class-name`) for DRY styling
- Keep SASS functions and mixins in separate `_mixins.scss` file
- Store all SASS variables in a dedicated `_variables.scss` file
- **Always verify SASS imports at the top of each component SCSS file** - ensure `_variables.scss`, `_mixins.scss`, and `_placeholders.scss` are imported before using any SASS variables, mixins, or placeholders
- **Check for import errors** - if a SASS variable or placeholder is undefined, verify the import path and that it's actually exported from the partial file
- **Maintain consistent import order** - import variables first, then mixins, then placeholders in every component file for consistency
- **SASS Variable Validation Rules**:
  - Always check `app/style/variables/_color.scss` and `app/style/variables/_typography.scss` for available variables
  - Verify that spacing variables exist before using them
  - Verify that font sizes and colors exist in their respective variable files
  - Do not use undefined variables - if a variable name feels wrong, check the actual variable file first
  - When creating new SCSS files, copy the import statements from existing component SCSS files to ensure correct imports
- **SASS Syntax Validation**:
  - Check for duplicate selectors or nested blocks that might cause closing brace issues
  - Verify all opening braces have matching closing braces - count them if errors occur
  - Do not use `object-fit: cover` without `object-position` when images need to be fully visible - use `object-fit: contain` instead
  - Ensure all CSS properties use correct syntax (e.g., `box-sizing: border-box` for padding calculations)
- **Common SASS Compilation Errors to Prevent**:
  - "Undefined variable" - Check that the variable exists in `_variables.scss` and is imported
  - "Expected '}'" - Look for duplicate selectors or missing closing braces
  - Variables must match the actual names in the variables file exactly
## Constants & Configuration
- Store API endpoints, URLs, and magic numbers in a separate `constants.js` or `config.js` file
- Group related constants together
- Use descriptive names for constants
- Keep environment-specific values in `.env` files
- Never hardcode sensitive information (API keys, tokens, etc.)
## API Integration & Data Fetching
- Use consistent error handling for all API calls
- Implement retry logic for failed requests
- Handle loading, error, and success states consistently
- Use Zod for validating API responses
- Implement request/response interceptors for common operations
- Cache API responses when appropriate to reduce unnecessary requests
- Separate API calls into utility functions or custom hooks
- Document API endpoints and expected response formats
## Error Handling & Logging
### Error Boundaries (Component Errors)
- **Location:** `app/_components/error/ErrorBoundary.jsx`
- **Purpose:** Catches React component errors during rendering and component lifecycle
- **When to Use:** Wrap at app root in `app/layout.tsx` to catch unexpected component errors
- **What It Catches:**
  - Errors thrown during rendering
  - Errors in event handlers and callbacks
  - Errors in constructors
- **What It Doesn't Catch:** Server-side rendering errors, async operations not caught in try-catch
- **UI Behavior:**
  - **Production:** User-friendly error message with recovery options
  - **Development:** Full error stack trace and component stack for debugging
### Route Error Handling
- **Location:** `app/error.tsx` for segment-level errors and `app/not-found.tsx` for 404 errors
- **Purpose:** Handles routing errors at different levels of the application
- **Usage:** Automatically used by Next.js when errors occur in specific route segments
- **Behavior:** Different error pages can be created for different route segments
### Async Operation & Event Handler Errors
- Create a centralized error handling mechanism
- Use try-catch blocks for all async operations (fetch, promises, etc.)
- Wrap event handler logic in try-catch to prevent unhandled errors
- Provide user-friendly error messages
- Log errors with sufficient context for debugging
- Avoid logging sensitive information
- Use console methods appropriately (error, warn, info, log)
- Distinguish between user-facing errors and development errors
### Error Handling Pattern Example
```jsx
// Async operations - use try-catch
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Fetch error:', error);
      setError(error.message);
    }
  };
  
  fetchData();
}, []);
// Event handlers - use try-catch
const handleSubmit = (e) => {
  e.preventDefault();
  try {
    riskyOperation();
    showSuccess('Operation completed');
  } catch (error) {
    console.error('Submit error:', error);
    showError('Operation failed. Please try again.');
  }
};
// Rendering errors - caught by ErrorBoundary
// Just throw from within component render
function MyComponent() {
  if (!props.required) {
    throw new Error('Required prop missing'); // Caught by ErrorBoundary
  }
  return <div>{props.required}</div>;
}
```
## Loading States & Async Operations
- Always provide visual feedback for loading operations (spinners, skeletons, etc.)
- Display error states with actionable error messages
- Handle timeout scenarios gracefully
- Show success confirmations when appropriate
- Use consistent loading state management across components
- Prevent race conditions in async operations
- Implement abort/cancel mechanisms for long-running requests
## State Management
- Use React Context for global state when appropriate
- Keep local component state for UI-only concerns
- Use custom hooks to abstract state logic
- Avoid prop drilling by using Context API
- Document state structure and its intended use
- Consider Redux or similar only if Context becomes complex
- Separate business logic from UI state
### User-Specific Data Persistence
- **Pattern:** All user data uses localStorage keys with userId format: `${dataType}_${userId}`
- **Examples:**
  - Cart: `cart_${user.id}`
  - Favorites: `favorites_${user.id}`
  - Orders: `orders_${user.id}`
- **Location:** `src/context/CartContext.jsx` manages this pattern
- **Auto-clear on Logout:** All user-specific data is automatically cleared when user logs out
- **Order History Structure:**
  ```jsx
  {
    id: string,              // Unique order ID
    date: string,            // ISO date string (new Date().toISOString())
    items: [                 // Order line items
      {
        id: string,
        name: string,
        price: number,
        quantity: number
      }
    ],
    total: number            // Order total
  }
  ```
- **Cart Context API:**
  ```jsx
  const {
    cart,              // Array of cart items
    favorites,         // Array of favorite products
    addToCart,         // (product, quantity) => void
    removeFromCart,    // (productId) => void
    updateQuantity,    // (productId, quantity) => void
    toggleFavorite,    // (product) => void
    clearCart,         // () => void
    orderHistory,      // Array of past orders
    addOrder,          // (items, total) => void
    getOrderHistory    // () => orders
  } = useContext(CartContext);
  ```
## React Router & Navigation
- Use Next.js Link component from `next/link` for client-side navigation instead of `<a>` tags
- Use `useRouter` hook from `next/navigation` for programmatic navigation in client components
- Use URL parameters via Next.js dynamic routes (e.g., `app/users/[id]/page.tsx`)
- Use search params via the `useSearchParams` hook from `next/navigation`
- Use `usePathname` hook to access the current pathname
- Keep route definitions in the `app/` directory following Next.js file-based routing conventions
- Define catch-all routes using `[...slug]` for custom 404 pages
- Use route groups with parentheses `(group)` to organize routes without affecting URL structure
- Separate layout logic into `layout.tsx` files for shared styling and navigation
- Test navigation flows to ensure all routes are working correctly
- Use kebab-case for file and folder names in the app directory
## Environment Variables
- Use `.env.local` for local development and `.env` for example configuration
- Name variables with clear, descriptive names prefixed with `NEXT_PUBLIC_` for client-side variables
- Prefix server-only variables without `NEXT_PUBLIC_` (only available on server)
- Document all required environment variables in a `.env.example` file
- Never commit `.env.local` files with sensitive data to version control
- Use different `.env` files for development, staging, and production
- Validate that required environment variables are set on application startup
## Type Safety
- Use TypeScript throughout the project (.ts and .tsx files)
- Include prop type definitions using TypeScript interfaces
- Type all function parameters and return types
- Use utility types like `React.ReactNode`, `React.FC`, `React.ComponentType` from the react module
- Create separate `.types.ts` or `.d.ts` files for shared type definitions
- Validate critical function inputs and outputs
- Use discriminated unions and generics for flexible, type-safe components
## Browser Support & Compatibility
- Target modern browsers (latest 2 versions of Chrome, Firefox, Safari, Edge)
- Test on mobile devices and tablets
- Ensure progressive enhancement where possible
- Use semantic HTML for better accessibility and compatibility
- Provide fallbacks for newer SCSS/CSS features when needed
- Test on different browsers during development
## Dependencies Management
- Review dependency security regularly
- Only add dependencies when necessary; prefer built-in solutions first
- Document why each major dependency was chosen
- Keep dependencies updated to patch versions regularly
- Remove unused dependencies periodically
- Check bundle size impact before adding new packages
- Prefer well-maintained packages with active communities
- Pin major versions to avoid breaking changes
## Mobile Responsiveness
- Use mobile-first approach in SCSS development
- Define consistent breakpoints as SCSS variables: mobile (default), tablet (768px+), desktop (1024px+)
- Test layouts on various screen sizes
- Use flexible units (%, em, rem) instead of fixed pixels when appropriate
- Test touch interactions on actual mobile devices
- Ensure readable font sizes on all devices (min 16px for inputs)
- Optimize images and assets for different screen sizes
## Performance & Optimization
- Use React.memo for memoized components to prevent unnecessary re-renders
- Use useCallback and useMemo hooks to optimize performance where appropriate
- Implement dynamic imports with `next/dynamic` for code splitting
- Lazy load components and assets when possible
- Monitor bundle size and optimize dependencies
- Use Image component from `next/image` for optimized image loading
- Leverage Next.js built-in optimizations like automatic static optimization
- Consider using API Routes or Server Components for sensitive operations
## Security Best Practices
- Sanitize user inputs to prevent XSS attacks
- Avoid exposing sensitive information in the codebase
- Keep dependencies up to date to mitigate vulnerabilities
- Use HTTPS for all network requests
- Validate with Zod
## Validation Rules & Data Integrity
- Use Zod for all form submissions and API data validation
- Define reusable Zod schemas in `app/lib/schemas/` or co-located schema files
- Create separate schema files for each domain/feature (e.g., `userSchema.ts`, `productSchema.ts`)
- Validate on both client-side (for UX) and server-side (for security)
- Provide clear, user-friendly error messages from validation failures
- Use specific Zod methods for different validation types (`.string()`, `.number()`, `.email()`, `.url()`, `.min()`, `.max()`, `.regex()`, etc.)
- Implement custom validation rules for business logic (e.g., password strength, unique usernames)
- Validate API responses before using data in the application
- Use `.safeParse()` for non-blocking validation errors
- Use `.parse()` only when you want to throw errors immediately
- Refine schemas with `.refine()` and `.superRefine()` for complex validation logic
- Create union types with Zod for polymorphic data structures
- Use `.transform()` to normalize data after validation (e.g., trim whitespace, convert case)
- Document validation rules and error messages for form fields
- Validate array elements and nested objects thoroughly
- Create reusable validation schemas for common patterns (email formats, phone numbers, URLs, etc.)
- Use branded types or branded validation for domain-specific values
- Test all validation rules with edge cases and invalid inputs
- Log validation errors for debugging and monitoring purposes
- Ensure validation error responses are consistent across all endpoints
## Testing & Quality Assurance
- Write test cases for new features
- Use console.log sparingly; prefer proper debugging tools
- Test components with various props and states
- Ensure code follows the established style guidelines
- Check for potential performance issues
- Validate that security best practices are followed
## Version Control & Collaboration
- Follow GitHub flow for branching and pull requests
- Use feature branches for new developments and bug fixes
- Write clear, descriptive commit messages
- Review code changes thoroughly before merging
- Resolve merge conflicts promptly and carefully
- Communicate with team members for clarifications or suggestions
- Follow semantic versioning for releases
- Tag releases in Git with appropriate version numbers
## Documentation & Communication
- Keep documentation updated with any changes made to the codebase
- Maintain up-to-date documentation in the `docs/` folder
- Document new features and changes in the `CHANGELOG.md`
- Use JSDoc comments for functions and complex logic
- Create README files for new components or modules
- Use clear and concise language in code comments and documentation
- Keep team members informed about significant changes or updates
## Code Review Process
- Ensure code follows the established style guidelines
- Verify that new features are well-documented and tested
- Check for potential performance issues
- Confirm that accessibility standards are met
- Validate that security best practices are followed
- Ensure that the code is modular and reusable where appropriate
- Review commit messages for clarity and relevance
- Test the code locally before approving the pull request
- Encourage open discussion during code reviews and team meetings
## Deployment & CI/CD
- Ensure the build passes all tests before deployment
- Ensure all code changes trigger CI/CD pipelines
- Monitor build status and address any failures promptly
- Automate testing and linting in the CI/CD process with `npm run lint` and `npm run build`
- Review deployment logs for any issues
- Keep CI/CD configuration files updated (`.github/workflows/` for GitHub Actions)
- Monitor the application post-deployment for any issues
- Rollback procedures should be documented and tested
- Update environment variables as needed for different deployment environments
- Use Vercel or similar Next.js-optimized hosting for best performance
## Troubleshooting & Support
- Common issues and their solutions should be documented in the `TROUBLESHOOTING.md` file
- Encourage team members to document new issues and solutions as they arise
- Provide links to relevant Stack Overflow discussions or GitHub issues for complex problems
- Maintain a FAQ section for quick reference on common questions
## Project Management & Continuous Improvement
- Use project management tools (e.g., Jira, Trello) to track tasks and progress
- Prioritize tasks based on project deadlines and team capacity
- Regularly update task statuses to reflect current progress
- Conduct sprint planning and retrospectives to improve workflow
- Ensure all team members are aligned on project goals and timelines
- Regularly review and update these instructions based on team feedback
- Encourage team members to suggest improvements
- Conduct periodic code reviews to ensure adherence to guidelines
- Stay informed about updates to React, Vite, and ESLint that may impact the project
- Foster a culture of continuous learning and improvement within the team
## Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)
- [Zod Documentation](https://zod.dev/)
- [Vite Documentation](https://vitejs.dev/guide/)