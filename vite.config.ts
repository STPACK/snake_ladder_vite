import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000 },
  plugins: [svgr(), react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@hook', replacement: path.resolve(__dirname, 'src/hook') },
      {
        find: '@features',
        replacement: path.resolve(__dirname, 'src/features'),
      },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
    ],
  },
})
