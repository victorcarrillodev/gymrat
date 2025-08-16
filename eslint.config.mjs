// eslint.config.js
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importHelpers from 'eslint-plugin-import-helpers';

export default [
  {
    ignores: ['*.config.*', '.next', 'node_modules'],
  },
  ...new FlatCompat({
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
    baseDirectory: process.cwd(),
  }).extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:storybook/recommended'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'import-helpers': importHelpers,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [['/^next/', 'module'], '/^@\\/styles/', '/^@\\/components/', '/^@\\/lib/', ['parent', 'sibling', 'index']],
          alphabetize: { order: 'asc', ignoreCase: true },
        },
      ],
      'prettier/prettier': [
        'error',
        {
          jsxBracketSameLine: false,
        },
      ],
      'react/no-unescaped-entities': 'off',
    },
  },
];
