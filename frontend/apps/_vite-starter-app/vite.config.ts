import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

const PORT = parseInt(process.env.PORT) || 3000;

if (isNaN(PORT)) {
    throw new Error('Invalid PORT');
}

export default defineConfig(() => {
    const config = {
        plugins: [react()],
        base: '/',
        server: {
            port: PORT,
        },
        preview: {
            port: PORT,
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
            },
        },
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './src/setupTests.ts',
            // you might want to disable the `css: true` line, since we don't have
            // tests that rely on CSS -- and parsing CSS is slow.
            // I'm leaving it in here because often people want to parse CSS in tests.
            css: true,
            coverage: {
                include: ['src/**/*.ts', 'src/**/*.tsx'],
                exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx', 'src/main.tsx', 'src/**/*.d.ts'],
            },
        },
    };

    return config;
});
