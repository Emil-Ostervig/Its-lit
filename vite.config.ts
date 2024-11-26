import path from 'path';
import {defineConfig} from 'vite';
// Ensure tsconfig path settings are resolved by vite
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [tsconfigPaths()],
  build: {
    rollupOptions: {
      input: [
        path.resolve(__dirname, './index.html'),
        path.resolve(__dirname, './native.html'),
        path.resolve(__dirname, './ssr.html'),
      ],
    },
    outDir: 'dist',
  },
});
