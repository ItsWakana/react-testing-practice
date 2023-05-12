import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    name: 'jsdom',
    environment: 'jsdom',
    reporters : 'verbose',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
})