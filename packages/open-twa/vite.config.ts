import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'

type ViteConfigInput = {
  mode: string
  command: string
}

export default (args: ViteConfigInput) => {
  const generateScopedName =
    args.mode === 'production' ? '[hash:base64:2]' : '[local]_[hash:base64:2]'

  return defineConfig({
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'open-twa',
        formats: ['es'],
        fileName: (format) => `open-twa.${format}.js`,
      },
      sourcemap: true,
      target: 'esnext',
      minify: false,
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['react'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            react: 'React',
          },
        },
      },
    },
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
      svgr(),
    ],
    resolve: {
      alias: {
        '@mixins': 'src/styles/mixins',
      },
    },
    css: {
      modules: {
        localsConvention: 'dashes',
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/styles/index.scss";',
        },
      },
    },
  })
}
