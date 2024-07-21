import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'src/assets/*', dest: 'assets/' }
      ]
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:3000',
        changeOrigin: true,
        secure: false, // Disable SSL verification for development
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
});