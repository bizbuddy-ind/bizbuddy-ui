import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Import the PostCSS adapter, not the core tailwindcss package
import postcssTailwind from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssTailwind(),  // ← use the adapter you just installed
        autoprefixer(),
      ]
    }
  }
})