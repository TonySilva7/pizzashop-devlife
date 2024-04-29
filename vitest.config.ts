import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./test/setupTests.ts'],
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
