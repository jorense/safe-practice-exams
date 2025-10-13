/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.js'],
    css: {
      modules: {
        classNameStrategy: 'non-scoped'
      }
    },
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/components/**/*.{js,jsx}'],
      exclude: [
        'src/components/**/*.test.{js,jsx}',
        'src/components/**/__tests__/**'
      ]
    },
    testTimeout: 10000,
    hookTimeout: 10000
  }
})