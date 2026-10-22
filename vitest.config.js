import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.js'],
    exclude: [
      'tests/e2e/**',
      'node_modules/**',
      'dist/**',
      // This legacy harness hangs while collecting App under Vitest 2.
      'src/__tests__/integration.test.jsx',
      'src/components/help/__tests__/RaceConditions.test.jsx',
      'src/components/help/__tests__/ComponentLifecycle.test.jsx',
      'src/components/help/__tests__/Tooltip.test.jsx',
    ],
    css: true,
  },
})
