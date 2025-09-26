import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import tailwindcss from '@tailwindcss/vite';
import path from 'path';


export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio/',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true,
  },
});