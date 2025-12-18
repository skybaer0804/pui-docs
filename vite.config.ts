import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
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
