import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@store': path.resolve(__dirname, './src/store'),
      '@services': path.resolve(__dirname, './src/services'),
      '@config': path.resolve(__dirname, './src/config.ts'),
      '@mixins': path.resolve(
        __dirname,
        '../../packages/open-twa/src/styles/mixins'
      ),
      'open-twa': path.resolve(__dirname, '../../packages/open-twa/src'),
    },
  },
  plugins: [
    react(),
    svgr(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
})
