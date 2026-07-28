import path from 'node:path'
import { fileURLToPath } from 'node:url'
import vike from 'vike/plugin'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const root = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vike(), vue()],
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
  resolve: {
    alias: [
      {
        find: /^tabulator-tables$/,
        replacement: path.resolve(
          root,
          'node_modules/tabulator-tables/dist/js/tabulator.min.js',
        ),
      },
    ],
  },
  ssr: {
    noExternal: [
      'survey-core',
      'survey-vue3-ui',
      'survey-creator-core',
      'survey-creator-vue',
      'survey-analytics',
      'survey-pdf',
    ],
  },
})
