# Agent Guidelines & Project Standards

## 1. Coding Style Rules
* **Naming Conventions:** Use camelCase for variables and function names, PascalCase for classes and components, and UPPER_SNAKE_CASE for constants.
* **Formatting:** Format all code using Prettier with single quotes and 2-space indentation.
* **Language Starndards:** Target modern ES6+ JavaScript standards. Use explicit `const` and `let`; `var` is strictly forbidden.

## 2. Testing Requirements 
* All new utility functions must be accompanied by unit tests covering primary use cases and edge cases.
* Always run and verify local tests before submitting changes.
* Ensure code passes ESLint checks without warnings or errors.

## 3. Prohibited Patterns
* **No hardcoded secrets:** Never place API keys, passwords, or credentials directly in source files; use environment variables instead.
* **No `var` keywords or unhandled Promises:** Do not leave unhandled Promise rejections or floating async calls without proper `try/catch` or `.catch()` blocks.
* **No generic/vague comments:** Avoid generating placeholder comments like `// TODO: Implement later` without complete logic.