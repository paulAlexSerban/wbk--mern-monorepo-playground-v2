import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginTestingLibraryReact from 'eslint-plugin-testing-library';
import pluginVitest from 'eslint-plugin-vitest';
import pluginReactRefresh from 'eslint-plugin-react-refresh';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        ignores: ['coverage/*', 'coverage/**', 'dist/*', 'node_modules/*'],
        plugins: {
            pluginReactHooks,
            'react-refresh': pluginReactRefresh,
            vitest: pluginVitest,
        },
        rules: {
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'no-unused-vars': 'warn', // warning, not error
            'vitest/expect-expect': 'off', // eliminate distracting red squiggles while writing tests
            'react/prop-types': 'off', // turn off props validation
        },
    },
    {
        languageOptions: {
            ecmaVersion: 2020, // eslintrc.js => env: { es2020: true }
            globals: {
                ...globals.browser, // eslintrc.js => env: { browser: true }
                ...pluginVitest.environments.env.globals,
            },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    pluginReact.configs.flat['jsx-runtime'], // Add this if you are using React 17+
    pluginTestingLibraryReact.configs['flat/react'],
    pluginVitest.configs.recommended,
];
