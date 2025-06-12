import { defineConfig } from 'vitest/config';
import {dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // Necesario para testear el DOM en React
    setupFiles: "./setupTests.ts", // Archivo opcional para configurar Testing Library
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'pyx',
      fileName: (format) => `pyx.${format}.js`,
      formats: ['es','umd','cjs'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom','clsx'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
          'clsx': 'clsx'
        },
      },
    },
  }
})
