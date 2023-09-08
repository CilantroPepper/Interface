import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({mode}) => defineConfig({
  plugins: [react()],
  base: loadEnv(mode, process.cwd()).VITE_BASE ?? '/',
  server: {
    port: Number(loadEnv(mode, process.cwd()).VITE_DEV_PORT ?? 81)
  },
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, './src')}/`,
      '~/': `${resolve(__dirname, './')}`
    }
  }
})
