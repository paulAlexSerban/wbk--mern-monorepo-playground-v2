import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        ignores: ['coverage/*', 'coverage/**', 'dist/*', 'node_modules/*'],
        // plugins: {
        //   pluginReact,
        // },
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        settings: {
            react: {
                version: 'detect',
            },
        },
    }, // This is not a plugin object, but a shareable config object
    pluginReact.configs.flat['jsx-runtime'], // Add this if you are using React 17+
];
