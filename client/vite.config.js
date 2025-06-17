import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // <-- Add this line for production source maps
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})
