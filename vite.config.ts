import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
    ],
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        input: {
          app: resolve(__dirname, 'index.html'),
          404: resolve(__dirname, '404.html'),
        },
      },
    },
})