import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/upload': {
        target: 'https://new-folder-8-f6nh.vercel.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/upload/, '/upload')
      }
    }
  }
  
})
