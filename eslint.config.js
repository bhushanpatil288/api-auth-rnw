import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

export default defineConfig([
  globalIgnores([
    'dist',
    'build',
    'node_modules',
  ]),

  js.configs.recommended,

  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],

  reactHooks.configs.flat.recommended,

  reactRefreshPlugin.configs.vite,

  importPlugin.flatConfigs.recommended,

  {
    files: ['**/*.{js,jsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },

      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        node: true,
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      unicorn,
    },

    rules: {
      /*
       * GENERAL
       */
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',

      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],

      'prefer-const': 'error',
      'no-var': 'error',

      /*
       * IMPORTS
       */
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],

          'newlines-between': 'always',

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      'import/no-unresolved': 'off',

      /*
       * REACT
       */
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
        },
      ],

      /*
       * ACCESSIBILITY
       */
      'jsx-a11y/alt-text': 'warn',

      /*
       * UNICORN
       */
      'unicorn/filename-case': 'off',
      'unicorn/prefer-query-selector': 'off',
    },
  },
])