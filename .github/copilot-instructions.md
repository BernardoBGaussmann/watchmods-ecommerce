# Project Rules & AI Guardrails — WatchModsBR

## 1. Strict Scope Control (CRITICAL)
- **DO ONLY WHAT IS EXPLICITLY REQUESTED.** Never anticipate future features, never scaffold unrequested pages, forms, mock data, or extra components.
- If the user asks to install a package, ONLY install the package. Do NOT modify `src/` files unless explicitly instructed.
- If the user asks to create a single component (e.g., `Header.jsx`), create ONLY that component. Do NOT create `Login.jsx`, `Cart.jsx`, `Footer.jsx`, or extra routes on your own.
- When requirements are ambiguous or have multiple visual/architectural choices, **STOP and ask** before writing code.

## 2. Tech Stack & Architecture
- **Stack:** React + Vite + JavaScript (`.js` / `.jsx` only — no TypeScript) + TailwindCSS.
- **Scope V1:** Minimalist front-end SPA. No database, no external APIs, and no complex authentication unless explicitly requested in the current turn.
- **Directory Structure:**
  - `src/components/` — Reusable UI components (e.g., `Header.jsx`).
  - `src/pages/` — Route-level page views (only created when explicitly requested).
  - `src/data/` — Static data modules (only created when explicitly requested).

## 3. Language Conventions
- **Code & Filenames:** Always in English (`Header.jsx`, `watchList`, `handleAddToCart`).
- **UI Visible Text:** Always in Brazilian Portuguese (`pt-BR`) (e.g., "Início", "Relógios", "Entrar", "Carrinho").

## 4. Git & Commit Rules
- **NEVER run `git commit` or `git push` automatically** unless the user explicitly asks to commit in that prompt.
- When asked to commit, create small, atomic commits separated by concern.
- Use **English Conventional Commits** (`chore:`, `feat:`, `fix:`, `docs:`, `style:`, `refactor:`).
- **NEVER** include AI co-author trailers (`Co-authored-by:`) or mention AI tools in commit messages.

## 5. Code Quality & Maintainability (CRITICAL)
- **Readable Code with Portuguese Comments:** All functions, components, and complex logic must have clear comments in Portuguese explaining what the code does, its purpose, and any important details.
- **Modular Architecture:** Code must be organized into small, focused, reusable modules/components. Each file should have a single responsibility.
- **Easy Maintainability:** 
  - Use descriptive variable and function names in English
  - Keep functions small and focused (single responsibility)
  - Avoid code duplication (DRY principle)
  - Use consistent code style and formatting
  - Separate concerns: UI components, business logic, data, and utilities in separate files/folders
  - Export only what's necessary (named exports preferred)
  - Document complex algorithms or business rules with inline comments in Portuguese

## 6. Commit Rules (CRITICAL)
- **Generate commit prompt for EVERY change**, no matter how small (font change, color change, logic change, typo fix, etc.)
- Follow **English Conventional Commits** format: `type(scope): description`
- Types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`
- **Atomic commits** - each commit should contain only one logical change
- Provide the exact `git commit` command for the user to run
- **NEVER run `git commit` automatically** - only provide the prompt/command

## 7. Dev Server & Terminal Rules
- **NEVER start, stop, or restart the dev server (`npm run dev`).** The user manages the Vite server manually in their own terminal.
- Never run `curl` or web fetch tools against `localhost` to check CSS or rendering.