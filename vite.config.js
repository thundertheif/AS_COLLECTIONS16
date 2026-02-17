import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/AS-COLLECTIONS/',   // important for GitHub Pages
  plugins: [react()],
  server: { host: true }
})