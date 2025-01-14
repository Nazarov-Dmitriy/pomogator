import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
    server: {
        port: 5172
    },
    devtool: 'source-map',
    plugins: [vue(), Sitemap({ hostname: 'https://xn----8sbisvlbcdqnh.xn--p1ai', readable: true })],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/assets/styles/_variables.scss";                      `
            }
        }
    }
})
