# Node TS Template (Node + Yarn)

TypeScript template for Node.js aligned with modern tooling: Yarn (package manager), TSX (runtime for dev), TypeScript, tsup, Vitest, ESLint, Oxlint, and Prettier. Use this as a starting point for new Node projects.

## Requirements

- Node.js (pinned via Volta for consistent runtime)
- Yarn (managed through the `packageManager` field and Volta pin)
- TSX (installed as a dev dependency for TypeScript-first workflows)

## Using This Template

- Click “Use this template” (GitHub) or clone and change `name`/`description` in `package.json`.
- Install dependencies: `yarn install`
- Start developing: `yarn dev`

## Scripts

- `yarn dev` — Runs `src/index.ts` in watch mode via TSX with native Node debugging support.
- `yarn build` — Bundles to `dist/` using tsup targeting `es2024`.
- `yarn check-types` — Type-checks with `tsc --noEmit`.
- `yarn lint` — Oxlint first, then ESLint (flat config, TS-aware).
- `yarn test` — Vitest with V8 coverage config available.
- `yarn test:coverage` — Runs tests and produces coverage.
- `yarn format` — Formats with Prettier using a Node helper script.
- `yarn format:ci` — Checks formatting (no write).
- `yarn clean` — Removes `dist`, `coverage`, and `node_modules`.

## Project Structure

- `src/` — Application source (entry: `src/index.ts`).
- `bin` - helper scripts for engineering tasks (e.g., Prettier).
- `dist/` — Build output (generated).
- `coverage/` — Test coverage (generated).

## Conventions

- Use the `@/*` import alias for files under `src/`.
- Keep code warning-free: `yarn lint` denies warnings (`--max-warnings 0`).
- Prefer unit tests with Vitest; use coverage locally or in CI as needed.

## Notes

- TSX powers the TypeScript entrypoint in development while keeping Node's debugging tools available.
- Yarn handles package management; tsup builds production bundles.
- The Prettier cache directory `.cache/` is ignored via `.gitignore`.
