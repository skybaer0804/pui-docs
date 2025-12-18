import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { VitePWA } from 'vite-plugin-pwa';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function readPuiVersion(): string {
    try {
        const puiPackageJsonPath = path.resolve(__dirname, '../pui/package.json');
        const raw = fs.readFileSync(puiPackageJsonPath, 'utf-8');
        const parsed = JSON.parse(raw) as { version?: string };
        return parsed.version ?? 'dev';
    } catch {
        return 'dev';
    }
}

const PUI_VERSION = readPuiVersion();

export default defineConfig({
    define: {
        __PUI_VERSION__: JSON.stringify(PUI_VERSION),
    },
    plugins: [
        preact(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['asset/favicon.svg', 'asset/apple-touch-icon.svg', 'asset/mask-icon.svg'],
            manifest: {
                name: 'PUI Docs',
                short_name: 'PUI Docs',
                description: 'PUI Library Documentation',
                theme_color: '#6366f1',
                background_color: '#ffffff',
                display: 'standalone',
                start_url: '/',
                scope: '/',
                icons: [
                    {
                        src: 'asset/pwa-192x192.svg',
                        sizes: '192x192',
                        type: 'image/svg+xml',
                        purpose: 'any maskable',
                    },
                    {
                        src: 'asset/pwa-512x512.svg',
                        sizes: '512x512',
                        type: 'image/svg+xml',
                        purpose: 'any maskable',
                    },
                ],
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
            },
        }),
    ],
    resolve: {
        alias: {
            react: 'preact/compat',
            'react-dom': 'preact/compat',
        },
    },
});
