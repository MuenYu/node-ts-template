import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	esbuild: { target: 'es2024' },
	test: {
		clearMocks: true,
		globals: true,
			coverage: {
				provider: 'v8',
				exclude: ['node_modules', 'dist', 'coverage', 'vitest.config.ts', 'eslint.config.ts', 'tsup.config.ts'],
			},
	},
	plugins: [tsconfigPaths()],
});
