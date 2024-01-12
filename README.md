# React + TypeScript + Vite + ESLint + Prettier

npm init -y
npm install create-vite
npm create vite@latest . -- --template react-ts
npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-config-prettier eslint-plugin-prettier prettier

Create a Prettier configuration file .prettierrc.json in your project root

```js
{
  "singleQuote": true,
  "useTabs": false,
  "tabWidth": 2,
  "semi": true,
  "trailingComma": "all"
}
```
edit configuration file .eslintrc.cjs 

```js
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
  
  plugins: [
    'react-refresh',
    'react', 
    'react-hooks', 
    'jsx-a11y', 
    'prettier'
  ],
  rules: {
    'object-curly-spacing': ["error", "always"],
    'prettier/prettier': "off",
    'react/react-in-jsx-scope': "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

```