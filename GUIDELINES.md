# Monopoly Game Development Guidelines

## Table of Contents
1. [General Guidelines](#general-guidelines)
2. [Frontend Guidelines (React.js)](#frontend-guidelines-reactjs)
    - [Naming Conventions](#naming-conventions-frontend)
3. [Backend Guidelines (Node.js)](#backend-guidelines-nodejs)
    - [Naming Conventions](#naming-conventions-backend)
4. [Branch Name Conventions](#branch-name-conventions)
5. [Commit Message Guidelines](#commit-message-guidelines)

## General Guidelines
- Follow consistent coding styles and best practices.
- Makesure naming conventions are STRICTLY followed everywhere(coding, branch, commit, PR)
- Each name should be descriptive and conveys the purpose and should not be random x or y.
- PRO TIP: function/method names are always verbs/actions. Variables are always Nouns

## Frontend Guidelines (React.js)
### Naming Conventions (Frontend)
- Use `PascalCase` for React components.
- Use `camelCase` for variables and functions.
- Use `UPPER_SNAKE_CASE` for constants.

**Examples:**
```jsx
const Board = () => { /* ... */ }
const currentPlayer = 'Player 1';
const MAX_PLAYERS = 4;
```
## Backend Guidelines (Node.js)
### Naming Conventions (Backend)

- Use `camelCase` for variables and functions.
- Use `PascalCase` for class names.
- Use `UPPER_SNAKE_CASE` for constants.

**Examples:**
```js
const express = require('express');
const router = express.Router();
class GameController { /* ... */ }
const MAX_PLAYERS = 4;
```
## Branch Name Conventions
- Use `kebab-case` for branch names.
- Prefix the branch name with the type of work being done.
- Prefixes:
    -   `feature/` for new features
    -   `bugfix/` for bug fixes
    -   `hotfix/` for critical fixes
    -   `chore/` for maintenance tasks
- After prefix, add `MP-<Task id>-<Short Descrption>`
- `<Task id>` is nothing but serial id of task in `USER-STORIES.md`
**Examples:**
```
feature/MP-20-add-new-property
bugfix/MP-21-fix-rent-calculation
```
## Commit Message Guidelines
- Use  Simple Present Tense (e.g., "Add feature", "Fix bug").
- Keep the message concise and descriptive.
- Include a reference to the issue or task being addressed if applicable.
```
Add new property 'Hyderabad'
Fix rent calculation error
Update README with new instructions
```


