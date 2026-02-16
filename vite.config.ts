import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000
  }
});

