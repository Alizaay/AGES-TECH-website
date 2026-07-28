import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

const src = (path) => fileURLToPath(new URL(`./src/${path}`, import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@design-system': src('design-system'),
      '@config': src('config'),
      '@components': src('components'),
      '@lib': src('lib'),
      '@services': src('services'),
      '@hooks': src('hooks'),
      '@seo': src('seo'),
    },
  },
})