import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath, URL} from 'node:url';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
const port = 9000;

export default defineConfig({
  server: {
    port: port,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "./src/app/ui/assets/style/settings/_index.scss";'
      }
    }
  }
});
