# Blog Web - FE

## System Minimum Requirements

General
- Node.js ≥ 20
- Yarn ≥ 1.22.10

## Dependencies

This project is built using:

- React (v19) with TypeScript

- Vite for fast development and build

- Ant Design for UI components

- Styled Components for styling

- React Router DOM for navigation

- Axios for API requests (Client-Side)

## Start development

Prerequisites:
Make sure, to install `yarn` as the package manager.

Install all dependencies (run if there's a new dependency added in `package.json`)

```bash
yarn
```

And run the development server:

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Available Scripts

- `yarn dev` - Starts the development server with Vite

- `yarn build` - Builds the project with TypeScript and Vite

- `yarn lint` - Runs ESLint to check for code quality

- `yarn preview` - Serves the built project for preview

- `yarn test` - Runs Jest tests with coverage

### Testing

This project uses Jest and React Testing Library for unit and integration testing. Run tests with:

```
yarn test
```

### Linting

Run ESLint to check for code issues:

```
yarn lint
```

### Build for Production

To generate a production build, run:

```
yarn build
```

This will compile the project using TypeScript and Vite.

## Branching Strategy

We follow a structured branching strategy to maintain a clean and organized codebase. All changes should be pushed to a dedicated feature branch before merging into main via a Pull Request (PR).

### Branch Naming Conventions

- Feature Branch: feature/<feature-name> – For new features.

- Bug Fix Branch: fix/<bug-description> – For bug fixes.

- Refactor Branch: refactor/<code-improvement> – For code refactoring.

- Hotfix Branch: hotfix/<urgent-fix> – For critical fixes in production.

Development Flow

1. Create a new branch based on main:

```
git checkout -b feature/new-feature
```

2. Commit your changes with meaningful messages following git conventions.

3. Push your branch:
```
git push origin feature/new-feature
```

4. Create a Pull Request (PR) to merge your branch into main.

5. Request code review and make necessary changes.

6. Merge the PR once approved.

This ensures code quality, reviewability, and smooth collaboration. For any issues or contributions, please raise a PR and tag me @zaqiakbaar. 🚀