import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	outDir: 'dist',
	platform: 'node',
	target: 'es2024',
	sourcemap: 'inline',
	minify: true,
	clean: true,
});
