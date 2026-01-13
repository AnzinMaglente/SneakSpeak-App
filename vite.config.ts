import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'src',
    chunkSizeWarningLimit: 2000, // size in KB, e.g., 2000 KB = 2 MB
  },
  base: '/'
})
