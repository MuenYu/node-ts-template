import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
	{ ignores: ['dist', 'coverage', 'node_modules'] },
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			'no-console': 'off',
		},
	},
];
