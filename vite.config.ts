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
      ],
    },
    outDir: 'dist',
    /* lib: {
      entry: './index.html',
      name: 'litComponents',
      fileName(format, _entryName) {
        return `litComponents.${format}.js`;
      },
      formats: ['umd', 'es'],
    }, */
  },
});
