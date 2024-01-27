module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json'],
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],

	plugins: ['react-refresh', 'react', 'react-hooks', 'jsx-a11y', 'prettier'],
	rules: {
		'object-curly-spacing': ['error', 'always'],
		'prettier/prettier': 'off',
		'react/display-name': 'off',
		'react/react-in-jsx-scope': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
}
