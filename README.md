# scr-image-tagging

Empty TypeScript-ready project aligned with svc-lab tooling (Bun, Oxlint, ESLint, Prettier, Vitest, tsup).

## Requirements

- Node.js 24+ (Volta pins to 24.7.0)
- Bun 1.2.x installed (for `bun run`)

## Getting Started

- Install dependencies: `yarn` or `npm install`
- Development (watch): `yarn dev` (Bun-powered watch)
- Type-check: `yarn check-types`
- Lint: `yarn lint` (Oxlint + ESLint)
- Test: `yarn test`
- Build: `yarn build` (outputs to `dist/`)
- Format: `yarn format` (Bun runner + Prettier cache)

Project files to note:

- `tsconfig.json` — TS setup with path alias `@/*` -> `src/*`
- `eslint.config.mjs` — ESLint flat config for TS (used after Oxlint)
- `vitest.config.ts` — Vitest with tsconfig path support
- `tsup.config.ts` — Build config
- `.prettierrc.json` — Prettier basic settings for scripts
- `src/index.ts` — Empty entry point
