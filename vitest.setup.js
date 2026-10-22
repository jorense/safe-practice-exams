import { vi } from 'vitest'

// The shared setup predates Vitest and uses Jest's compatible mock API.
globalThis.jest = vi

await import('./src/setupTests.js')
