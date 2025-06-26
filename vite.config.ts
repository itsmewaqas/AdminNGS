import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://itsmewaqas.github.io/AdminNGS', // <-- required for GitHub Pages
})
