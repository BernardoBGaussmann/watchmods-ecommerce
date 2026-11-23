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