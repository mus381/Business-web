import { defineConfig } from 'vite'
import htmlMinify from 'vite-plugin-html-minify'
export default defineConfig({
  plugins: [htmlMinify()],
  css: { postcss: './postcss.config.js' },
  build: { outDir: 'dist', sourcemap: false, minify: 'esbuild' },
  server: { open: true, port: 5173 }
})
